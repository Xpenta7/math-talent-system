// ==================== VDO TRAINING MODULE ====================

// VDO Training Data
const vdoTrainingData = {
    math: [
        {
            id: 'math-1',
            title: 'การสอนคณิตศาสตร์ด้วยเกม',
            youtubeId: 'dQw4w9WgXcQ',
            description: 'เทคนิคการใช้เกมในการสอนคณิตศาสตร์ระดับประถม',
            duration: '15 นาที',
            quiz: [
                {
                    question: 'ข้อใดคือข้อดีของการสอนคณิตศาสตร์ด้วยเกม?',
                    options: [
                        'นักเรียนสนุกและมีส่วนร่วม',
                        'นักเรียนจำสูตรได้มากขึ้น',
                        'ครูเตรียมการสอนง่ายขึ้น',
                        'ลดเวลาการสอน'
                    ],
                    correct: 0
                },
                {
                    question: 'เกมประเภทใดเหมาะสมที่สุดสำหรับการสอนการบวกเลข?',
                    options: [
                        'เกมกระดาน',
                        'เกมคอมพิวเตอร์',
                        'เกมกลางแจ้ง',
                        'เกมการ์ด'
                    ],
                    correct: 1
                },
                {
                    question: 'การประเมินผลจากการเล่นเกมควรทำอย่างไร?',
                    options: [
                        'ทดสอบหลังเล่นเกมเสร็จ',
                        'สังเกตพฤติกรรมระหว่างเล่น',
                        'ให้คะแนนจากการแข่งขัน',
                        'สอบถามความรู้สึก'
                    ],
                    correct: 1
                }
            ]
        },
        {
            id: 'math-2',
            title: 'การสอนคณิตศาสตร์ด้วย Visual Thinking',
            youtubeId: 'example-id-2',
            description: 'พัฒนาทักษะการคิดภาพในการแก้โจทย์คณิตศาสตร์',
            duration: '20 นาที',
            quiz: [
                {
                    question: 'Visual Thinking ช่วยพัฒนาทักษะใด?',
                    options: [
                        'การคิดเชิงนามธรรม',
                        'การคิดเชิงรูปธรรม',
                        'การคิดวิเคราะห์',
                        'การคิดสังเคราะห์'
                    ],
                    correct: 0
                }
            ]
        }
    ],
    science: [
        {
            id: 'science-1',
            title: 'การใช้สื่อการสอน "เครื่องกลอย่างง่าย (Simple Machines)"',
            youtubeId: 'PB38VWJponY',
            description: 'สาธิตการใช้งานชุดเครื่องกลอย่างง่ายในการสอนวิทยาศาสตร์',
            duration: '20 นาที',
            quiz: [
                {
                    question: 'เครื่องกลอย่างง่ายมีกี่ประเภท?',
                    options: ['3', '5', '6', '7'],
                    correct: 2
                },
                {
                    question: 'ล้อและเพลาช่วยลดแรงเสียดทานได้อย่างไร?',
                    options: [
                        'เพิ่มพื้นที่สัมผัส',
                        'เปลี่ยนแรงเสียดทานแบบเลื่อนเป็นแบบกลิ้ง',
                        'ลดน้ำหนักของวัตถุ',
                        'เพิ่มความเร็ว'
                    ],
                    correct: 1
                },
                {
                    question: 'ข้อใดไม่ใช่เครื่องกลอย่างง่าย?',
                    options: ['คาน', 'ลิ่ม', 'สายพาน', 'รอก'],
                    correct: 2
                },
                {
                    question: 'เครื่องกลอย่างง่ายประเภทใดที่ใช้ในการตัดวัตถุ?',
                    options: ['คาน', 'ลิ่ม', 'สกรู', 'รอก'],
                    correct: 1
                }
            ]
        },
        {
            id: 'science-2',
            title: 'การใช้สื่อการสอน "ชุดเรียนรู้เกี่ยวกับเลนส์ (Geometric Optics Kit)"',
            youtubeId: 'G_hwj0mUlow',
            description: 'การสอนเรื่องแสงและเลนส์ด้วยชุดอุปกรณ์ Geometric Optics',
            duration: '18 นาที',
            quiz: [
                {
                    question: 'เลนส์นูนมีคุณสมบัติอย่างไร?',
                    options: [
                        'รวมแสง',
                        'กระจายแสง',
                        'ดูดกลืนแสง',
                        'สะท้อนแสง'
                    ],
                    correct: 0
                },
                {
                    question: 'เมื่อแสงผ่านเลนส์เว้าจะเกิดปรากฏการณ์ใด?',
                    options: [
                        'หักเหเข้าหาแกนหลัก',
                        'หักเหออกจากแกนหลัก',
                        'สะท้อนกลับ',
                        'กระจายเท่าเดิม'
                    ],
                    correct: 1
                }
            ]
        },
        {
            id: 'science-3',
            title: 'สาธิตการทดลอง "ทดสอบหมู่เลือด (Blood Test)"',
            youtubeId: 'fEXn8ux884c',
            description: 'วิธีการสอนเรื่องหมู่เลือดด้วยการทดลองจริง',
            duration: '25 นาที',
            quiz: [
                {
                    question: 'หมู่เลือด AB มีแอนติเจนอะไรบ้าง?',
                    options: [
                        'A และ B',
                        'A เท่านั้น',
                        'B เท่านั้น',
                        'ไม่มีแอนติเจน'
                    ],
                    correct: 0
                },
                {
                    question: 'คนหมู่เลือด O สามารถรับเลือดจากหมู่ใดได้บ้าง?',
                    options: [
                        'O เท่านั้น',
                        'A และ B',
                        'AB เท่านั้น',
                        'ทุหมู่เลือด'
                    ],
                    correct: 0
                }
            ]
        },
        {
            id: 'science-4',
            title: 'สาธิตวิธีการสอนเรื่อง "แรงเสียดทาน (Friction Force)"',
            youtubeId: 'VUPlI5-4wto',
            description: 'การสอนแนวคิดเรื่องแรงเสียดทานผ่านการทดลอง',
            duration: '22 นาที',
            quiz: [
                {
                    question: 'ปัจจัยใดไม่ส่งผลต่อแรงเสียดทาน?',
                    options: [
                        'น้ำหนักวัตถุ',
                        'พื้นที่ผิวสัมผัส',
                        'ผิวสัมผัสของวัสดุ',
                        'ความเร็วของวัตถุ'
                    ],
                    correct: 1
                },
                {
                    question: 'วิธีใดช่วยลดแรงเสียดทานได้มากที่สุด?',
                    options: [
                        'เพิ่มน้ำหนัก',
                        'ใช้สารหล่อลื่น',
                        'เพิ่มพื้นที่ผิว',
                        'ลดความเร็ว'
                    ],
                    correct: 1
                }
            ]
        }
    ]
};

// VDO Training State
let currentVideoCategory = 'math';
let selectedVideo = null;
let quizAnswers = [];
let quizScore = 0;
let isQuizSubmitted = false;

// Initialize VDO Training Module
function initVdoTraining() {
    // Load event listeners for VDO training buttons
    document.addEventListener('click', function(e) {
        if (e.target && e.target.closest && e.target.closest('[data-vdo-training]')) {
            showVdoTraining();
        }
    });
    
    // Generate initial video list
    if (document.getElementById('video-list-container')) {
        loadVideoList('math');
    }
}

// Show VDO Training Modal
function showVdoTraining() {
    const modal = document.getElementById('vdo-training-modal');
    if (!modal) {
        console.error('VDO Training modal not found');
        return;
    }
    
    modal.classList.remove('hide');
    modal.querySelector('.modal-slide-up').classList.add('modal-slide-up');
    loadVideoList('math');
    
    // Reset state
    resetQuiz();
    
    // Refresh icons
    setTimeout(() => {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }, 100);
}

// Close VDO Training
function closeVdoTraining() {
    const modal = document.getElementById('vdo-training-modal');
    if (!modal) return;
    
    modal.querySelector('.modal-slide-up').classList.add('modal-slide-down');
    setTimeout(() => {
        modal.classList.add('hide');
        modal.querySelector('.modal-slide-up').classList.remove('modal-slide-down');
        resetQuiz();
    }, 400);
}

// Switch Video Category
function switchVideoCategory(category) {
    currentVideoCategory = category;
    
    // Update tabs
    document.querySelectorAll('.video-category-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    if (category === 'math') {
        const mathTab = document.getElementById('tab-math');
        if (mathTab) mathTab.classList.add('active');
    } else {
        const scienceTab = document.getElementById('tab-science');
        if (scienceTab) scienceTab.classList.add('active');
    }
    
    loadVideoList(category);
}

// Load Video List
function loadVideoList(category) {
    const container = document.getElementById('video-list-container');
    if (!container) return;
    
    const videos = vdoTrainingData[category] || [];
    
    let html = '<div class="grid grid-cols-1 md:grid-cols-2 gap-6">';
    
    if (videos.length === 0) {
        html = `
            <div class="text-center py-10">
                <div class="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <i data-lucide="video-off" class="w-8 h-8 text-slate-400"></i>
                </div>
                <h4 class="font-bold text-lg text-slate-700 mb-2">ไม่มีวิดีโอในหมวดนี้</h4>
                <p class="text-slate-500">กำลังอัปเดตวิดีโอใหม่เร็วๆ นี้</p>
            </div>
        `;
    } else {
        videos.forEach(video => {
            html += `
                <div class="video-item cursor-pointer" onclick="selectVideo('${category}', '${video.id}')">
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-4">
                            <div class="flex-1">
                                <h4 class="font-bold text-lg text-slate-800 mb-2">${video.title}</h4>
                                <p class="text-slate-600 text-sm mb-3">${video.description}</p>
                                <div class="flex items-center gap-4 text-sm text-slate-500">
                                    <span><i data-lucide="clock" class="w-4 h-4 inline mr-1"></i> ${video.duration}</span>
                                    <span><i data-lucide="file-text" class="w-4 h-4 inline mr-1"></i> ${video.quiz.length} คำถาม</span>
                                    <span><i data-lucide="youtube" class="w-4 h-4 inline mr-1"></i> YouTube</span>
                                </div>
                            </div>
                            <div class="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                                <i data-lucide="play" class="w-6 h-6 text-red-600"></i>
                            </div>
                        </div>
                        <div class="flex gap-2">
                            <button onclick="event.stopPropagation(); selectVideo('${category}', '${video.id}')" 
                                    class="px-4 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700 transition">
                                <i data-lucide="play" class="w-4 h-4 inline mr-2"></i> ดูวิดีโอ
                            </button>
                            <button onclick="event.stopPropagation(); startQuiz('${category}', '${video.id}')" 
                                    class="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 transition">
                                <i data-lucide="file-text" class="w-4 h-4 inline mr-2"></i> ทำแบบทดสอบ
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });
        
        html += '</div>';
    }
    
    container.innerHTML = html;
    
    // Hide quiz and result sections
    const quizSection = document.getElementById('quiz-section');
    const quizResult = document.getElementById('quiz-result');
    if (quizSection) quizSection.classList.add('hide');
    if (quizResult) quizResult.classList.add('hide');
    
    // Refresh icons
    setTimeout(() => {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }, 100);
}

// Select Video
function selectVideo(category, videoId) {
    const videos = vdoTrainingData[category];
    if (!videos) return;
    
    selectedVideo = videos.find(v => v.id === videoId);
    if (!selectedVideo) return;
    
    // Open YouTube video in new tab
    window.open(`https://www.youtube.com/watch?v=${selectedVideo.youtubeId}`, '_blank');
    
    // Show notification about auto-quiz
    showNotification(`🎬 เปิดวิดีโอ "${selectedVideo.title}" แล้ว`, 'success');
    showNotification('แบบทดสอบจะเริ่มอัตโนมัติใน 5 วินาที...', 'info');
    
    // Auto-start quiz after 5 seconds (for demo)
    setTimeout(() => {
        startQuiz(category, videoId);
    }, 5000);
}

// Start Quiz
function startQuiz(category, videoId) {
    const videos = vdoTrainingData[category];
    if (!videos) return;
    
    selectedVideo = videos.find(v => v.id === videoId);
    if (!selectedVideo) return;
    
    // Show quiz section
    const videoListContainer = document.getElementById('video-list-container');
    const quizSection = document.getElementById('quiz-section');
    const quizResult = document.getElementById('quiz-result');
    
    if (videoListContainer) videoListContainer.innerHTML = '';
    if (quizSection) quizSection.classList.remove('hide');
    if (quizResult) quizResult.classList.add('hide');
    
    // Set quiz title
    const quizTitle = document.getElementById('quiz-title');
    if (quizTitle) {
        quizTitle.innerText = `แบบทดสอบ: ${selectedVideo.title}`;
    }
    
    // Load quiz questions
    const quizContainer = document.getElementById('quiz-questions-container');
    if (!quizContainer) return;
    
    let html = '';
    
    selectedVideo.quiz.forEach((question, index) => {
        html += `
            <div class="quiz-question mb-6">
                <p class="font-medium text-slate-800 mb-3">${index + 1}. ${question.question}</p>
                <div class="space-y-2">
                    ${question.options.map((option, optIndex) => `
                        <div class="quiz-option" onclick="selectAnswer(${index}, ${optIndex})" id="q${index}-opt${optIndex}">
                            ${String.fromCharCode(65 + optIndex)}. ${option}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });
    
    quizContainer.innerHTML = html;
    quizAnswers = Array(selectedVideo.quiz.length).fill(null);
    isQuizSubmitted = false;
    
    // Refresh icons
    setTimeout(() => {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }, 100);
}

// Select Answer
function selectAnswer(questionIndex, optionIndex) {
    if (isQuizSubmitted) return;
    
    // Remove selected class from all options in this question
    const questionOptions = document.querySelectorAll(`[id^="q${questionIndex}-opt"]`);
    questionOptions.forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Add selected class to chosen option
    const selectedOption = document.getElementById(`q${questionIndex}-opt${optionIndex}`);
    if (selectedOption) {
        selectedOption.classList.add('selected');
    }
    
    // Store answer
    quizAnswers[questionIndex] = optionIndex;
}

// Submit Quiz
function submitQuiz() {
    // Check if all questions are answered
    if (quizAnswers.some(answer => answer === null)) {
        showNotification('กรุณาตอบคำถามทั้งหมดก่อนส่ง', 'warning');
        return;
    }
    
    // Calculate score
    quizScore = 0;
    selectedVideo.quiz.forEach((question, index) => {
        const correctOption = document.getElementById(`q${index}-opt${question.correct}`);
        const userOption = document.getElementById(`q${index}-opt${quizAnswers[index]}`);
        
        if (quizAnswers[index] === question.correct) {
            quizScore++;
            
            // Mark correct answer
            if (correctOption) {
                correctOption.classList.add('correct');
            }
            
            // If user's answer was correct, mark it
            if (userOption && userOption !== correctOption) {
                userOption.classList.add('correct');
            }
        } else {
            // Mark correct answer
            if (correctOption) {
                correctOption.classList.add('correct');
            }
            
            // Mark wrong answer
            if (userOption) {
                userOption.classList.add('wrong');
            }
        }
    });
    
    isQuizSubmitted = true;
    
    // Show result
    showQuizResult();
}

// Show Quiz Result
function showQuizResult() {
    const quizSection = document.getElementById('quiz-section');
    const quizResult = document.getElementById('quiz-result');
    
    if (quizSection) quizSection.classList.add('hide');
    if (quizResult) quizResult.classList.remove('hide');
    
    const totalQuestions = selectedVideo.quiz.length;
    const percentage = Math.round((quizScore / totalQuestions) * 100);
    
    const scoreDisplay = document.getElementById('score-display');
    const resultTitle = document.getElementById('result-title');
    const resultMessage = document.getElementById('result-message');
    
    if (scoreDisplay) scoreDisplay.innerText = `${quizScore}/${totalQuestions}`;
    if (resultTitle) resultTitle.innerText = `คะแนนแบบทดสอบ: ${selectedVideo.title}`;
    
    let message = '';
    let emoji = '';
    
    if (percentage >= 90) {
        message = 'ยอดเยี่ยมมาก! 🎉 คุณเข้าใจเนื้อหานี้อย่างลึกซึ้ง';
        emoji = '🏆';
    } else if (percentage >= 70) {
        message = 'ดีมาก! 👍 คุณเข้าใจเนื้อหาส่วนใหญ่เป็นอย่างดี';
        emoji = '⭐';
    } else if (percentage >= 50) {
        message = 'พอใช้ได้ 😊 ลองทบทวนเนื้อหาส่วนที่ยังไม่เข้าใจนะ';
        emoji = '📚';
    } else {
        message = 'ลองทบทวนเนื้อหาอีกครั้ง 💪 แล้วมาทำแบบทดสอบใหม่นะ';
        emoji = '🔄';
    }
    
    if (resultMessage) {
        resultMessage.innerHTML = `
            <div class="mb-3">
                <span class="text-3xl">${emoji}</span>
                <p class="mt-2">${message}</p>
            </div>
            <p class="text-sm opacity-90">ความแม่นยำ: ${percentage}%</p>
        `;
    }
    
    // Save quiz result to localStorage
    saveQuizResult(selectedVideo.id, quizScore, totalQuestions, percentage);
}

// Save Quiz Result
function saveQuizResult(videoId, score, total, percentage) {
    try {
        const results = JSON.parse(localStorage.getItem('vdoTrainingResults')) || {};
        results[videoId] = {
            score: score,
            total: total,
            percentage: percentage,
            date: new Date().toISOString(),
            passed: percentage >= 70
        };
        localStorage.setItem('vdoTrainingResults', JSON.stringify(results));
    } catch (e) {
        console.error('Error saving quiz result:', e);
    }
}

// Back to Video List
function backToVideoList() {
    loadVideoList(currentVideoCategory);
}

// Retake Quiz
function retakeQuiz() {
    startQuiz(currentVideoCategory, selectedVideo.id);
}

// Reset Quiz
function resetQuiz() {
    quizAnswers = [];
    quizScore = 0;
    selectedVideo = null;
    isQuizSubmitted = false;
}

// Get Quiz Statistics
function getQuizStatistics() {
    try {
        const results = JSON.parse(localStorage.getItem('vdoTrainingResults')) || {};
        const completed = Object.keys(results).length;
        const passed = Object.values(results).filter(r => r.passed).length;
        const averageScore = completed > 0 
            ? Math.round(Object.values(results).reduce((sum, r) => sum + r.percentage, 0) / completed)
            : 0;
        
        return {
            completed: completed,
            passed: passed,
            averageScore: averageScore,
            totalVideos: Object.keys(vdoTrainingData.math).length + Object.keys(vdoTrainingData.science).length
        };
    } catch (e) {
        return { completed: 0, passed: 0, averageScore: 0, totalVideos: 0 };
    }
}

// Show Notification
function showNotification(message, type = 'info') {
    const colors = {
        success: 'bg-green-100 text-green-800 border-green-200',
        error: 'bg-red-100 text-red-800 border-red-200',
        warning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
        info: 'bg-blue-100 text-blue-800 border-blue-200'
    };
    
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded-lg border ${colors[type]} z-[9999] shadow-lg max-w-sm`;
    notification.innerHTML = `
        <div class="flex items-center gap-3">
            <i data-lucide="${type === 'success' ? 'check-circle' : type === 'error' ? 'alert-circle' : 'info'}" 
               class="w-5 h-5"></i>
            <p class="text-sm font-medium">${message}</p>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Refresh icon
    setTimeout(() => {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }, 10);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

// Export functions for global use
window.vdoTraining = {
    init: initVdoTraining,
    show: showVdoTraining,
    close: closeVdoTraining,
    switchCategory: switchVideoCategory,
    getStatistics: getQuizStatistics
};
