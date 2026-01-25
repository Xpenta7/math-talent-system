// ==================== UTILITY FUNCTIONS MODULE ====================

// QR Code Generator
function generateQRCode(elementId, text, options = {}) {
    const element = document.getElementById(elementId);
    if (!element) {
        console.error(`Element with id "${elementId}" not found`);
        return;
    }
    
    // Clear previous content
    element.innerHTML = '';
    
    const canvas = document.createElement('canvas');
    element.appendChild(canvas);
    
    const config = {
        width: options.width || 150,
        height: options.height || 150,
        margin: options.margin || 1,
        color: {
            dark: options.darkColor || '#000000',
            light: options.lightColor || '#FFFFFF'
        },
        ...options
    };
    
    // Use QRCode.js to generate QR code
    if (typeof QRCode !== 'undefined') {
        QRCode.toCanvas(canvas, text, config, function(error) {
            if (error) {
                console.error('QR Code generation error:', error);
                showFallbackQR(element, text, config);
            }
        });
    } else {
        console.warn('QRCode.js not loaded, using fallback');
        showFallbackQR(element, text, config);
    }
}

// Fallback QR display
function showFallbackQR(element, text, config) {
    element.innerHTML = `
        <div class="w-full h-full bg-slate-800 flex flex-col items-center justify-center text-white text-sm rounded-lg p-4">
            <div class="text-center">
                <div class="text-xl font-bold mb-2">QR CODE</div>
                <div class="text-xs opacity-75">${text.substring(0, 20)}...</div>
                <div class="text-xs opacity-50 mt-2">(Preview)</div>
            </div>
        </div>
    `;
}

// Time and Date Utilities
function updateCurrentTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('th-TH', { 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit'
    });
    
    const dateString = now.toLocaleDateString('th-TH', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // Update all time elements
    document.querySelectorAll('.current-time').forEach(el => {
        el.innerHTML = `<span class="font-bold">${timeString}</span>`;
    });
    
    document.querySelectorAll('.current-date').forEach(el => {
        el.textContent = dateString;
    });
    
    // Update specific element if exists
    const timeElement = document.getElementById('current-time');
    if (timeElement) {
        timeElement.innerHTML = `<span class="font-bold">${timeString}</span><br><span class="text-xs">${dateString}</span>`;
    }
}

// Format Currency
function formatCurrency(amount, currency = 'THB') {
    const formatter = new Intl.NumberFormat('th-TH', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    
    return formatter.format(amount);
}

// Format Date
function formatDate(date, format = 'th-TH') {
    const d = new Date(date);
    
    if (format === 'th-TH') {
        return d.toLocaleDateString('th-TH', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    }
    
    if (format === 'full') {
        return d.toLocaleDateString('th-TH', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    }
    
    return d.toLocaleDateString();
}

// Calculate Time Ago
function timeAgo(timestamp) {
    const now = new Date();
    const past = new Date(timestamp);
    const diffInSeconds = Math.floor((now - past) / 1000);
    
    if (diffInSeconds < 60) {
        return 'เมื่อสักครู่นี้';
    }
    
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
        return `${diffInMinutes} นาทีที่แล้ว`;
    }
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
        return `${diffInHours} ชั่วโมงที่แล้ว`;
    }
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) {
        return `${diffInDays} วันที่แล้ว`;
    }
    
    return formatDate(past, 'th-TH');
}

// Debounce Function
function debounce(func, wait, immediate = false) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        
        if (callNow) func(...args);
    };
}

// Throttle Function
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Local Storage Utilities
const storage = {
    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (e) {
            console.error('Error saving to localStorage:', e);
            return false;
        }
    },
    
    get: (key, defaultValue = null) => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (e) {
            console.error('Error reading from localStorage:', e);
            return defaultValue;
        }
    },
    
    remove: (key) => {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (e) {
            console.error('Error removing from localStorage:', e);
            return false;
        }
    },
    
    clear: () => {
        try {
            localStorage.clear();
            return true;
        } catch (e) {
            console.error('Error clearing localStorage:', e);
            return false;
        }
    }
};

// Validation Functions
const validation = {
    email: (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    },
    
    phone: (phone) => {
        const re = /^[0-9]{10}$/;
        return re.test(phone);
    },
    
    password: (password) => {
        return password.length >= 6;
    },
    
    required: (value) => {
        return value !== null && value !== undefined && value.toString().trim() !== '';
    }
};

// Notification System
function showToast(message, type = 'info', duration = 5000) {
    const toastContainer = document.getElementById('toast-container') || createToastContainer();
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <div class="flex items-center gap-3">
            <i data-lucide="${getToastIcon(type)}" class="w-5 h-5"></i>
            <span class="toast-message">${message}</span>
        </div>
        <button onclick="this.parentElement.remove()" class="toast-close">
            <i data-lucide="x" class="w-4 h-4"></i>
        </button>
    `;
    
    toastContainer.appendChild(toast);
    
    // Refresh icons
    setTimeout(() => {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }, 10);
    
    // Auto-remove after duration
    setTimeout(() => {
        if (toast.parentNode) {
            toast.classList.add('fade-out');
            setTimeout(() => toast.remove(), 300);
        }
    }, duration);
    
    return toast;
}

function getToastIcon(type) {
    const icons = {
        success: 'check-circle',
        error: 'alert-circle',
        warning: 'alert-triangle',
        info: 'info'
    };
    return icons[type] || 'info';
}

function createToastContainer() {
    const container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
    
    // Add styles if not exists
    if (!document.querySelector('#toast-styles')) {
        const style = document.createElement('style');
        style.id = 'toast-styles';
        style.textContent = `
            .toast-container {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 9999;
                display: flex;
                flex-direction: column;
                gap: 10px;
                max-width: 400px;
            }
            
            .toast {
                background: white;
                border-radius: 8px;
                padding: 12px 16px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                display: flex;
                justify-content: space-between;
                align-items: center;
                animation: slideIn 0.3s ease-out;
            }
            
            .toast-success {
                border-left: 4px solid #10b981;
            }
            
            .toast-error {
                border-left: 4px solid #ef4444;
            }
            
            .toast-warning {
                border-left: 4px solid #f59e0b;
            }
            
            .toast-info {
                border-left: 4px solid #3b82f6;
            }
            
            .toast-close {
                background: none;
                border: none;
                color: #6b7280;
                cursor: pointer;
                padding: 4px;
                border-radius: 4px;
            }
            
            .toast-close:hover {
                background: #f3f4f6;
            }
            
            .fade-out {
                opacity: 0;
                transform: translateX(100%);
                transition: all 0.3s ease;
            }
            
            @keyframes slideIn {
                from {
                    opacity: 0;
                    transform: translateX(100%);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    return container;
}

// DOM Utilities
const dom = {
    createElement: (tag, attributes = {}, children = []) => {
        const element = document.createElement(tag);
        
        // Set attributes
        Object.entries(attributes).forEach(([key, value]) => {
            if (key === 'className') {
                element.className = value;
            } else if (key === 'textContent') {
                element.textContent = value;
            } else if (key === 'innerHTML') {
                element.innerHTML = value;
            } else {
                element.setAttribute(key, value);
            }
        });
        
        // Append children
        children.forEach(child => {
            if (typeof child === 'string') {
                element.appendChild(document.createTextNode(child));
            } else {
                element.appendChild(child);
            }
        });
        
        return element;
    },
    
    removeAllChildren: (element) => {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    },
    
    toggleClass: (element, className) => {
        element.classList.toggle(className);
    },
    
    addClass: (element, className) => {
        element.classList.add(className);
    },
    
    removeClass: (element, className) => {
        element.classList.remove(className);
    },
    
    isVisible: (element) => {
        if (!element) return false;
        const style = window.getComputedStyle(element);
        return style.display !== 'none' && style.visibility !== 'hidden';
    }
};

// String Utilities
const stringUtils = {
    capitalize: (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },
    
    truncate: (str, length, suffix = '...') => {
        if (str.length <= length) return str;
        return str.substring(0, length) + suffix;
    },
    
    slugify: (str) => {
        return str.toLowerCase()
            .replace(/[^\w\s]/g, '')
            .replace(/\s+/g, '-')
            .replace(/--+/g, '-')
            .trim();
    },
    
    randomString: (length = 8) => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }
};

// Number Utilities
const numberUtils = {
    random: (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    
    formatNumber: (num) => {
        return new Intl.NumberFormat('th-TH').format(num);
    },
    
    percentage: (part, total) => {
        if (total === 0) return 0;
        return Math.round((part / total) * 100);
    },
    
    average: (numbers) => {
        if (numbers.length === 0) return 0;
        const sum = numbers.reduce((a, b) => a + b, 0);
        return sum / numbers.length;
    }
};

// Array Utilities
const arrayUtils = {
    shuffle: (array) => {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    },
    
    chunk: (array, size) => {
        const chunks = [];
        for (let i = 0; i < array.length; i += size) {
            chunks.push(array.slice(i, i + size));
        }
        return chunks;
    },
    
    unique: (array) => {
        return [...new Set(array)];
    },
    
    sortBy: (array, key, order = 'asc') => {
        return [...array].sort((a, b) => {
            if (a[key] < b[key]) return order === 'asc' ? -1 : 1;
            if (a[key] > b[key]) return order === 'asc' ? 1 : -1;
            return 0;
        });
    }
};

// Initialize Utilities
function initUtilities() {
    // Start updating time every minute
    updateCurrentTime();
    setInterval(updateCurrentTime, 60000);
    
    // Add click outside handler for modals
    document.addEventListener('click', function(event) {
        const modals = document.querySelectorAll('.modal-slide-up');
        modals.forEach(modal => {
            if (event.target === modal.parentElement) {
                closeModal();
            }
        });
    });
    
    // Add escape key handler
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
    
    console.log('Utilities initialized successfully');
}

// Export utilities for global use
window.utils = {
    generateQRCode,
    updateCurrentTime,
    formatCurrency,
    formatDate,
    timeAgo,
    debounce,
    throttle,
    storage,
    validation,
    showToast,
    dom,
    string: stringUtils,
    number: numberUtils,
    array: arrayUtils,
    init: initUtilities
};

// Auto-initialize when loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initUtilities);
} else {
    initUtilities();
}
