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

// Show VDO Training Modal
function showVdoTraining() {
    const modal = document.getElementById('vdo-training-modal');
    modal.classList.remove('hide');
    modal.querySelector('.modal-slide-up').classList.add('modal-slide-up');
    loadVideoList('math');
}

// Close VDO Training
function closeVdoTraining() {
    const modal = document.getElementById('vdo-training-modal');
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
        document.getElementById('tab-math').classList.add('active');
    } else {
        document.getElementById('tab-science').classList.add('active');
    }
    
    loadVideoList(category);
}

// Load Video List
function loadVideoList(category) {
    const container = document.getElementById('video-list-container');
    const videos = vdoTrainingData[category];
    
    let html = '<div class="grid grid-cols-1 md:grid-cols-2 gap-6">';
    
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
                            </div>
                        </div>
                        <div class="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                            <i data-lucide="play" class="w-6 h-6 text-red-600"></i>
                        </div>
                    </div>
                    <div class="flex gap-2">
                        <button onclick="event.stopPropagation(); selectVideo('${category}', '${video.id}')" class="px-4 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700">
                            <i data-lucide="play" class="w-4 h-4 inline mr-2"></i> ดูวิดีโอ
                        </button>
                        <button onclick="event.stopPropagation(); startQuiz('${category}', '${video.id}')" class="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700">
                            <i data-lucide="file-text" class="w-4 h-4 inline mr-2"></i> ทำแบบทดสอบ
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
    
    // Hide quiz and result sections
    document.getElementById('quiz-section').classList.add('hide');
    document.getElementById('quiz-result').classList.add('hide');
    
    // Refresh icons
    setTimeout(() => lucide.createIcons(), 100);
}

// Select Video
function selectVideo(category, videoId) {
    const videos = vdoTrainingData[category];
    selectedVideo = videos.find(v => v.id === videoId);
    
    // Show video player in a new tab or modal
    window.open(`https://www.youtube.com/watch?v=${selectedVideo.youtubeId}`, '_blank');
    
    // Auto-start quiz after 5 seconds (for demo)
    setTimeout(() => {
        startQuiz(category, videoId);
    }, 5000);
}

// Start Quiz
function startQuiz(category, videoId) {
    const videos = vdoTrainingData[category];
    selectedVideo = videos.find(v => v.id === videoId);
    
    // Show quiz section
    document.getElementById('video-list-container').innerHTML = '';
    document.getElementById('quiz-section').classList.remove('hide');
    document.getElementById('quiz-result').classList.add('hide');
    
    // Set quiz title
    document.getElementById('quiz-title').innerText = `แบบทดสอบ: ${selectedVideo.title}`;
    
    // Load quiz questions
    const quizContainer = document.getElementById('quiz-questions-container');
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
}

// Select Answer
function selectAnswer(questionIndex, optionIndex) {
    // Remove selected class from all options in this question
    const questionOptions = document.querySelectorAll(`[id^="q${questionIndex}-opt"]`);
    questionOptions.forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Add selected class to chosen option
    const selectedOption = document.getElementById(`q${questionIndex}-opt${optionIndex}`);
    selectedOption.classList.add('selected');
    
    // Store answer
    quizAnswers[questionIndex] = optionIndex;
}

// Submit Quiz
function submitQuiz() {
    // Check if all questions are answered
    if (quizAnswers.some(answer => answer === null)) {
        alert('กรุณาตอบคำถามทั้งหมดก่อนส่ง');
        return;
    }
    
    // Calculate score
    quizScore = 0;
    selectedVideo.quiz.forEach((question, index) => {
        if (quizAnswers[index] === question.correct) {
            quizScore++;
            
            // Mark correct answer
            const correctOption = document.getElementById(`q${index}-opt${question.correct}`);
            correctOption.classList.add('correct');
            
            // If user's answer was wrong, mark it
            if (quizAnswers[index] !== question.correct) {
                const userOption = document.getElementById(`q${index}-opt${quizAnswers[index]}`);
                userOption.classList.add('wrong');
            }
        } else {
            // Mark correct answer
            const correctOption = document.getElementById(`q${index}-opt${question.correct}`);
            correctOption.classList.add('correct');
            
            // Mark wrong answer
            const userOption = document.getElementById(`q${index}-opt${quizAnswers[index]}`);
            userOption.classList.add('wrong');
        }
    });
    
    // Show result
    showQuizResult();
}

// Show Quiz Result
function showQuizResult() {
    document.getElementById('quiz-section').classList.add('hide');
    document.getElementById('quiz-result').classList.remove('hide');
    
    const totalQuestions = selectedVideo.quiz.length;
    const percentage = Math.round((quizScore / totalQuestions) * 100);
    
    document.getElementById('score-display').innerText = `${quizScore}/${totalQuestions}`;
    document.getElementById('result-title').innerText = `คะแนนแบบทดสอบ: ${selectedVideo.title}`;
    
    let message = '';
    if (percentage >= 80) {
        message = 'ยอดเยี่ยม! คุณมีความเข้าใจในเนื้อหานี้เป็นอย่างดี 🎉';
    } else if (percentage >= 60) {
        message = 'ดีมาก! คุณเข้าใจเนื้อหาส่วนใหญ่ 👍';
    } else {
        message = 'ลองทบทวนเนื้อหาอีกครั้งและทำแบบทดสอบใหม่นะครับ 💪';
    }
    
    document.getElementById('result-message').innerText = message;
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
}
