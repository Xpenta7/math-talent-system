// ==================== MODAL MANAGEMENT MODULE ====================

// Modal state management
let currentModal = null;
let modalQueue = [];

// Open Modal
function openModal(modalType, options = {}) {
    const modal = document.getElementById('generic-modal');
    if (!modal) {
        console.error('Generic modal not found');
        return;
    }
    
    const title = document.getElementById('modal-title');
    const content = document.getElementById('modal-content');
    
    if (!title || !content) {
        console.error('Modal elements not found');
        return;
    }
    
    // Close current modal if open
    if (currentModal) {
        modalQueue.push({type: modalType, options});
        return;
    }
    
    currentModal = modalType;
    
    let modalTitle = 'Feature Preview';
    let modalContent = '';
    
    // Define modal content based on type
    switch(modalType) {
        case 'branch-finance':
            modalTitle = 'การเงินสาขา';
            modalContent = getBranchFinanceContent();
            break;
            
        case 'branch-schedule':
            modalTitle = 'ตารางเรียนทั้งหมดในสาขา';
            modalContent = getBranchScheduleContent();
            break;
            
        case 'branch-training':
            modalTitle = 'VDO Training สาขา';
            modalContent = getBranchTrainingContent();
            break;
            
        case 'create-receipt':
            modalTitle = 'ออกใบเสร็จ/กำกับภาษี';
            modalContent = getCreateReceiptContent();
            break;
            
        case 'teacher-schedule':
            modalTitle = 'ตารางสอนของฉัน';
            modalContent = getTeacherScheduleContent();
            break;
            
        case 'my-students':
            modalTitle = 'นักเรียนของฉัน';
            modalContent = getMyStudentsContent();
            break;
            
        case 'teacher-leave':
            modalTitle = 'แจ้งลา/สลับคาบเรียน';
            modalContent = getTeacherLeaveContent();
            break;
            
        case 'teacher-documents':
            modalTitle = 'เอกสารหลักสูตร (ดูและพิมพ์)';
            modalContent = getTeacherDocumentsContent();
            break;
            
        case 'teacher-training':
            modalTitle = 'VDO Training (ดูเท่านั้น)';
            modalContent = getTeacherTrainingContent();
            break;
            
        case 'makeup-class':
            modalTitle = 'เรียนชดเชย';
            modalContent = getMakeupClassContent();
            break;
            
        case 'payment-parent':
            modalTitle = 'ชำระเงิน';
            modalContent = getPaymentParentContent();
            break;
            
        case 'schedule-parent':
            modalTitle = 'ตารางเรียน';
            modalContent = getScheduleParentContent();
            break;
            
        case 'system-settings':
            modalTitle = 'การตั้งค่าระบบ';
            modalContent = getSystemSettingsContent();
            break;
            
        case 'backup-system':
            modalTitle = 'Backup & Restore';
            modalContent = getBackupSystemContent();
            break;
            
        case 'analytics-report':
            modalTitle = 'รายงานวิเคราะห์';
            modalContent = getAnalyticsReportContent();
            break;
            
        case 'audit-log':
            modalTitle = 'Audit Log';
            modalContent = getAuditLogContent();
            break;
            
        default:
            modalContent = getDefaultModalContent(modalType);
    }
    
    // Apply custom options
    if (options.title) modalTitle = options.title;
    if (options.content) modalContent = options.content;
    
    title.innerText = modalTitle;
    content.innerHTML = modalContent;
    
    // Show modal with animation
    modal.classList.remove('hide');
    modal.querySelector('.modal-slide-up').classList.add('modal-slide-up');
    
    // Refresh icons
    setTimeout(() => {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }, 100);
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal() {
    const modals = [
        'generic-modal', 'report-modal', 'qr-checkin-modal', 
        'virtual-card-fullscreen', 'vdo-training-modal'
    ];
    
    modals.forEach(modalId => {
        const modal = document.getElementById(modalId);
        if (modal && !modal.classList.contains('hide')) {
            const modalContent = modal.querySelector('.modal-slide-up');
            if (modalContent) {
                modalContent.classList.add('modal-slide-down');
                setTimeout(() => {
                    modal.classList.add('hide');
                    modalContent.classList.remove('modal-slide-down');
                    currentModal = null;
                    
                    // Process next modal in queue
                    if (modalQueue.length > 0) {
                        const next = modalQueue.shift();
                        setTimeout(() => openModal(next.type, next.options), 300);
                    }
                }, 400);
            } else {
                modal.classList.add('hide');
                currentModal = null;
            }
        }
    });
    
    // Restore body scroll
    document.body.style.overflow = '';
}

// Toggle Daily Report Modal
function toggleDailyReport() {
    const modal = document.getElementById('report-modal');
    if (!modal) return;
    
    if (modal.classList.contains('hide')) {
        modal.classList.remove('hide');
        modal.querySelector('.modal-slide-up').classList.add('modal-slide-up');
        document.body.style.overflow = 'hidden';
    } else {
        modal.querySelector('.modal-slide-up').classList.add('modal-slide-down');
        setTimeout(() => {
            modal.classList.add('hide');
            modal.querySelector('.modal-slide-up').classList.remove('modal-slide-down');
            document.body.style.overflow = '';
        }, 400);
    }
}

// Toggle Notification Panel
function toggleNotificationPanel() {
    const panel = document.getElementById('notification-panel');
    const todoSidebar = document.getElementById('todo-sidebar');
    
    if (panel) {
        panel.classList.toggle('hide');
    }
    
    if (todoSidebar) {
        todoSidebar.classList.add('hide');
    }
}

// Toggle Todo Sidebar
function toggleTodoSidebar() {
    const sidebar = document.getElementById('todo-sidebar');
    const notificationPanel = document.getElementById('notification-panel');
    
    if (sidebar) {
        sidebar.classList.toggle('hide');
    }
    
    if (notificationPanel) {
        notificationPanel.classList.add('hide');
    }
}

// Select Understanding Level
function selectUnderstandingLevel(level) {
    // Remove active class from all buttons
    const buttons = document.querySelectorAll('#report-modal button[onclick*="selectUnderstandingLevel"]');
    buttons.forEach(btn => {
        btn.classList.remove('bg-indigo-600', 'text-white');
        btn.classList.add('bg-slate-100', 'text-slate-700');
    });
    
    // Add active class to selected button
    const selectedBtn = event.target;
    selectedBtn.classList.remove('bg-slate-100', 'text-slate-700');
    selectedBtn.classList.add('bg-indigo-600', 'text-white');
    
    // Update hidden input if exists
    const levelInput = document.getElementById('understanding-level');
    if (levelInput) {
        levelInput.value = level;
    }
}

// Submit Daily Report
function submitDailyReport() {
    const lessonTitle = document.querySelector('#report-modal input[type="text"]')?.value;
    const lessonNotes = document.querySelector('#report-modal textarea')?.value;
    
    if (!lessonTitle || !lessonNotes) {
        alert('กรุณากรอกหัวข้อบทเรียนและบันทึกการเรียน');
        return;
    }
    
    // Simulate API call
    showNotification('✅ ส่งรายงานการสอนเรียบร้อยแล้ว! ผู้ปกครองจะได้รับแจ้งเตือน', 'success');
    
    // Close modal
    toggleDailyReport();
    
    // Update todo count
    updateTodoCount(-1);
}

// Open QR Check-in Modal
function openQRCheckIn() {
    const modal = document.getElementById('qr-checkin-modal');
    if (!modal) {
        console.error('QR Check-in modal not found');
        return;
    }
    
    modal.classList.remove('hide');
    modal.querySelector('.modal-slide-up').classList.add('modal-slide-up');
    
    // Generate QR code if needed
    setTimeout(() => {
        const qrContainer = document.getElementById('staff-checkin-qr');
        if (qrContainer && qrContainer.children.length === 0) {
            generateQRCode('staff-checkin-qr', `STAFF:${getCurrentUserID()}|TIME:${Date.now()}`);
        }
    }, 100);
}

// Show Virtual Card Fullscreen
function showVirtualCardFullscreen() {
    const modal = document.getElementById('virtual-card-fullscreen');
    if (!modal) return;
    
    modal.classList.remove('hide');
    modal.querySelector('.modal-slide-up').classList.add('modal-slide-up');
    document.body.style.overflow = 'hidden';
}

// Close Virtual Card Fullscreen
function closeVirtualCardFullscreen() {
    const modal = document.getElementById('virtual-card-fullscreen');
    if (!modal) return;
    
    modal.querySelector('.modal-slide-up').classList.add('modal-slide-down');
    setTimeout(() => {
        modal.classList.add('hide');
        modal.querySelector('.modal-slide-up').classList.remove('modal-slide-down');
        document.body.style.overflow = '';
    }, 400);
}

// ==================== MODAL CONTENT GENERATORS ====================

function getDefaultModalContent(modalType) {
    return `
        <div class="text-center p-8">
            <div class="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i data-lucide="code" class="w-8 h-8 text-indigo-600"></i>
            </div>
            <h4 class="font-bold text-lg mb-2">ฟีเจอร์นี้อยู่ในระหว่างพัฒนา</h4>
            <p class="text-slate-600 mb-4">สำหรับการนำเสนอ Mockup นี้แสดงให้เห็นถึง UX/UI เท่านั้น</p>
            <p class="text-sm text-slate-500">ฟีเจอร์ "${modalType}" จะทำงานเต็มรูปแบบในระบบจริง</p>
        </div>
        <div class="mt-6">
            <button onclick="closeModal()" class="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700">
                เข้าใจแล้ว
            </button>
        </div>
    `;
}

function getBranchFinanceContent() {
    return `
        <div class="p-6">
            <div class="mb-6">
                <h4 class="font-bold text-lg mb-2">รายงานการเงินสาขา พระราม 9</h4>
                <p class="text-slate-600">ประจำเดือน เมษายน 2026</p>
            </div>
            
            <div class="grid grid-cols-2 gap-4 mb-6">
                <div class="bg-green-50 p-4 rounded-xl">
                    <p class="text-sm text-slate-600">รายรับ</p>
                    <p class="text-2xl font-bold text-green-600">฿2,400,000</p>
                </div>
                <div class="bg-red-50 p-4 rounded-xl">
                    <p class="text-sm text-slate-600">รายจ่าย</p>
                    <p class="text-2xl font-bold text-red-600">฿1,200,000</p>
                </div>
            </div>
            
            <div class="space-y-4">
                <div class="p-4 bg-white border rounded-xl">
                    <p class="font-medium">รายรับจากค่าคอร์ส</p>
                    <p class="text-slate-600">320 นักเรียน × ฿7,500/คน</p>
                </div>
                <div class="p-4 bg-white border rounded-xl">
                    <p class="font-medium">ค่าใช้จ่ายครู</p>
                    <p class="text-slate-600">15 คน × ฿45,000/คน</p>
                </div>
            </div>
        </div>
    `;
}

function getMakeupClassContent() {
    return `
        <div class="p-6">
            <div class="mb-6">
                <h4 class="font-bold text-lg mb-2">เลือกรอบเรียนชดเชย</h4>
                <p class="text-slate-600">กรุณาเลือกรอบเรียนชดเชยจากตารางด้านล่าง</p>
            </div>
            
            <div class="space-y-4 mb-6">
                <div class="p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <div class="flex justify-between items-center">
                        <div>
                            <p class="font-medium">Math Level 2</p>
                            <p class="text-sm text-slate-600">26/04/2026 • 10:00-11:30</p>
                            <p class="text-xs text-slate-500">ครูสมศรี • ห้อง 1</p>
                        </div>
                        <button onclick="selectMakeupClass()" class="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
                            เลือก
                        </button>
                    </div>
                </div>
                
                <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <div class="flex justify-between items-center">
                        <div>
                            <p class="font-medium">Math Level 2</p>
                            <p class="text-sm text-slate-600">28/04/2026 • 13:00-14:30</p>
                            <p class="text-xs text-slate-500">ครูสมศรี • ห้อง 2</p>
                        </div>
                        <button onclick="selectMakeupClass()" class="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg text-sm">
                            เลือก
                        </button>
                    </div>
                </div>
                
                <div class="p-4 bg-green-50 rounded-xl border border-green-100">
                    <div class="flex justify-between items-center">
                        <div>
                            <p class="font-medium">Math Level 3</p>
                            <p class="text-sm text-slate-600">29/04/2026 • 09:00-10:30</p>
                            <p class="text-xs text-slate-500">ครูเอก • ห้อง 3</p>
                        </div>
                        <button onclick="selectMakeupClass()" class="px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700">
                            เลือก
                        </button>
                    </div>
                </div>
            </div>
            
            <button onclick="closeModal()" class="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700">
                ปิด
            </button>
        </div>
    `;
}

function getPaymentParentContent() {
    return `
        <div class="p-6">
            <div class="mb-6">
                <h4 class="font-bold text-lg mb-2">ชำระค่าคอร์ส</h4>
                <p class="text-slate-600">Math Visual Level 2 • จำนวน 8 คาบ</p>
            </div>
            
            <div class="bg-slate-50 rounded-xl p-4 mb-6">
                <div class="flex justify-between items-center mb-3">
                    <p class="font-medium">ยอดชำระ</p>
                    <p class="text-2xl font-bold text-indigo-600">฿4,000</p>
                </div>
                <div class="text-sm text-slate-600">
                    <p>กำหนดชำระ: 30/04/2026</p>
                    <p>ชำระผ่าน: QR Payment, โอนธนาคาร, บัตรเครดิต</p>
                </div>
            </div>
            
            <div class="grid grid-cols-2 gap-4 mb-6">
                <button onclick="simulatePayment('qr')" class="p-4 bg-white border rounded-xl text-center hover:bg-slate-50 transition">
                    <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <i data-lucide="qr-code" class="w-5 h-5 text-green-600"></i>
                    </div>
                    <p class="text-sm font-medium">QR Payment</p>
                </button>
                
                <button onclick="simulatePayment('transfer')" class="p-4 bg-white border rounded-xl text-center hover:bg-slate-50 transition">
                    <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <i data-lucide="banknote" class="w-5 h-5 text-blue-600"></i>
                    </div>
                    <p class="text-sm font-medium">โอนธนาคาร</p>
                </button>
            </div>
            
            <div class="p-4 bg-yellow-50 rounded-xl border border-yellow-100 mb-6">
                <p class="text-sm text-yellow-800 font-medium">💡 หมายเหตุ</p>
                <p class="text-xs text-yellow-700 mt-1">หลังจากชำระเงินแล้ว กรุณาอัปโหลดสลิปหรือแจ้งการชำระเงินให้แอดมินทราบ</p>
            </div>
            
            <button onclick="closeModal()" class="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700">
                ปิด
            </button>
        </div>
    `;
}

// Helper function to get current user ID
function getCurrentUserID() {
    return localStorage.getItem('currentUserId') || 'DEMO-001';
}

// Helper function to update todo count
function updateTodoCount(change) {
    const todoCountElement = document.getElementById('todo-count');
    const mobileTodoCountElement = document.getElementById('mobile-todo-count');
    const notificationBadges = document.querySelectorAll('.notification-badge');
    
    let currentCount = parseInt(todoCountElement?.textContent || '5');
    currentCount += change;
    
    if (currentCount < 0) currentCount = 0;
    
    // Update elements
    if (todoCountElement) {
        todoCountElement.textContent = `${currentCount} งานที่ต้องทำ`;
    }
    
    if (mobileTodoCountElement) {
        mobileTodoCountElement.textContent = `${currentCount} งานที่ต้องทำ`;
    }
    
    // Update notification badges
    notificationBadges.forEach(badge => {
        if (badge.textContent !== '3') { // Don't change notification count
            badge.textContent = currentCount;
        }
    });
}

// Export functions for global use
window.modalManager = {
    open: openModal,
    close: closeModal,
    toggleDailyReport: toggleDailyReport,
    toggleNotification: toggleNotificationPanel,
    toggleTodo: toggleTodoSidebar,
    openQR: openQRCheckIn,
    showVirtualCard: showVirtualCardFullscreen,
    closeVirtualCard: closeVirtualCardFullscreen
};
