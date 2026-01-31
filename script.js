    <script>
        lucide.createIcons();
        
        // Role Configuration - UPDATED for new role structure
        const roleConfig = {
            // HQ Roles
            'hq-super-admin': {
                name: "Dr.Ying (HQ)",
                role: "Super Admin / ผู้บริหาร",
                id: "HQ-001",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=DrYing",
                menu: [
                    { icon: 'layout-dashboard', text: 'แดชบอร์ด', action: 'switchHqRole("super-admin")' },
                    { icon: 'map', text: 'จัดการสาขา', action: 'openBranchManagement()' },
                    { icon: 'book-open', text: 'ศูนย์เอกสาร/หลักสูตร', action: 'openModal("hq-documents")' },
                    { icon: 'users', text: 'HR', action: 'switchHqRole("hr")' },
                    { icon: 'credit-card', text: 'บัญชี', action: 'switchHqRole("accounting")' },
                    { icon: 'video', text: 'VDO Hub (Central)', action: 'openModal("hq-video-hub")' },
                    { icon: 'settings', text: 'System Settings', action: 'openModal("system-settings")' }
                ]
            },
            'hq-master-teacher': {
                name: "Master Teacher (HQ)",
                role: "Master Teacher",
                id: "HQ-MT-001",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=MasterTeacher",
                menu: [
                    { icon: 'layout-dashboard', text: 'แดชบอร์ด', action: 'switchHqRole("master-teacher")' },
                    { icon: 'book-open', text: 'จัดการเอกสารหลักสูตร', action: 'openModal("curriculum-management")' },
                    { icon: 'upload', text: 'อัปโหลดเอกสาร', action: 'openModal("upload-document")' },
                    { icon: 'package', text: 'สต็อกสื่อการสอน', action: 'openModal("media-stock")' },
                    { icon: 'video', text: 'VDO Training', action: 'openModal("video-training")' },
                    { icon: 'youtube', text: 'YouTube Integration', action: 'openModal("youtube-integration")' },
                    { icon: 'printer', text: 'พิมพ์เอกสาร', action: 'openModal("print-documents")' },
                    { icon: 'download', text: 'ดาวน์โหลดเอกสาร', action: 'openModal("download-documents")' }
                ]
            },
            'hq-hr': {
                name: "HR Manager (HQ)",
                role: "HR",
                id: "HQ-HR-001",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=HRManager",
                menu: [
                    { icon: 'layout-dashboard', text: 'แดชบอร์ด', action: 'switchHqRole("hr")' },
                    { icon: 'users', text: 'จัดการพนักงาน', action: 'openModal("employee-management")' },
                    { icon: 'clock', text: 'ชั่วโมงทำงาน', action: 'openModal("work-hours")' },
                    { icon: 'calculator', text: 'คำนวณเงินเดือน', action: 'openModal("salary-calculation")' },
                    { icon: 'user-plus', text: 'เพิ่มพนักงาน', action: 'openModal("add-employee")' },
                    { icon: 'file-text', text: 'รายงาน HR', action: 'openModal("hr-reports")' }
                ]
            },
            'hq-accounting': {
                name: "Accountant (HQ)",
                role: "บัญชี",
                id: "HQ-ACC-001",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Accountant",
                menu: [
                    { icon: 'layout-dashboard', text: 'แดชบอร์ด', action: 'switchHqRole("accounting")' },
                    { icon: 'credit-card', text: 'การเงินทั้งหมด', action: 'openModal("all-finance")' },
                    { icon: 'trending-up', text: 'รายรับค่าคอร์ส', action: 'openModal("course-revenue")' },
                    { icon: 'map', text: 'รายได้แต่ละสาขา', action: 'openModal("branch-revenue")' },
                    { icon: 'file-text', text: 'รายงานการเงิน', action: 'openModal("finance-reports")' },
                    { icon: 'receipt', text: 'ใบเสร็จ/ภาษี', action: 'openModal("tax-invoices")' }
                ]
            },
            // Branch Roles
            'branch-executive': {
                name: "Executive แก้ม",
                role: "Branch Executive",
                id: "BR-EX-001",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Executive",
                menu: [
                    { icon: 'layout-dashboard', text: 'แดชบอร์ด', action: 'switchBranchRole("executive")' },
                    { icon: 'credit-card', text: 'การเงินสาขา', action: 'openModal("branch-finance")' },
                    { icon: 'calendar', text: 'ตารางเรียนทั้งหมด', action: 'openModal("branch-schedule")' },
                    { icon: 'video', text: 'VDO Training', action: 'openModal("branch-training")' },
                    { icon: 'bar-chart-3', text: 'รายงานสาขา', action: 'openModal("branch-reports")' },
                    { icon: 'receipt', text: 'ใบเสร็จ/ภาษี', action: 'openModal("branch-invoices")' }
                ]
            },
            'branch-admin': {
                name: "Admin สมชาย",
                role: "Branch Admin",
                id: "BR-AD-001",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Admin",
                menu: [
                    { icon: 'layout-dashboard', text: 'แดชบอร์ด', action: 'switchBranchRole("admin")' },
                    { icon: 'credit-card', text: 'การเงินสาขา', action: 'openModal("branch-finance")' },
                    { icon: 'calendar', text: 'ตารางเรียนทั้งหมด', action: 'openModal("branch-schedule")' },
                    { icon: 'receipt', text: 'ออกใบเสร็จ/กำกับภาษี', action: 'openModal("create-receipt")' },
                    { icon: 'video', text: 'VDO Training', action: 'switchToTeacherTraining()' },
                    { icon: 'file-text', text: 'รายงานการชำระเงิน', action: 'openModal("payment-reports")' }
                ]
            },
            'branch-teacher': {
                name: "ครูสมศรี",
                role: "Teacher",
                id: "BR-T-009",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Teacher1",
                menu: [
                    { icon: 'layout-dashboard', text: 'แดชบอร์ด', action: 'switchBranchRole("teacher")' },
                    { icon: 'calendar', text: 'ตารางสอนของฉัน', action: 'openModal("teacher-schedule")' },
                    { icon: 'users', text: 'นักเรียนของฉัน', action: 'openModal("my-students")' },
                    { icon: 'clipboard-list', text: 'บันทึกการสอน', action: 'toggleDailyReport()' },
                    { icon: 'calendar-x', text: 'แจ้งลา/สลับคาบ', action: 'openModal("teacher-leave")' },
                    { icon: 'book-open', text: 'เอกสารหลักสูตร', action: 'openModal("teacher-documents")' },
                    { icon: 'video', text: 'VDO Training', action: 'switchToTeacherTraining()' }
                ]
            },
            'parent': {
                name: "น้องแมท (ด.ช. รักเรียน)",
                role: "Student",
                id: "ST-888",
                avatar: "https://png.pngtree.com/png-clipart/20250123/original/pngtree-a-cheerful-young-student-with-long-png-image_20325474.png",
                menu: [
                    { icon: 'home', text: 'แดชบอร์ด', action: 'scrollToTop()' },
                    { icon: 'qr-code', text: 'บัตรนักเรียน', action: 'showVirtualCardFullscreen()' },
                    { icon: 'calendar', text: 'ตารางเรียน', action: 'openModal("schedule-parent")' },
                    { icon: 'refresh-cw', text: 'เรียนชดเชย', action: 'openModal("makeup-class")' },
                    { icon: 'credit-card', text: 'ชำระเงิน', action: 'openModal("payment-parent")' },
                    { icon: 'bar-chart-2', text: 'รายงานพัฒนาการ', action: 'openModal("progress-report")' },
                    { icon: 'image', text: 'แกลเลอรี่', action: 'openModal("gallery")' }
                ]
            }
        };

        // Branches data
        const branches = [
            { name: "สาขาพระราม 9", students: 320, revenue: "฿2.4M", status: "active" },
            { name: "สาขารัชดา", students: 280, revenue: "฿1.9M", status: "active" },
            { name: "สาขาพระราม 2", students: 245, revenue: "฿1.8M", status: "active" },
            { name: "สาขาบางบัวทอง", students: 210, revenue: "฿1.5M", status: "active" }
        ];

        // Current state
        let currentRole = 'hq-super-admin';
        let currentHqRole = 'super-admin';
        let currentBranchRole = 'executive';
        let isLoggedIn = false;
        let studentCredit = 8;
        
        // User Permissions for After School Program
        // Possible values: 'master' (full access) or 'teacher' (read-only)
        let userPermissions = {
            'afterSchool': ['master'] // Can have multiple: ['master', 'teacher']
        };
        
        // Role Permissions - Manage which roles have access to After School Program
        let rolePermissions = {
            'hq-super-admin': ['master'],
            'hq-master-teacher': ['master'],
            'hq-hr': [],
            'hq-accounting': [],
            'branch-executive': [],
            'branch-admin': ['teacher'],
            'branch-teacher': ['teacher'],
            'parent': []
        };
        
        // VDO Training Data
        const vdoTrainingData = {
            math: {
                topics: [
                    {
                        id: 'math-addition',
                        title: 'การบวกลบ',
                        icon: 'plus',
                        subtopics: [
                            { id: 'math-add-1', title: 'การบวกจำนวนเต็ม', duration: '15 นาที', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', description: 'เรียนรู้วิธีการบวกจำนวนเต็มแบบขั้นตอน' },
                            { id: 'math-add-2', title: 'การลบจำนวนเต็ม', duration: '15 นาที', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', description: 'เทคนิคการลบจำนวนเต็มอย่างมีประสิทธิ' }
                        ]
                    },
                    {
                        id: 'math-multiplication',
                        title: 'การคูณหาร',
                        icon: 'x',
                        subtopics: [
                            { id: 'math-mult-1', title: 'การคูณจำนวนเต็ม', duration: '18 นาที', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', description: 'วิธีการคูณจำนวนเต็มแบบง่าย' },
                            { id: 'math-mult-2', title: 'การหารจำนวนเต็ม', duration: '18 นาที', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', description: 'การหารจำนวนเต็มและเศษที่เหลือ' }
                        ]
                    }
                ]
            },
            science: {
                topics: [
                    {
                        id: 'science-force',
                        title: 'เรื่องแรง',
                        icon: 'zap',
                        subtopics: [
                            { id: 'science-force-1', title: 'สาธิตวิธีการสอนเรื่อง "แรงเสียดทาน (Friction Force)"', duration: 'YouTube', videoUrl: 'https://www.youtube.com/embed/VUPlI5-4wto', description: 'วิธีการสอนแรงเสียดทานให้เข้าใจง่าย' },
                            { id: 'science-force-2', title: 'การใช้สื่อการสอน "เครื่องกลอย่างง่าย (Simple Machines)"', duration: 'YouTube', videoUrl: 'https://www.youtube.com/embed/PB38VWJponY', description: 'สื่อการสอนอุปกรณ์ที่เสริมทักษะในวิชาฟิสิกส์' }
                        ]
                    },
                    {
                        id: 'science-light',
                        title: 'เรื่องแสง',
                        icon: 'lightbulb',
                        subtopics: [
                            { id: 'science-light-1', title: 'การใช้สื่อการสอน "ชุดเรียนรู้เกี่ยวกับเลนส์ (Geometric Optics Kit)"', duration: 'YouTube', videoUrl: 'https://www.youtube.com/embed/G_hwj0mUlow', description: 'เรียนรู้เกี่ยวกับเลนส์และการมองเห็น' }
                        ]
                    },
                    {
                        id: 'science-biology',
                        title: 'เรื่องชีววิทยา',
                        icon: 'heart',
                        subtopics: [
                            { id: 'science-bio-1', title: 'สาธิตการทดลอง "ทดสอบหมู่เลือด (Blood Test)"', duration: 'YouTube', videoUrl: 'https://www.youtube.com/embed/fEXn8ux884c', description: 'บทเรียนสาธิตการทดสอบหมู่เลือดในโรงเรียน' }
                        ]
                    }
                ]
            },
            general: {
                topics: [
                    {
                        id: 'general-conduct',
                        title: 'การปฏิบัติตน',
                        icon: 'users',
                        subtopics: [
                            { id: 'general-conduct-1', title: 'พื้นฐานการปฏิบัติตนของครู', duration: '20 นาที', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', description: 'คุณลักษณะและจริยธรรมของครูที่ดี' }
                        ]
                    },
                    {
                        id: 'general-appearance',
                        title: 'การแต่งการ',
                        icon: 'star',
                        subtopics: [
                            { id: 'general-appear-1', title: 'มาตรฐานการแต่งการของครู', duration: '15 นาที', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', description: 'วิธีการแต่งตัวให้เหมาะกับครูในโรงเรียน' }
                        ]
                    },
                    {
                        id: 'general-qa',
                        title: 'Q&A',
                        icon: 'help-circle',
                        subtopics: [
                            { id: 'general-qa-1', title: 'คำถามที่ถูกถามบ่อย', duration: '30 นาที', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', description: 'คำตอบสำหรับคำถามที่บ่อยเกิดขึ้น' }
                        ]
                    },
                    {
                        id: 'general-childcare',
                        title: 'การดูแลเด็ก',
                        icon: 'shield',
                        subtopics: [
                            { id: 'general-care-1', title: 'สุขภาพและความเรียบร้อยของเด็ก', duration: '25 นาที', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', description: 'วิธีดูแลเด็กให้ปลอดภัยในโรงเรียน' }
                        ]
                    },
                    {
                        id: 'general-safety',
                        title: 'ความปลอดภัยในห้องเรียน',
                        icon: 'alert-circle',
                        subtopics: [
                            { id: 'general-safety-1', title: 'มาตรการความปลอดภัยในห้องเรียน', duration: '20 นาที', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', description: 'วิธีป้องกันและจัดการความปลอดภัย' }
                        ]
                    },
                    {
                        id: 'general-parent',
                        title: 'การตอบคำถามผู้ปกครอง',
                        icon: 'phone',
                        subtopics: [
                            { id: 'general-parent-1', title: 'การสื่อสารกับผู้ปกครอง', duration: '22 นาที', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', description: 'วิธีการตอบคำถามของผู้ปกครองอย่างเหมาะสม' }
                        ]
                    },
                    {
                        id: 'general-system',
                        title: 'การใช้งาน Math Talent System',
                        icon: 'monitor',
                        subtopics: [
                            { id: 'general-sys-1', title: 'การใช้งาน Math Talent System', duration: '30 นาที', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', description: 'คำแนะนำการใช้ระบบสำหรับครู' }
                        ]
                    }
                ]
            }
        };
        
        // VDO Training State
        let vdoTrainingState = {
            currentType: 'math',
            currentTopic: null,
            currentSubtopic: null,
            watchedVideos: [],
            completedQuizzes: []
        };

        // Carousel State
        const carouselSlides = [
            {
                title: 'ยินดีต้อนรับกลับมา Dr.Ying',
                description: 'จัดการระบบการศึกษา Math Talent ได้อย่างมีประสิทธิภาพ'
            },
            {
                title: 'ตรวจสอบรายได้รวมของเดือน',
                description: 'ยอดรวมทั้งสิ้น ฿12.5 ล้านบาท เพิ่มขึ้น 8.5% จากเดือนที่แล้ว'
            },
            {
                title: 'จำนวนนักเรียนและครู',
                description: '2,840 นักเรียนจาก 12 สาขา กับ 156 ครูที่พร้อมเรียนการสอน'
            }
        ];
        let currentCarouselSlide = 0;

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            updateLoginUI('hq-super-admin');
            showLoginOverlay();
            
            // Restore sidebar state
            restoreSidebarState();
            
            // Generate QR codes
            setTimeout(() => {
                generateQRCode('student-qr-code', 'STUDENT:ST-888|COURSE:MATH-VISUAL-2|BRANCH:RAMA9');
                generateQRCode('fullscreen-qr-code', 'STUDENT:ST-888|COURSE:MATH-VISUAL-2|BRANCH:RAMA9|FULLSCREEN:TRUE');
                generateQRCode('staff-checkin-qr', 'STAFF:BR-T-009|ROLE:TEACHER|BRANCH:RAMA9|TIME:' + new Date().getTime());
                
                // Update current time
                updateCurrentTime();
                setInterval(updateCurrentTime, 60000);
                
                // Initialize VDO Training UI if on teacher view
                initializeVdoTrainingUI();
            }, 1000);
        });

        // Update current time
        function updateCurrentTime() {
            const now = new Date();
            const timeString = now.toLocaleTimeString('th-TH', { 
                hour: '2-digit', 
                minute: '2-digit'
            });
            const dateString = now.toLocaleDateString('th-TH', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            
            const timeElement = document.getElementById('current-time');
            if (timeElement) {
                timeElement.innerHTML = `<span class="font-bold">${timeString}</span><br><span class="text-xs">${dateString}</span>`;
            }
        }

        // Generate QR Code
        function generateQRCode(elementId, text) {
            const element = document.getElementById(elementId);
            if (!element) return;
            
            element.innerHTML = '';
            
            const canvas = document.createElement('canvas');
            element.appendChild(canvas);
            
            QRCode.toCanvas(canvas, text, {
                width: 150,
                height: 150,
                margin: 1,
                color: {
                    dark: '#000000',
                    light: '#FFFFFF'
                }
            }, function(error) {
                if (error) {
                    console.error('QR Code generation error:', error);
                    element.innerHTML = `
                        <div class="w-full h-full bg-slate-800 flex items-center justify-center text-white text-sm rounded-lg">
                            QR CODE<br>PREVIEW
                        </div>
                    `;
                }
            });
        }

        // Update Login UI based on selected role
        function updateLoginUI(role) {
            const title = document.getElementById('login-title');
            const subtitle = document.getElementById('login-subtitle');
            const labelId = document.getElementById('label-id');
            const labelPass = document.getElementById('label-pass');
            
            if (role.startsWith('hq-')) {
                if (role === 'hq-super-admin') {
                    title.innerText = "HQ Super Admin Login";
                    subtitle.innerText = "ระบบบริหารจัดการส่วนกลาง";
                    labelId.innerText = "Super Admin ID";
                } else if (role === 'hq-master-teacher') {
                    title.innerText = "HQ Master Teacher Login";
                    subtitle.innerText = "จัดการหลักสูตรและฝึกอบรม";
                    labelId.innerText = "Master Teacher ID";
                } else if (role === 'hq-hr') {
                    title.innerText = "HQ HR Login";
                    subtitle.innerText = "จัดการบุคลากรและเงินเดือน";
                    labelId.innerText = "HR ID";
                } else if (role === 'hq-accounting') {
                    title.innerText = "HQ Accounting Login";
                    subtitle.innerText = "จัดการการเงินและรายงาน";
                    labelId.innerText = "Accounting ID";
                }
                labelPass.innerText = "Password";
            } else if (role.startsWith('branch-')) {
                if (role === 'branch-executive') {
                    title.innerText = "Branch Executive Login";
                    subtitle.innerText = "ระบบบริหารจัดการสาขา";
                    labelId.innerText = "Executive ID";
                } else if (role === 'branch-admin') {
                    title.innerText = "Branch Admin Login";
                    subtitle.innerText = "จัดการการเงินและตารางเรียน";
                    labelId.innerText = "Admin ID";
                } else if (role === 'branch-teacher') {
                    title.innerText = "Teacher Login";
                    subtitle.innerText = "ระบบบันทึกรายงานการสอน";
                    labelId.innerText = "Teacher ID";
                }
                labelPass.innerText = "Password";
            } else if (role === 'parent') {
                title.innerText = "ยินดีต้อนรับคุณพ่อคุณแม่";
                subtitle.innerText = "เข้าสู่ระบบติดตามพัฒนาการของลูกน้อย";
                labelId.innerText = "Student ID (เลขประจำตัวนักเรียน)";
                labelPass.innerText = "Mobile Number (เบอร์มือถือผู้ปกครอง)";
            }
        }

        // Handle Login
        function handleLogin() {
            const role = document.getElementById('login-role-select').value;
            
            // Add slide down animation
            const overlay = document.getElementById('login-overlay');
            overlay.classList.add('slide-down');
            
            // Hide overlay after animation
            setTimeout(() => {
                overlay.classList.add('hide');
                overlay.classList.remove('slide-down');
                
                // Set current role
                currentRole = role;
                isLoggedIn = true;
                
                // Update user permissions based on current role
                userPermissions.afterSchool = rolePermissions[currentRole] || [];
                
                // Update permissions display
                updatePermissionsDisplay();
                
                // Update UI based on role type and use switchMainRole for proper display
                if (role.startsWith('hq-')) {
                    document.getElementById('role-switcher-header').value = 'hq';
                    switchMainRole('hq');
                    
                } else if (role.startsWith('branch-')) {
                    document.getElementById('role-switcher-header').value = 'branch';
                    switchMainRole('branch');
                    
                } else if (role === 'parent') {
                    document.getElementById('role-switcher-header').value = 'parent';
                    switchMainRole('parent');
                }
                
            }, 500);
        }

        function showLoginOverlay() {
            const overlay = document.getElementById('login-overlay');
            overlay.classList.remove('hide');
            overlay.classList.add('slide-up');
            
            // Initialize role switcher and tabs to HQ as default
            document.getElementById('role-switcher-header').value = 'hq';
            document.getElementById('hq-role-tabs').style.display = 'flex';
            document.getElementById('branch-role-tabs').style.display = 'none';
        }

        // Logout function
        function logout() {
            // Hide main content
            document.querySelectorAll('.role-view').forEach(el => el.classList.add('hide'));
            document.querySelectorAll('.hq-role-view').forEach(el => el.classList.add('hide'));
            document.querySelectorAll('.branch-role-view').forEach(el => el.classList.add('hide'));
            
            // Reset UI
            document.getElementById('hq-role-tabs').classList.add('hidden');
            document.getElementById('branch-role-tabs').classList.add('hidden');
            
            // Show login overlay
            showLoginOverlay();
            isLoggedIn = false;
        }

        // Switch main role (HQ, Branch, Parent)
        function switchMainRole(role) {
            if (role === 'hq') {
                // Show HQ tabs, hide Branch tabs
                const hqTabs = document.getElementById('hq-role-tabs');
                const branchTabs = document.getElementById('branch-role-tabs');
                hqTabs.style.display = 'flex';
                branchTabs.style.display = 'none';
                switchHqRole('super-admin');
            } else if (role === 'branch') {
                // Show Branch tabs, hide HQ tabs
                const hqTabs = document.getElementById('hq-role-tabs');
                const branchTabs = document.getElementById('branch-role-tabs');
                hqTabs.style.display = 'none';
                branchTabs.style.display = 'flex';
                switchBranchRole('executive');
            } else {
                // Hide both tabs for Parent role
                const hqTabs = document.getElementById('hq-role-tabs');
                const branchTabs = document.getElementById('branch-role-tabs');
                hqTabs.style.display = 'none';
                branchTabs.style.display = 'none';
                switchRole(role);
            }
        }

        // Main role switching function
        function switchRole(role) {
            if (!isLoggedIn) return;
            
            // Set currentRole first
            currentRole = role;
            
            // Hide all role views
            document.querySelectorAll('.role-view').forEach(el => el.classList.add('hide'));
            
            // Show selected role view
            const viewId = `view-${role}`;
            const viewElement = document.getElementById(viewId);
            if (viewElement) {
                viewElement.classList.remove('hide');
                viewElement.classList.add('fade-in');
            }
            
            // Update page title
            updatePageTitle(role);
            
            // Update sidebar menu
            updateSidebarMenu(currentRole);
            
            // Update user info
            const config = roleConfig[currentRole];
            if (config) {
                document.getElementById('user-name').innerText = config.name;
                document.getElementById('user-role').innerText = `${config.role} • ID: ${config.id}`;
                document.getElementById('sidebar-avatar').src = config.avatar;
                
                // Update mobile menu
                document.getElementById('mobile-user-name').innerText = config.name;
                document.getElementById('mobile-user-role').innerText = `${config.role} • ID: ${config.id}`;
            }
            
            // Update user permissions based on current role
            userPermissions.afterSchool = rolePermissions[currentRole] || [];
            
            // Refresh icons
            setTimeout(() => lucide.createIcons(), 100);
        }

        // Switch HQ Role
        function switchHqRole(role) {
            currentHqRole = role;
            
            // Update active tab
            document.querySelectorAll('.hq-role-tab').forEach(tab => {
                tab.classList.remove('active');
            });
            
            const activeTab = document.getElementById(`tab-hq-${role}`);
            if (activeTab) {
                activeTab.classList.add('active');
            }
            
            // Hide all HQ role views
            document.querySelectorAll('.hq-role-view').forEach(el => el.classList.add('hide'));
            
            // Show selected HQ role view
            const viewId = `hq-${role}-view`;
            const viewElement = document.getElementById(viewId);
            if (viewElement) {
                viewElement.classList.remove('hide');
                viewElement.classList.add('fade-in');
            }
            
            // Show HQ view
            document.getElementById('view-hq').classList.remove('hide');
            document.getElementById('view-branch').classList.add('hide');
            document.getElementById('view-parent').classList.add('hide');
            
            // Update page title
            updatePageTitle('hq');
            
            // Update sidebar based on HQ role
            let roleKey = 'hq-super-admin';
            if (role === 'master-teacher') roleKey = 'hq-master-teacher';
            else if (role === 'hr') roleKey = 'hq-hr';
            else if (role === 'accounting') roleKey = 'hq-accounting';
            
            currentRole = roleKey;
            updateSidebarMenu(roleKey);
            updateUserInfo(roleKey);
            
            // Update user permissions based on current role
            userPermissions.afterSchool = rolePermissions[currentRole] || [];
            updatePermissionsDisplay();
            
            // Update user permissions based on current role
            userPermissions.afterSchool = rolePermissions[currentRole] || [];
        }

        // Switch Branch Role
        function switchBranchRole(role) {
            currentBranchRole = role;
            
            // Update active tab
            document.querySelectorAll('.branch-role-tab').forEach(tab => {
                tab.classList.remove('active');
            });
            
            const activeTab = document.getElementById(`tab-branch-${role}`);
            if (activeTab) {
                activeTab.classList.add('active');
            }
            
            // Hide all Branch role views
            document.querySelectorAll('.branch-role-view').forEach(el => el.classList.add('hide'));
            
            // Show selected Branch role view
            const viewId = `branch-${role}-view`;
            const viewElement = document.getElementById(viewId);
            if (viewElement) {
                viewElement.classList.remove('hide');
                viewElement.classList.add('fade-in');
            }
            
            // Show Branch view
            document.getElementById('view-hq').classList.add('hide');
            document.getElementById('view-branch').classList.remove('hide');
            document.getElementById('view-parent').classList.add('hide');
            
            // Update page title
            updatePageTitle('branch');
            
            // Update sidebar based on Branch role
            let roleKey = 'branch-executive';
            if (role === 'admin') roleKey = 'branch-admin';
            else if (role === 'teacher') roleKey = 'branch-teacher';
            
            currentRole = roleKey;
            updateSidebarMenu(roleKey);
            updateUserInfo(roleKey);
            
            // Update user permissions based on current role
            userPermissions.afterSchool = rolePermissions[currentRole] || [];
            updatePermissionsDisplay();
        }

        // Update page title
        function updatePageTitle(role) {
            const pageTitle = document.getElementById('page-title');
            if (role === 'hq') pageTitle.innerText = 'HQ Dashboard';
            else if (role === 'branch') pageTitle.innerText = 'Branch Dashboard';
            else if (role === 'parent') pageTitle.innerText = 'Parent Portal';
        }

        // Update user info
        function updateUserInfo(roleKey) {
            const config = roleConfig[roleKey];
            if (config) {
                document.getElementById('user-name').innerText = config.name;
                document.getElementById('user-role').innerText = `${config.role} • ID: ${config.id}`;
                document.getElementById('sidebar-avatar').src = config.avatar;
                
                document.getElementById('mobile-user-name').innerText = config.name;
                document.getElementById('mobile-user-role').innerText = `${config.role} • ID: ${config.id}`;
            }
        }

        // Update sidebar menu
        function updateSidebarMenu(role) {
            const menuContainer = document.getElementById('sidebar-menu');
            const mobileMenuContainer = document.getElementById('mobile-menu-container');
            
            if (!menuContainer || !mobileMenuContainer) return;
            
            menuContainer.innerHTML = '';
            mobileMenuContainer.innerHTML = '';
            
            const config = roleConfig[role];
            if (!config || !config.menu) return;
            
            config.menu.forEach((item, index) => {
                const activeClass = index === 0 ? 'bg-indigo-800 text-white' : 'text-indigo-200 hover:bg-indigo-800 hover:text-white';
                const mobileActiveClass = index === 0 ? 'bg-indigo-50 text-indigo-700' : 'text-slate-700 hover:bg-slate-100';
                
                // Desktop menu
                const desktopLink = document.createElement('a');
                desktopLink.href = '#';
                desktopLink.className = `flex items-center gap-3 px-4 py-3 rounded-xl transition ${activeClass}`;
                desktopLink.innerHTML = `
                    <i data-lucide="${item.icon}" class="w-5 h-5"></i>
                    <span class="text-sm font-medium">${item.text}</span>
                `;
                desktopLink.onclick = (e) => {
                    e.preventDefault();
                    eval(item.action);
                };
                menuContainer.appendChild(desktopLink);
                
                // Mobile menu
                const mobileLink = document.createElement('a');
                mobileLink.href = '#';
                mobileLink.className = `flex items-center gap-3 px-4 py-3 rounded-xl transition ${mobileActiveClass}`;
                mobileLink.innerHTML = `
                    <i data-lucide="${item.icon}" class="w-5 h-5"></i>
                    <span class="text-sm font-medium">${item.text}</span>
                `;
                mobileLink.onclick = (e) => {
                    e.preventDefault();
                    eval(item.action);
                    toggleMobileMenu();
                };
                mobileMenuContainer.appendChild(mobileLink);
            });
            
            // Render Lucide icons for newly created menu items
            setTimeout(() => lucide.createIcons(), 100);
        }

        // Mobile menu toggle
        function toggleMobileMenu() {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('active');
        }

        // Notification panel toggle
        function toggleNotificationPanel() {
            const panel = document.getElementById('notification-panel');
            panel.classList.toggle('hide');
            document.getElementById('todo-sidebar').classList.add('hide');
        }

        // Todo sidebar toggle
        function toggleTodoSidebar() {
            const sidebar = document.getElementById('todo-sidebar');
            sidebar.classList.toggle('hide');
            document.getElementById('notification-panel').classList.add('hide');
        }

        // Daily report modal toggle
        function toggleDailyReport() {
            const modal = document.getElementById('report-modal');
            if (modal.classList.contains('hide')) {
                modal.classList.remove('hide');
                modal.querySelector('.modal-slide-up').classList.add('modal-slide-up');
            } else {
                modal.querySelector('.modal-slide-up').classList.add('modal-slide-down');
                setTimeout(() => {
                    modal.classList.add('hide');
                    modal.querySelector('.modal-slide-up').classList.remove('modal-slide-down');
                }, 400);
            }
        }

        // Select understanding level
        function selectUnderstandingLevel(level) {
            alert(`เลือกระดับความเข้าใจ: ${level}`);
        }

        // Submit daily report
        function submitDailyReport() {
            alert('✅ ส่งรายงานการสอนเรียบร้อยแล้ว! ผู้ปกครองจะได้รับแจ้งเตือน');
            toggleDailyReport();
        }

        // Show Virtual Card Fullscreen with animation
        function showVirtualCardFullscreen() {
            const modal = document.getElementById('virtual-card-fullscreen');
            modal.classList.remove('hide');
            modal.querySelector('.modal-slide-up').classList.add('modal-slide-up');
        }

        // Close Virtual Card Fullscreen with animation
        function closeVirtualCardFullscreen() {
            const modal = document.getElementById('virtual-card-fullscreen');
            modal.querySelector('.modal-slide-up').classList.add('modal-slide-down');
            setTimeout(() => {
                modal.classList.add('hide');
                modal.querySelector('.modal-slide-up').classList.remove('modal-slide-down');
            }, 400);
        }

        // Simulate QR Scan from Parent view
        function simulateScanFromParent() {
            alert('📱 ทดลองสแกน QR Code จากบัตรนักเรียน\n\nในระบบจริง: แอดมินจะใช้แอปสแกน QR Code เพื่อตัดชั่วโมงเรียนอัตโนมัติ');
            
            if (studentCredit > 0) {
                studentCredit--;
                document.querySelectorAll('.credit-balance').forEach(el => {
                    if (el.textContent.includes('8')) {
                        el.textContent = studentCredit + ' คาบ';
                    }
                });
                alert(`✅ ตัดชั่วโมงเรียนสำเร็จ! เหลือชั่วโมงเรียน: ${studentCredit} คาบ`);
            }
        }

        // Simulate QR Scan from Card
        function simulateScanFromCard() {
            alert('📱 ทดลองสแกน QR Code จากบัตรนักเรียนเต็มหน้าจอ\n\nแสดงหน้าจอนี้ให้แอดมินสาขาสแกนได้เลย!');
        }

        // Toggle After School Permissions
        function togglePermission(type) {
            const checkbox = document.getElementById(`perm-${type}`);
            if (checkbox.checked) {
                if (!userPermissions.afterSchool.includes(type)) {
                    userPermissions.afterSchool.push(type);
                }
            } else {
                userPermissions.afterSchool = userPermissions.afterSchool.filter(p => p !== type);
            }
            console.log('Updated permissions:', userPermissions.afterSchool);
            
            // Update the current permissions display
            const statusEl = document.querySelector('.permission-status');
            if (statusEl) {
                const master = userPermissions.afterSchool.includes('master');
                const teacher = userPermissions.afterSchool.includes('teacher');
                statusEl.textContent = (master && teacher) ? 'Master + Teacher' : master ? 'Master เท่านั้น' : teacher ? 'Teacher เท่านั้น' : 'ไม่มีสิทธิ์';
            }
        }

        // Update Role Permissions
        function updateRolePermissions(roleKey, permType, isChecked) {
            if (isChecked) {
                if (!rolePermissions[roleKey].includes(permType)) {
                    rolePermissions[roleKey].push(permType);
                }
            } else {
                rolePermissions[roleKey] = rolePermissions[roleKey].filter(p => p !== permType);
            }
            console.log(`Updated ${roleKey} permissions:`, rolePermissions[roleKey]);
            
            // Update user permissions if current role changed
            if (roleKey === currentRole) {
                userPermissions.afterSchool = rolePermissions[currentRole] || [];
                updatePermissionsDisplay();
            }
        }
        
        // Update Permissions Display
        function updatePermissionsDisplay() {
            const permDisplay = document.getElementById('current-permissions');
            if (permDisplay) {
                const perms = userPermissions.afterSchool;
                if (perms.includes('master') && perms.includes('teacher')) {
                    permDisplay.textContent = 'Master + Teacher';
                } else if (perms.includes('master')) {
                    permDisplay.textContent = 'Master';
                } else if (perms.includes('teacher')) {
                    permDisplay.textContent = 'Teacher';
                } else {
                    permDisplay.textContent = 'ไม่มีสิทธิ์';
                }
            }
            
            // Update permission buttons visibility and state
            updatePermissionButtons();
            filterPermissionDisplay();
        }

        // Simulate QR Scan from Card

        // Open QR Check-in modal
        function openQRCheckIn() {
            const modal = document.getElementById('qr-checkin-modal');
            modal.classList.remove('hide');
            modal.querySelector('.modal-slide-up').classList.add('modal-slide-up');
        }

        // Generic modal functions
        function openModal(modalType) {
            const modal = document.getElementById('generic-modal');
            const title = document.getElementById('modal-title');
            const content = document.getElementById('modal-content');
            
            let modalTitle = 'Feature Preview';
            let modalContent = `
                <div class="text-center p-8">
                    <div class="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <i data-lucide="code" class="w-8 h-8 text-indigo-600"></i>
                    </div>
                    <h4 class="font-bold text-lg mb-2">ฟีเจอร์นี้อยู่ในระหว่างพัฒนา</h4>
                    <p class="text-slate-600 mb-4">สำหรับการนำเสนอ Mockup นี้แสดงให้เห็นถึง UX/UI เท่านั้น</p>
                    <p class="text-sm text-slate-500">ฟีเจอร์ "${modalType}" จะทำงานเต็มรูปแบบในระบบจริง</p>
                </div>
                <div class="mt-6">
                    <button onclick="closeModal()" class="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700">เข้าใจแล้ว</button>
                </div>
            `;
            
            switch(modalType) {
                case 'branch-finance':
                    modalTitle = 'รายงานการเงินสาขา';
                    modalContent = `
                        <div class="p-6 max-h-96 overflow-y-auto">
                            <!-- Finance Summary -->
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                <div class="p-4 bg-green-50 rounded-xl border border-green-100">
                                    <p class="text-sm text-slate-600 mb-1">รายรับค่าคอร์ส (เดือนนี้)</p>
                                    <p class="text-2xl font-bold text-green-700">฿2,400,000</p>
                                    <p class="text-xs text-green-600 mt-1">↑ 15% จากเดือนที่แล้ว</p>
                                </div>
                                <div class="p-4 bg-orange-50 rounded-xl border border-orange-100">
                                    <p class="text-sm text-slate-600 mb-1">ค่าสอนครู (เดือนนี้)</p>
                                    <p class="text-2xl font-bold text-orange-700">฿420,000</p>
                                    <p class="text-xs text-orange-600 mt-1">ครู 15 คน</p>
                                </div>
                                <div class="p-4 bg-blue-50 rounded-xl border border-blue-100">
                                    <p class="text-sm text-slate-600 mb-1">กำไรสุทธิ (เดือนนี้)</p>
                                    <p class="text-2xl font-bold text-blue-700">฿1,980,000</p>
                                    <p class="text-xs text-blue-600 mt-1">82.5% มาร์จิน</p>
                                </div>
                            </div>

                            <!-- Revenue Breakdown -->
                            <div class="mb-6">
                                <h4 class="font-bold text-slate-800 mb-3">รายรับตามคอร์ส</h4>
                                <div class="space-y-2">
                                    <div class="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                                        <span class="text-sm">Math Visual Level 1</span>
                                        <span class="font-bold">฿840,000</span>
                                    </div>
                                    <div class="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                                        <span class="text-sm">Math Visual Level 2</span>
                                        <span class="font-bold">฿720,000</span>
                                    </div>
                                    <div class="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                                        <span class="text-sm">Science Explorer</span>
                                        <span class="font-bold">฿600,000</span>
                                    </div>
                                    <div class="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                                        <span class="text-sm">English Communication</span>
                                        <span class="font-bold">฿240,000</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Monthly Comparison -->
                            <div class="mb-6">
                                <h4 class="font-bold text-slate-800 mb-3">เปรียบเทียบรายได้ 3 เดือนล่าสุด</h4>
                                <div class="space-y-2">
                                    <div class="flex items-center justify-between">
                                        <span class="text-sm">กุมภาพันธ์ 2026</span>
                                        <div class="flex-1 ml-4 bg-slate-200 rounded-full h-6">
                                            <div class="bg-green-500 h-full rounded-full" style="width: 85%;"></div>
                                        </div>
                                        <span class="text-sm font-bold ml-4">฿2,040,000</span>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <span class="text-sm">มีนาคม 2026</span>
                                        <div class="flex-1 ml-4 bg-slate-200 rounded-full h-6">
                                            <div class="bg-green-500 h-full rounded-full" style="width: 91%;"></div>
                                        </div>
                                        <span class="text-sm font-bold ml-4">฿2,180,000</span>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <span class="text-sm">เมษายน 2026 (ปัจจุบัน)</span>
                                        <div class="flex-1 ml-4 bg-slate-200 rounded-full h-6">
                                            <div class="bg-green-500 h-full rounded-full" style="width: 100%;"></div>
                                        </div>
                                        <span class="text-sm font-bold ml-4">฿2,400,000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex gap-3 mt-6">
                            <button onclick="openModal('export-report')" class="flex-1 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700">📊 ส่งออกรายงาน</button>
                            <button onclick="closeModal()" class="flex-1 py-2 bg-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-300">ปิด</button>
                        </div>
                    `;
                    break;
                case 'branch-schedule':
                    modalTitle = 'ตารางเรียนทั้งหมดในสาขา';
                    break;
                case 'branch-training':
                    modalTitle = 'VDO Training สาขา';
                    break;
                case 'create-receipt':
                    modalTitle = 'ออกใบเสร็จ/กำกับภาษี';
                    break;
                case 'teacher-schedule':
                    modalTitle = 'ตารางสอนของฉัน';
                    break;
                case 'my-students':
                    modalTitle = 'นักเรียนของฉัน';
                    break;
                case 'teacher-leave':
                    modalTitle = 'แจ้งลา/สลับคาบเรียน';
                    break;
                case 'teacher-documents':
                    modalTitle = 'เอกสารหลักสูตร (ดูและพิมพ์)';
                    break;
                case 'media-stock':
                    modalTitle = 'สต็อกสื่อการสอน';
                    modalContent = `
                        <div class="p-6 max-h-96 overflow-y-auto">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                    <p class="text-sm text-slate-600 mb-1">หนังสือเรียน</p>
                                    <p class="text-2xl font-bold text-blue-700">45</p>
                                    <p class="text-xs text-blue-600 mt-1">เล่ม</p>
                                </div>
                                <div class="p-4 bg-green-50 rounded-lg border border-green-200">
                                    <p class="text-sm text-slate-600 mb-1">สื่อเสริม</p>
                                    <p class="text-2xl font-bold text-green-700">128</p>
                                    <p class="text-xs text-green-600 mt-1">ชิ้น</p>
                                </div>
                                <div class="p-4 bg-orange-50 rounded-lg border border-orange-200">
                                    <p class="text-sm text-slate-600 mb-1">อุปกรณ์สอน</p>
                                    <p class="text-2xl font-bold text-orange-700">32</p>
                                    <p class="text-xs text-orange-600 mt-1">ชิ้น</p>
                                </div>
                                <div class="p-4 bg-purple-50 rounded-lg border border-purple-200">
                                    <p class="text-sm text-slate-600 mb-1">แบบฝึกหัด</p>
                                    <p class="text-2xl font-bold text-purple-700">52</p>
                                    <p class="text-xs text-purple-600 mt-1">ชุด</p>
                                </div>
                            </div>

                            <h4 class="font-bold text-slate-800 mb-3">รายละเอียดสต็อก</h4>
                            <div class="space-y-2 mb-4">
                                <div class="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                                    <div class="flex-1">
                                        <p class="font-medium text-sm">Math Visual Level 1-3 (หนังสือ)</p>
                                        <p class="text-xs text-slate-600">พร้อมใช้: 45 เล่ม</p>
                                    </div>
                                    <button onclick="alert('ดูรายละเอียดหนังสือ Math Visual L1-3')" class="px-3 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700">ดู</button>
                                </div>
                                <div class="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                                    <div class="flex-1">
                                        <p class="font-medium text-sm">สื่อคณิตศาสตร์เสริม</p>
                                        <p class="text-xs text-slate-600">พร้อมใช้: 128 ชิ้น | สต็อกต่ำ: 35 ชิ้น</p>
                                    </div>
                                    <button onclick="alert('ส่งคำขออุปกรณ์เพิ่มเติม')" class="px-3 py-1 bg-green-600 text-white rounded text-xs hover:bg-green-700">สั่ง</button>
                                </div>
                                <div class="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                                    <div class="flex-1">
                                        <p class="font-medium text-sm">อุปกรณ์สอนทั่วไป</p>
                                        <p class="text-xs text-slate-600">พร้อมใช้: 32 ชิ้น</p>
                                    </div>
                                    <button onclick="alert('ดูรายละเอียดอุปกรณ์')" class="px-3 py-1 bg-orange-600 text-white rounded text-xs hover:bg-orange-700">ดู</button>
                                </div>
                                <div class="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                                    <div class="flex-1">
                                        <p class="font-medium text-sm">แบบฝึกหัดและคำตอบ</p>
                                        <p class="text-xs text-slate-600">พร้อมใช้: 52 ชุด</p>
                                    </div>
                                    <button onclick="alert('ดาวน์โหลดแบบฝึกหัด')" class="px-3 py-1 bg-purple-600 text-white rounded text-xs hover:bg-purple-700">ดาวน์โหลด</button>
                                </div>
                            </div>
                        </div>
                        <div class="flex gap-3 mt-6">
                            <button onclick="alert('อัปโหลดสต็อกสื่อใหม่')" class="flex-1 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700">📤 อัปโหลดสิ่งของ</button>
                            <button onclick="closeModal()" class="flex-1 py-2 bg-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-300">ปิด</button>
                        </div>
                    `;
                    break;
                case 'after-school-partners':
                    modalTitle = 'โรงเรียนพันธมิตร (After School)';
                    const masterPerm1 = userPermissions.afterSchool.includes('master');
                    modalContent = `
                        <div class="p-6 max-h-96 overflow-y-auto">
                            <div class="space-y-3 mb-4">
                                <div class="p-4 bg-pink-50 rounded-lg border border-pink-200">
                                    <div class="flex justify-between items-start">
                                        <div>
                                            <p class="font-bold">โรงเรียนสวนกุหลาบ</p>
                                            <p class="text-sm text-slate-600">สถาบัน • นักเรียน 120 คน</p>
                                            <p class="text-xs text-slate-500 mt-1">พื้นที่: กรุงเทพฯ • ผู้ประสานงาน: นายอ้อย</p>
                                        </div>
                                        <button onclick="alert('ดูรายละเอียดโรงเรียนสวนกุหลาบ')" class="px-3 py-1 bg-pink-600 text-white rounded text-xs hover:bg-pink-700">ดู</button>
                                    </div>
                                </div>
                                <div class="p-4 bg-pink-50 rounded-lg border border-pink-200">
                                    <div class="flex justify-between items-start">
                                        <div>
                                            <p class="font-bold">โรงเรียนอ่านการแสง</p>
                                            <p class="text-sm text-slate-600">สถาบัน • นักเรียน 85 คน</p>
                                            <p class="text-xs text-slate-500 mt-1">พื้นที่: กรุงเทพฯ • ผู้ประสานงาน: นางเสาวลักษณ์</p>
                                        </div>
                                        <button onclick="alert('ดูรายละเอียดโรงเรียนอ่านการแสง')" class="px-3 py-1 bg-pink-600 text-white rounded text-xs hover:bg-pink-700">ดู</button>
                                    </div>
                                </div>
                                <div class="p-4 bg-pink-50 rounded-lg border border-pink-200">
                                    <div class="flex justify-between items-start">
                                        <div>
                                            <p class="font-bold">โรงเรียนคณะสมบัติ</p>
                                            <p class="text-sm text-slate-600">สถาบัน • นักเรียน 110 คน</p>
                                            <p class="text-xs text-slate-500 mt-1">พื้นที่: กรุงเทพฯ • ผู้ประสานงาน: อาจารย์นุ่น</p>
                                        </div>
                                        <button onclick="alert('ดูรายละเอียดโรงเรียนคณะสมบัติ')" class="px-3 py-1 bg-pink-600 text-white rounded text-xs hover:bg-pink-700">ดู</button>
                                    </div>
                                </div>
                            </div>
                            <p class="text-sm font-bold text-slate-800 mb-2">รวมทั้งสิ้น: 8 โรงเรียน • นักเรียน 650 คน</p>
                        </div>
                        <div class="flex gap-3 mt-6">
                            ${masterPerm1 ? '<button onclick="alert(\'เพิ่มโรงเรียนพันธมิตรใหม่\')" class="flex-1 py-2 bg-pink-600 text-white rounded-lg text-sm font-medium hover:bg-pink-700">🏫 เพิ่มโรงเรียน</button>' : ''}
                            <button onclick="closeModal()" class="flex-1 py-2 bg-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-300">ปิด</button>
                        </div>
                    `;
                    break;
                case 'after-school-schedule':
                    modalTitle = 'ตารางเรียน & คลาส (After School)';
                    const masterPerm2 = userPermissions.afterSchool.includes('master');
                    modalContent = `
                        <div class="p-6 max-h-96 overflow-y-auto">
                            <div class="mb-4">
                                <h4 class="font-bold text-slate-800 mb-3">คลาสในสัปดาห์นี้ • 24 คลาส</h4>
                                <div class="space-y-2">
                                    <div class="p-3 bg-cyan-50 rounded-lg border border-cyan-200">
                                        <div class="flex justify-between items-start">
                                            <div>
                                                <p class="font-medium text-sm">Math Visual L1 @ โรงเรียนสวนกุหลาบ</p>
                                                <p class="text-xs text-slate-600">จันทร์ 16:30-17:30 • ครูสมศรี</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-3 bg-cyan-50 rounded-lg border border-cyan-200">
                                        <div class="flex justify-between items-start">
                                            <div>
                                                <p class="font-medium text-sm">Science Explorer @ โรงเรียนอ่านการแสง</p>
                                                <p class="text-xs text-slate-600">อังคาร 16:30-17:30 • ครูภูมิ</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-3 bg-cyan-50 rounded-lg border border-cyan-200">
                                        <div class="flex justify-between items-start">
                                            <div>
                                                <p class="font-medium text-sm">Math Visual L2 @ โรงเรียนคณะสมบัติ</p>
                                                <p class="text-xs text-slate-600">พุธ 17:00-18:00 • ครูนัสตูน</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex gap-3 mt-6">
                            ${masterPerm2 ? '<button onclick="alert(\'ดูตารางเรียนทั้งหมด\')" class="flex-1 py-2 bg-cyan-600 text-white rounded-lg text-sm font-medium hover:bg-cyan-700">📅 ตารางเต็ม</button>' : ''}
                            <button onclick="closeModal()" class="flex-1 py-2 bg-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-300">ปิด</button>
                        </div>
                    `;
                    break;
                case 'after-school-curriculum':
                    modalTitle = 'เอกสาร & แผนการสอน (After School)';
                    const hasMasterPermission = userPermissions.afterSchool.includes('master');
                    const hasTeacherPermission = userPermissions.afterSchool.includes('teacher');
                    
                    // Build permission status message
                    let permissionMsg = '';
                    if (hasMasterPermission && hasTeacherPermission) {
                        permissionMsg = 'สิทธิ์: Master + Teacher | สามารถ แก้ไข ลบ อัปโหลด ดู และพิมพ์';
                    } else if (hasMasterPermission) {
                        permissionMsg = 'สิทธิ์: Master | สามารถ แก้ไข ลบ อัปโหลด ดู และพิมพ์';
                    } else if (hasTeacherPermission) {
                        permissionMsg = 'สิทธิ์: Teacher | สามารถดู และพิมพ์เท่านั้น';
                    }
                    
                    modalContent = `
                        <div class="p-6 max-h-96 overflow-y-auto">
                            <div class="space-y-3 mb-4">
                                <div class="p-4 bg-rose-50 rounded-lg border border-rose-200">
                                    <div class="flex justify-between items-start">
                                        <div>
                                            <p class="font-bold">Math Visual Level 1</p>
                                            <p class="text-xs text-slate-600">แผนการสอน • อัปเดต 15/04/2026</p>
                                        </div>
                                        <div class="flex gap-2">
                                            <button onclick="alert('ดูเอกสาร')" class="px-2 py-1 bg-rose-600 text-white rounded text-xs hover:bg-rose-700">ดู</button>
                                            ${hasMasterPermission ? '<button onclick="alert(\'แก้ไขเอกสาร\')" class="px-2 py-1 bg-green-600 text-white rounded text-xs hover:bg-green-700">แก้</button>' : ''}
                                            <button onclick="alert('ดาวน์โหลด')" class="px-2 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700">ดาวน์</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-4 bg-rose-50 rounded-lg border border-rose-200">
                                    <div class="flex justify-between items-start">
                                        <div>
                                            <p class="font-bold">Science Explorer</p>
                                            <p class="text-xs text-slate-600">แผนการสอน • อัปเดต 12/04/2026</p>
                                        </div>
                                        <div class="flex gap-2">
                                            <button onclick="alert('ดูเอกสาร')" class="px-2 py-1 bg-rose-600 text-white rounded text-xs hover:bg-rose-700">ดู</button>
                                            ${hasMasterPermission ? '<button onclick="alert(\'แก้ไขเอกสาร\')" class="px-2 py-1 bg-green-600 text-white rounded text-xs hover:bg-green-700">แก้</button>' : ''}
                                            <button onclick="alert('ดาวน์โหลด')" class="px-2 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700">ดาวน์</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p class="text-xs text-slate-600 mb-4">${permissionMsg}</p>
                        </div>
                        <div class="flex gap-3 mt-6">
                            ${hasMasterPermission ? '<button onclick="alert(\'อัปโหลดเอกสารใหม่\')" class="flex-1 py-2 bg-rose-600 text-white rounded-lg text-sm font-medium hover:bg-rose-700">📤 อัปโหลด</button>' : ''}
                            <button onclick="closeModal()" class="flex-1 py-2 bg-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-300">ปิด</button>
                        </div>
                    `;
                    break;
                case 'after-school-permissions':
                    modalTitle = 'ตั้งค่าสิทธิ์ After School Program';
                    const currentMaster = userPermissions.afterSchool.includes('master');
                    const currentTeacher = userPermissions.afterSchool.includes('teacher');
                    
                    modalContent = `
                        <div class="p-6 max-h-96 overflow-y-auto">
                            <div class="mb-6">
                                <p class="text-sm text-slate-600 mb-4">เลือกสิทธิ์การเข้าถึง After School Program:</p>
                                
                                <div class="space-y-3">
                                    <label class="flex items-start gap-3 p-4 bg-indigo-50 rounded-lg border border-indigo-200 cursor-pointer hover:bg-indigo-100">
                                        <input type="checkbox" id="perm-master" ${currentMaster ? 'checked' : ''} class="w-5 h-5 text-indigo-600 rounded mt-0.5" onchange="togglePermission('master')">
                                        <div>
                                            <p class="font-bold text-sm text-slate-800">Master (สิทธิ์เต็ม)</p>
                                            <p class="text-xs text-slate-600">✓ ดู ✓ ดาวน์โหลด ✓ แก้ไข ✓ ลบ ✓ อัปโหลด</p>
                                        </div>
                                    </label>
                                    
                                    <label class="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200 cursor-pointer hover:bg-green-100">
                                        <input type="checkbox" id="perm-teacher" ${currentTeacher ? 'checked' : ''} class="w-5 h-5 text-green-600 rounded mt-0.5" onchange="togglePermission('teacher')">
                                        <div>
                                            <p class="font-bold text-sm text-slate-800">Teacher (สิทธิ์จำกัด)</p>
                                            <p class="text-xs text-slate-600">✓ ดู ✓ ดาวน์โหลด (Read-only)</p>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            
                            <div class="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                <p class="text-xs font-bold text-slate-700 mb-2">สิทธิ์ปัจจุบัน:</p>
                                <p class="text-sm text-slate-600 permission-status">
                                    ${currentMaster && currentTeacher ? 'Master + Teacher' : currentMaster ? 'Master เท่านั้น' : currentTeacher ? 'Teacher เท่านั้น' : 'ไม่มีสิทธิ์'}
                                </p>
                            </div>
                        </div>
                        <div class="flex gap-3 mt-6">
                            <button onclick="closeModal()" class="flex-1 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700">บันทึก</button>
                            <button onclick="closeModal()" class="flex-1 py-2 bg-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-300">ยกเลิก</button>
                        </div>
                    `;
                    break;
                case 'role-permissions':
                    modalTitle = 'จัดการสิทธิ์ Role - After School Program';
                    const rolePermissions = {
                        'hq-super-admin': ['master'],
                        'hq-master-teacher': ['master'],
                        'hq-hr': [],
                        'hq-accounting': [],
                        'branch-executive': [],
                        'branch-admin': ['teacher'],
                        'branch-teacher': ['teacher'],
                        'parent': []
                    };
                    
                    let rolesHtml = '';
                    for (let roleKey in rolePermissions) {
                        const config = roleConfig[roleKey];
                        const perms = rolePermissions[roleKey];
                        rolesHtml += `
                            <div class="p-4 bg-slate-50 rounded-lg border border-slate-200 mb-4">
                                <div class="flex justify-between items-start mb-3">
                                    <div>
                                        <p class="font-bold text-slate-800">${config.name}</p>
                                        <p class="text-xs text-slate-600">${config.role}</p>
                                    </div>
                                </div>
                                <div class="flex gap-3">
                                    <label class="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" class="role-perm-master w-4 h-4" data-role="${roleKey}" ${perms.includes('master') ? 'checked' : ''} onchange="updateRolePermissions('${roleKey}', 'master', this.checked)">
                                        <span class="text-sm">Master</span>
                                    </label>
                                    <label class="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" class="role-perm-teacher w-4 h-4" data-role="${roleKey}" ${perms.includes('teacher') ? 'checked' : ''} onchange="updateRolePermissions('${roleKey}', 'teacher', this.checked)">
                                        <span class="text-sm">Teacher</span>
                                    </label>
                                </div>
                            </div>
                        `;
                    }
                    
                    modalContent = `
                        <div class="p-6 max-h-96 overflow-y-auto">
                            <p class="text-sm text-slate-600 mb-4">เลือกสิทธิ์ After School Program สำหรับแต่ละ Role:</p>
                            ${rolesHtml}
                        </div>
                        <div class="flex gap-3 mt-6">
                            <button onclick="closeModal()" class="flex-1 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700">บันทึก</button>
                            <button onclick="closeModal()" class="flex-1 py-2 bg-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-300">ปิด</button>
                        </div>
                    `;
                    break;
                case 'teacher-training':
                    modalContent = `
                        <div class="p-6 max-h-96 overflow-y-auto">
                            <div class="mb-6">
                                <h4 class="font-bold text-lg mb-4">วิดีโอการฝึกอบรมสำหรับครู</h4>
                                
                                <!-- Mathematics Section -->
                                <div class="mb-6">
                                    <h5 class="font-bold text-indigo-600 mb-3 flex items-center">
                                        <i data-lucide="calculator" class="w-5 h-5 mr-2"></i> คณิตศาสตร์
                                    </h5>
                                    <div class="space-y-3 ml-4">
                                        <div class="p-3 bg-indigo-50 rounded-lg border border-indigo-200">
                                            <div class="flex justify-between items-start gap-3">
                                                <div class="flex-1">
                                                    <p class="font-medium text-sm">การสอนแบบฟินแลนด์</p>
                                                    <p class="text-xs text-slate-600">25 นาที</p>
                                                </div>
                                                <button onclick="playVideoTraining('finland-math')" class="px-3 py-1 bg-indigo-600 text-white rounded text-xs whitespace-nowrap hover:bg-indigo-700">เล่น</button>
                                            </div>
                                        </div>
                                        <div class="p-3 bg-indigo-50 rounded-lg border border-indigo-200">
                                            <div class="flex justify-between items-start gap-3">
                                                <div class="flex-1">
                                                    <p class="font-medium text-sm">เทคนิคการสอนคิดวิเคราะห์</p>
                                                    <p class="text-xs text-slate-600">18 นาที</p>
                                                </div>
                                                <button onclick="playVideoTraining('critical-math')" class="px-3 py-1 bg-indigo-600 text-white rounded text-xs whitespace-nowrap hover:bg-indigo-700">เล่น</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Science Section -->
                                <div class="mb-6">
                                    <h5 class="font-bold text-green-600 mb-3 flex items-center">
                                        <i data-lucide="microscope" class="w-5 h-5 mr-2"></i> วิทยาศาสตร์
                                    </h5>
                                    <div class="space-y-3 ml-4">
                                        <div class="p-3 bg-green-50 rounded-lg border border-green-200">
                                            <div class="flex justify-between items-start gap-3">
                                                <div class="flex-1">
                                                    <p class="font-medium text-sm">การใช้สื่อการสอน "เครื่องกลอย่างง่าย (Simple Machines)"</p>
                                                    <p class="text-xs text-slate-600">YouTube • https://youtu.be/PB38VWJponY</p>
                                                </div>
                                                <button onclick="playVideoTraining('simple-machines')" class="px-3 py-1 bg-green-600 text-white rounded text-xs whitespace-nowrap hover:bg-green-700">เล่น</button>
                                            </div>
                                        </div>
                                        <div class="p-3 bg-green-50 rounded-lg border border-green-200">
                                            <div class="flex justify-between items-start gap-3">
                                                <div class="flex-1">
                                                    <p class="font-medium text-sm">การใช้สื่อการสอน "ชุดเรียนรู้เกี่ยวกับเลนส์ (Geometric Optics Kit)"</p>
                                                    <p class="text-xs text-slate-600">YouTube • https://youtu.be/G_hwj0mUlow</p>
                                                </div>
                                                <button onclick="playVideoTraining('optics-kit')" class="px-3 py-1 bg-green-600 text-white rounded text-xs whitespace-nowrap hover:bg-green-700">เล่น</button>
                                            </div>
                                        </div>
                                        <div class="p-3 bg-green-50 rounded-lg border border-green-200">
                                            <div class="flex justify-between items-start gap-3">
                                                <div class="flex-1">
                                                    <p class="font-medium text-sm">สาธิตการทดลอง "ทดสอบหมู่เลือด (Blood Test)"</p>
                                                    <p class="text-xs text-slate-600">YouTube • https://youtu.be/fEXn8ux884c</p>
                                                </div>
                                                <button onclick="playVideoTraining('blood-test')" class="px-3 py-1 bg-green-600 text-white rounded text-xs whitespace-nowrap hover:bg-green-700">เล่น</button>
                                            </div>
                                        </div>
                                        <div class="p-3 bg-green-50 rounded-lg border border-green-200">
                                            <div class="flex justify-between items-start gap-3">
                                                <div class="flex-1">
                                                    <p class="font-medium text-sm">สาธิตวิธีการสอนเรื่อง "แรงเสียดทาน (Friction Force)"</p>
                                                    <p class="text-xs text-slate-600">YouTube • https://youtu.be/VUPlI5-4wto</p>
                                                </div>
                                                <button onclick="playVideoTraining('friction-force')" class="px-3 py-1 bg-green-600 text-white rounded text-xs whitespace-nowrap hover:bg-green-700">เล่น</button>
                                            </div>
                                        </div>
                                        <div class="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                                            <div class="flex justify-between items-start gap-3">
                                                <div class="flex-1">
                                                    <p class="font-medium text-sm">📎 เอกสารเพิ่มเติม</p>
                                                    <p class="text-xs text-slate-600">สารสนเทศการสอนวิทยาศาสตร์</p>
                                                </div>
                                                <button onclick="openExternalLink('https://1drv.ms/w/c/c60b5f17f630a350/IQAHIjxDBSBmR4Hn-nFEpzybAVl81lDN8TF0wg9PmZmRRCI?e=ag4jn0')" class="px-3 py-1 bg-yellow-600 text-white rounded text-xs whitespace-nowrap hover:bg-yellow-700">เปิด</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Quiz Section -->
                                <div class="p-4 bg-purple-50 rounded-lg border border-purple-200 mt-6">
                                    <h5 class="font-bold text-purple-600 mb-3 flex items-center">
                                        <i data-lucide="clipboard-list" class="w-5 h-5 mr-2"></i> บททดสอบระหว่างเรียน
                                    </h5>
                                    <div class="space-y-2 ml-4">
                                        <p class="text-sm text-slate-700">หลังจากชมวิดีโอการฝึกอบรม สามารถทำแบบทดสอบเพื่อตรวจสอบความเข้าใจได้</p>
                                        <button onclick="startQuiz('teacher-training')" class="w-full mt-3 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700">
                                            <i data-lucide="play" class="w-4 h-4 inline mr-2"></i> เริ่มทำบททดสอบ
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button onclick="closeModal()" class="w-full mt-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700">ปิด</button>
                        </div>
                    `;
                    break;
                case 'makeup-class':
                    modalTitle = 'เรียนชดเชย';
                    modalContent = `
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
                                        </div>
                                        <button onclick="selectMakeupClass()" class="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">เลือก</button>
                                    </div>
                                </div>
                                <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                                    <div class="flex justify-between items-center">
                                        <div>
                                            <p class="font-medium">Math Level 2</p>
                                            <p class="text-sm text-slate-600">28/04/2026 • 13:00-14:30</p>
                                        </div>
                                        <button onclick="selectMakeupClass()" class="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg text-sm">เลือก</button>
                                    </div>
                                </div>
                            </div>
                            <button onclick="closeModal()" class="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700">ปิด</button>
                        </div>
                    `;
                    break;
                case 'payment-parent':
                    modalTitle = 'ชำระเงิน';
                    modalContent = `
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
                                <button onclick="simulatePayment('qr')" class="p-4 bg-white border rounded-xl text-center hover:bg-slate-50">
                                    <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                                        <i data-lucide="qr-code" class="w-5 h-5 text-green-600"></i>
                                    </div>
                                    <p class="text-sm font-medium">QR Payment</p>
                                </button>
                                <button onclick="simulatePayment('transfer')" class="p-4 bg-white border rounded-xl text-center hover:bg-slate-50">
                                    <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                                        <i data-lucide="banknote" class="w-5 h-5 text-blue-600"></i>
                                    </div>
                                    <p class="text-sm font-medium">โอนธนาคาร</p>
                                </button>
                            </div>
                            <button onclick="closeModal()" class="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700">ปิด</button>
                        </div>
                    `;
                    break;
                case 'schedule-parent':
                    modalTitle = 'ตารางเรียน';
                    modalContent = `
                        <div class="p-6">
                            <div class="mb-6">
                                <h4 class="font-bold text-lg mb-2">ตารางเรียน 1 เดือนข้างหน้า</h4>
                                <p class="text-slate-600">Math Visual Level 2 • ครูสมศรี</p>
                            </div>
                            <div class="space-y-3 mb-6">
                                <div class="p-4 bg-blue-50 rounded-xl border border-blue-100">
                                    <div class="flex justify-between items-center">
                                        <div>
                                            <p class="font-medium">24 เมษายน 2026</p>
                                            <p class="text-sm text-slate-600">10:00-11:30 • ห้อง 1</p>
                                        </div>
                                        <span class="role-badge bg-green-100 text-green-800">ปกติ</span>
                                    </div>
                                </div>
                                <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                                    <div class="flex justify-between items-center">
                                        <div>
                                            <p class="font-medium">26 เมษายน 2026</p>
                                            <p class="text-sm text-slate-600">10:00-11:30 • ห้อง 1</p>
                                        </div>
                                        <span class="role-badge bg-slate-100 text-slate-800">ปกติ</span>
                                    </div>
                                </div>
                                <div class="p-4 bg-orange-50 rounded-xl border border-orange-100">
                                    <div class="flex justify-between items-center">
                                        <div>
                                            <p class="font-medium">28 เมษายน 2026</p>
                                            <p class="text-sm text-slate-600">13:00-14:30 • ห้อง 2</p>
                                        </div>
                                        <span class="role-badge bg-orange-100 text-orange-800">ชดเชย</span>
                                    </div>
                                </div>
                            </div>
                            <button onclick="closeModal()" class="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700">ปิด</button>
                        </div>
                    `;
                    break;
            }
            
            title.innerText = modalTitle;
            content.innerHTML = modalContent;
            
            modal.classList.remove('hide');
            modal.querySelector('.modal-slide-up').classList.add('modal-slide-up');
        }

        function closeModal() {
            const modals = [
                'generic-modal', 'report-modal', 'qr-checkin-modal', 
                'virtual-card-fullscreen'
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
                        }, 400);
                    } else {
                        modal.classList.add('hide');
                    }
                }
            });
        }

        // Send payment reminder
        function sendPaymentReminders() {
            alert('📧 ส่งการแจ้งเตือนการชำระเงินเรียบร้อยแล้ว!');
        }

        // Create receipt
        function createReceipt() {
            alert('🧾 สร้างใบเสร็จรับเงินเรียบร้อยแล้ว!');
        }

        // Create tax invoice
        function createTaxInvoice() {
            alert('🧾 สร้างใบกำกับภาษีเรียบร้อยแล้ว!');
        }

        // View student details
        function viewStudentDetails(studentId) {
            alert(`👤 ดูรายละเอียดนักเรียนรหัส: ${studentId}\n\nในระบบจริง: จะแสดงประวัตินักเรียนทั้งหมด`);
        }

        // Prepare lesson
        function prepareLesson() {
            alert('📚 เปิดหน้าเตรียมการสอน\n\nในระบบจริง: จะแสดงเนื้อหาและสื่อการสอนสำหรับคาบเรียนนี้');
        }

        // Simulate payment
        function simulatePayment(method) {
            alert(`💳 ทดลองชำระเงินผ่าน ${method === 'qr' ? 'QR Payment' : 'โอนธนาคาร'}\n\nในระบบจริง: จะเชื่อมต่อกับระบบชำระเงิน`);
            closeModal();
        }

        // Select makeup class
        function selectMakeupClass() {
            alert('✅ เลือกรอบเรียนชดเชยเรียบร้อยแล้ว!');
            closeModal();
        }

        // Scroll to top
        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // View document
        function viewDocument(docId) {
            alert(`📄 ดูเอกสาร: ${docId}\n\nในระบบจริง: จะแสดงเอกสารแบบอ่านอย่างเดียว`);
        }

        // Edit document
        function editDocument(docId) {
            alert(`✏️ แก้ไขเอกสาร: ${docId}\n\nในระบบจริง: จะเปิดตัวแก้ไขเอกสาร`);
        }

        // Print document
        function printDocument(docId) {
            alert(`🖨️ พิมพ์เอกสาร: ${docId}\n\nในระบบจริง: จะเปิดหน้าต่างพิมพ์`);
        }

        // View video
        function viewVideo(videoId) {
            alert(`🎬 ดูวิดีโอ: ${videoId}\n\nในระบบจริง: จะเล่นวิดีโอจาก YouTube`);
        }

        // Edit video
        function editVideo(videoId) {
            alert(`✏️ แก้ไขวิดีโอ: ${videoId}\n\nในระบบจริง: จะเปิดตัวแก้ไขข้อมูลวิดีโอ`);
        }

        // Add YouTube video
        function addYouTubeVideo() {
            alert('📹 เพิ่มวิดีโอจาก YouTube เรียบร้อยแล้ว!\n\nในระบบจริง: จะบันทึกลิงก์ YouTube ในระบบ');
        }

        // View employee
        function viewEmployee(employeeId) {
            alert(`👤 ดูรายละเอียดพนักงานรหัส: ${employeeId}`);
        }

        // Calculate salary
        function calculateSalary(employeeId) {
            alert(`💰 คำนวณเงินเดือนพนักงานรหัส: ${employeeId}\n\nในระบบจริง: จะเปิดเครื่องมือคำนวณเงินเดือน`);
        }

        // View branch finance
        function viewBranchFinance(branchId) {
            alert(`🏢 ดูรายละเอียดการเงินสาขา: ${branchId}`);
        }

        // Generate financial report
        function generateFinancialReport() {
            alert('📊 สร้างรายงานการเงินประจำเดือนเรียบร้อยแล้ว!\n\nไฟล์ PDF พร้อมดาวน์โหลด');
        }

        // Generate tax report
        function generateTaxReport() {
            alert('📋 สร้างรายงานภาษีประจำเดือนเรียบร้อยแล้ว!');
        }

        // Open branch management
        function openBranchManagement() {
            alert('🏢 เปิดหน้าจัดการสาขาทั้งหมด\n\nในระบบจริง: จะแสดงรายการสาขาทั้งหมด');
        }

        // Play video training
        function playVideoTraining(videoId) {
            alert(`🎬 เล่นวิดีโอการฝึกอบรม: ${videoId}\n\nในระบบจริง: จะเปิด YouTube player หรือ video player เต็มหน้าจอ`);
        }

        // Start quiz
        function startQuiz(quizType) {
            const quizModal = document.getElementById('generic-modal');
            const quizTitle = document.getElementById('modal-title');
            const quizContent = document.getElementById('modal-content');
            
            quizTitle.textContent = 'บททดสอบระหว่างเรียน - VDO Training';
            
            quizContent.innerHTML = `
                <div class="p-6">
                    <div class="mb-6">
                        <h4 class="font-bold text-lg mb-2">แบบทดสอบการฝึกอบรมครู</h4>
                        <p class="text-slate-600">ตอบคำถาม 5 ข้อเพื่อประเมินความเข้าใจ</p>
                    </div>
                    
                    <!-- Question 1 -->
                    <div class="mb-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
                        <p class="font-medium mb-3">1. การสอนแบบใดที่ช่วยพัฒนาทักษะคิดวิเคราะห์ของนักเรียน?</p>
                        <div class="space-y-2">
                            <label class="flex items-center p-2 border rounded cursor-pointer hover:bg-white">
                                <input type="radio" name="q1" value="a" class="mr-3"> ก) การสอนแบบบรรยาย
                            </label>
                            <label class="flex items-center p-2 border rounded cursor-pointer hover:bg-white">
                                <input type="radio" name="q1" value="b" class="mr-3"> ข) การสอนแบบกิจกรรมและการทำเนื่องจากการต่าง
                            </label>
                            <label class="flex items-center p-2 border rounded cursor-pointer hover:bg-white">
                                <input type="radio" name="q1" value="c" class="mr-3"> ค) การสอนผ่าน YouTube เท่านั้น
                            </label>
                        </div>
                    </div>

                    <!-- Question 2 -->
                    <div class="mb-6 p-4 bg-green-50 rounded-xl border border-green-100">
                        <p class="font-medium mb-3">2. สื่อการสอน "เครื่องกลอย่างง่าย" เหมาะสำหรับสอนในระดับชั้นใด?</p>
                        <div class="space-y-2">
                            <label class="flex items-center p-2 border rounded cursor-pointer hover:bg-white">
                                <input type="radio" name="q2" value="a" class="mr-3"> ก) ประถมศึกษาปีที่ 1-3
                            </label>
                            <label class="flex items-center p-2 border rounded cursor-pointer hover:bg-white">
                                <input type="radio" name="q2" value="b" class="mr-3"> ข) ประถมศึกษาปีที่ 4-6
                            </label>
                            <label class="flex items-center p-2 border rounded cursor-pointer hover:bg-white">
                                <input type="radio" name="q2" value="c" class="mr-3"> ค) มัธยมศึกษา
                            </label>
                        </div>
                    </div>

                    <!-- Question 3 -->
                    <div class="mb-6 p-4 bg-yellow-50 rounded-xl border border-yellow-100">
                        <p class="font-medium mb-3">3. การสาธิตการทดลองสามารถช่วยในด้านใด?</p>
                        <div class="space-y-2">
                            <label class="flex items-center p-2 border rounded cursor-pointer hover:bg-white">
                                <input type="radio" name="q3" value="a" class="mr-3"> ก) การสังเกตและการทดลอง
                            </label>
                            <label class="flex items-center p-2 border rounded cursor-pointer hover:bg-white">
                                <input type="radio" name="q3" value="b" class="mr-3"> ข) การจำข้อมูล
                            </label>
                            <label class="flex items-center p-2 border rounded cursor-pointer hover:bg-white">
                                <input type="radio" name="q3" value="c" class="mr-3"> ค) การทำความเข้าใจแนวคิดนามธรรม
                            </label>
                        </div>
                    </div>

                    <!-- Question 4 -->
                    <div class="mb-6 p-4 bg-purple-50 rounded-xl border border-purple-100">
                        <p class="font-medium mb-3">4. แรงเสียดทาน (Friction Force) มีความสำคัญต่อการสอนเรื่องใด?</p>
                        <div class="space-y-2">
                            <label class="flex items-center p-2 border rounded cursor-pointer hover:bg-white">
                                <input type="radio" name="q4" value="a" class="mr-3"> ก) ไฟฟ้า
                            </label>
                            <label class="flex items-center p-2 border rounded cursor-pointer hover:bg-white">
                                <input type="radio" name="q4" value="b" class="mr-3"> ข) การเคลื่อนที่และแรง
                            </label>
                            <label class="flex items-center p-2 border rounded cursor-pointer hover:bg-white">
                                <input type="radio" name="q4" value="c" class="mr-3"> ค) ความร้อน
                            </label>
                        </div>
                    </div>

                    <!-- Question 5 -->
                    <div class="mb-6 p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                        <p class="font-medium mb-3">5. เลนส์ (Geometric Optics) ใช้ประโยชน์ในด้านใด?</p>
                        <div class="space-y-2">
                            <label class="flex items-center p-2 border rounded cursor-pointer hover:bg-white">
                                <input type="radio" name="q5" value="a" class="mr-3"> ก) แว่นตา และการมองเห็น
                            </label>
                            <label class="flex items-center p-2 border rounded cursor-pointer hover:bg-white">
                                <input type="radio" name="q5" value="b" class="mr-3"> ข) เสียง
                            </label>
                            <label class="flex items-center p-2 border rounded cursor-pointer hover:bg-white">
                                <input type="radio" name="q5" value="c" class="mr-3"> ค) แม่เหล็ก
                            </label>
                        </div>
                    </div>

                    <div class="flex gap-3">
                        <button onclick="submitQuiz()" class="flex-1 py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700">
                            <i data-lucide="check" class="w-4 h-4 inline mr-2"></i> ส่งคำตอบ
                        </button>
                        <button onclick="closeModal()" class="flex-1 py-3 bg-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-300">ปิด</button>
                    </div>
                </div>
            `;
            
            lucide.createIcons();
        }

        // Submit quiz
        function submitQuiz() {
            const answers = {
                q1: document.querySelector('input[name="q1"]:checked')?.value,
                q2: document.querySelector('input[name="q2"]:checked')?.value,
                q3: document.querySelector('input[name="q3"]:checked')?.value,
                q4: document.querySelector('input[name="q4"]:checked')?.value,
                q5: document.querySelector('input[name="q5"]:checked')?.value
            };
            
            if (!Object.values(answers).every(a => a)) {
                alert('⚠️ กรุณาตอบคำถามทุกข้อก่อนส่ง');
                return;
            }
            
            // Calculate score
            const correctAnswers = { q1: 'b', q2: 'b', q3: 'a', q4: 'b', q5: 'a' };
            let score = 0;
            for (let q in answers) {
                if (answers[q] === correctAnswers[q]) score++;
            }
            
            const percentage = (score / 5) * 100;
            
            const quizTitle = document.getElementById('modal-title');
            const quizContent = document.getElementById('modal-content');
            
            quizTitle.textContent = 'ผลการทดสอบ';
            
            quizContent.innerHTML = `
                <div class="p-6 text-center">
                    <div class="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span class="text-4xl font-bold text-indigo-600">${percentage.toFixed(0)}%</span>
                    </div>
                    <h4 class="font-bold text-lg mb-2">
                        ${percentage >= 80 ? '✨ ยอดเยี่ยม!' : percentage >= 60 ? '👍 ดี' : '📚 ต้องศึกษาเพิ่มเติม'}
                    </h4>
                    <p class="text-slate-600 mb-6">คุณตอบถูก ${score} ข้อจากทั้งหมด 5 ข้อ</p>
                    
                    <div class="bg-slate-50 rounded-xl p-4 mb-6 text-left text-sm">
                        <p class="font-medium mb-3">บทสรุป:</p>
                        <ul class="space-y-2 text-slate-700">
                            <li>${answers.q1 === correctAnswers.q1 ? '✅' : '❌'} คำถามที่ 1: ${answers.q1 === correctAnswers.q1 ? 'ถูกต้อง' : 'ตัวเลือก ข) ถูกต้อง'}</li>
                            <li>${answers.q2 === correctAnswers.q2 ? '✅' : '❌'} คำถามที่ 2: ${answers.q2 === correctAnswers.q2 ? 'ถูกต้อง' : 'ตัวเลือก ข) ถูกต้อง'}</li>
                            <li>${answers.q3 === correctAnswers.q3 ? '✅' : '❌'} คำถามที่ 3: ${answers.q3 === correctAnswers.q3 ? 'ถูกต้อง' : 'ตัวเลือก ก) ถูกต้อง'}</li>
                            <li>${answers.q4 === correctAnswers.q4 ? '✅' : '❌'} คำถามที่ 4: ${answers.q4 === correctAnswers.q4 ? 'ถูกต้อง' : 'ตัวเลือก ข) ถูกต้อง'}</li>
                            <li>${answers.q5 === correctAnswers.q5 ? '✅' : '❌'} คำถามที่ 5: ${answers.q5 === correctAnswers.q5 ? 'ถูกต้อง' : 'ตัวเลือก ก) ถูกต้อง'}</li>
                        </ul>
                    </div>
                    
                    <button onclick="closeModal()" class="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700">ปิด</button>
                </div>
            `;
        }

        // Open external link
        function openExternalLink(url) {
            alert(`🔗 เปิดลิงค์: ${url}\n\nในระบบจริง: จะเปิด Word Document หรือไฟล์เอกสาร`);
        }

        // ============= VDO Training Functions =============
        
        // Initialize VDO Training UI
        function initializeVdoTrainingUI() {
            renderVdoTypeButtons();
            renderVdoTopics();
        }

        // Render VDO Type Buttons
        function renderVdoTypeButtons() {
            const types = ['math', 'science', 'general'];
            const typeLabels = { math: 'คณิต', science: 'วิทย์', general: 'ทั่วไป' };
            
            types.forEach(type => {
                const btn = document.getElementById(`vdo-type-${type}`);
                if (btn) {
                    if (vdoTrainingState.currentType === type) {
                        btn.className = 'px-4 py-2 rounded-lg text-sm font-medium transition bg-indigo-600 text-white';
                    } else {
                        btn.className = 'px-4 py-2 rounded-lg text-sm font-medium transition hover:bg-slate-200 text-slate-700';
                    }
                }
            });
        }

        // Switch VDO Type
        function switchVdoType(type) {
            vdoTrainingState.currentType = type;
            vdoTrainingState.currentTopic = null;
            vdoTrainingState.currentSubtopic = null;
            renderVdoTypeButtons();
            renderVdoTopics();
        }

        // Render VDO Topics
        function renderVdoTopics() {
            const currentData = vdoTrainingData[vdoTrainingState.currentType];
            const grid = document.getElementById('vdo-subtopics-grid');
            if (!grid) return;
            
            grid.innerHTML = '';
            
            if (!currentData || !currentData.topics) return;
            
            currentData.topics.forEach(topic => {
                const topicCard = document.createElement('div');
                topicCard.className = 'p-4 bg-white rounded-xl border border-slate-200 hover:border-indigo-300 transition';
                topicCard.innerHTML = `
                    <div class="flex items-start justify-between gap-3 mb-3">
                        <div class="flex items-start gap-3 flex-1">
                            <div class="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                <i data-lucide="${topic.icon}" class="w-5 h-5 text-indigo-600"></i>
                            </div>
                            <div class="flex-1">
                                <h4 class="font-bold text-slate-800">${topic.title}</h4>
                                <p class="text-sm text-slate-600 mt-1">${topic.subtopics.length} บท</p>
                            </div>
                        </div>
                    </div>
                    <div class="space-y-2">
                        ${topic.subtopics.map(sub => `
                            <button onclick="selectVdoSubtopic('${sub.id}')" class="w-full text-left p-3 bg-slate-50 hover:bg-slate-100 rounded-lg transition text-sm border border-slate-200">
                                <div class="flex items-start justify-between gap-2">
                                    <div class="flex-1">
                                        <p class="font-medium text-slate-700">${sub.title}</p>
                                        <p class="text-xs text-slate-500 mt-1">⏱️ ${sub.duration}</p>
                                    </div>
                                    <i data-lucide="play" class="w-4 h-4 text-indigo-600 flex-shrink-0 mt-1"></i>
                                </div>
                            </button>
                        `).join('')}
                    </div>
                `;
                grid.appendChild(topicCard);
            });
            
            lucide.createIcons();
        }

        // Select VDO Subtopic
        function selectVdoSubtopic(subtopicId) {
            const currentData = vdoTrainingData[vdoTrainingState.currentType];
            let subtopic = null;
            
            for (let topic of currentData.topics) {
                const found = topic.subtopics.find(s => s.id === subtopicId);
                if (found) {
                    subtopic = found;
                    break;
                }
            }
            
            if (!subtopic) return;
            
            vdoTrainingState.currentSubtopic = subtopicId;
            
            // Update title and description
            document.getElementById('vdo-title').textContent = subtopic.title;
            document.getElementById('vdo-description').textContent = subtopic.description;
            
            // Update video player
            const videoPlayer = document.getElementById('video-player');
            videoPlayer.innerHTML = `
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="${subtopic.videoUrl}?autoplay=0" 
                    title="${subtopic.title}"
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            `;
            
            // Show play button
            document.getElementById('mark-watched-btn').style.display = 'none';
        }

        // Start VDO Lesson
        function startVdoLesson() {
            if (!vdoTrainingState.currentSubtopic) {
                alert('⚠️ กรุณาเลือกวิดีโอก่อน');
                return;
            }
            
            // Simulate playing video
            alert('▶️ เล่นวิดีโอ: ' + (vdoTrainingData.topics.find(t => t.id === vdoTrainingState.currentTopic)?.subtopics.find(s => s.id === vdoTrainingState.currentSubtopic)?.title || 'Unknown'));
            
            // Show mark as watched button
            setTimeout(() => {
                document.getElementById('mark-watched-btn').style.display = 'block';
            }, 2000);
        }

        // Mark Video As Watched
        function markAsWatched() {
            if (!vdoTrainingState.currentSubtopic) return;
            
            // Add to watched videos
            if (!vdoTrainingState.watchedVideos.includes(vdoTrainingState.currentSubtopic)) {
                vdoTrainingState.watchedVideos.push(vdoTrainingState.currentSubtopic);
            }
            
            // Force quiz
            forceQuiz();
        }

        // Force Quiz After Watching
        function forceQuiz() {
            const quizModal = document.getElementById('generic-modal');
            if (!quizModal) return;
            
            const quizTitle = document.getElementById('modal-title');
            const quizContent = document.getElementById('modal-content');
            
            quizTitle.textContent = 'บททดสอบหลังการชมวิดีโอ';
            
            quizContent.innerHTML = `
                <div class="p-6">
                    <div class="mb-6">
                        <h4 class="font-bold text-lg mb-2">แบบทดสอบการเข้าใจเนื้อหา</h4>
                        <p class="text-slate-600">ตอบคำถาม 3 ข้อเพื่อยืนยันว่าคุณเข้าใจเนื้อหา</p>
                    </div>
                    
                    <!-- Question 1 -->
                    <div class="mb-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
                        <p class="font-medium mb-3">1. ในวิดีโอนี้ มีเนื้อหาหลักเรื่องใดบ้าง?</p>
                        <div class="space-y-2">
                            <label class="flex items-center p-2 border rounded cursor-pointer hover:bg-white">
                                <input type="radio" name="q1" value="a" class="mr-3"> ก) เนื้อหาที่อธิบายไว้ในวิดีโอ
                            </label>
                            <label class="flex items-center p-2 border rounded cursor-pointer hover:bg-white">
                                <input type="radio" name="q1" value="b" class="mr-3"> ข) ไม่เข้าใจเนื้อหา
                            </label>
                        </div>
                    </div>

                    <!-- Question 2 -->
                    <div class="mb-6 p-4 bg-green-50 rounded-xl border border-green-100">
                        <p class="font-medium mb-3">2. วิดีโอนี้มีประโยชน์สำหรับการสอนของคุณหรือไม่?</p>
                        <div class="space-y-2">
                            <label class="flex items-center p-2 border rounded cursor-pointer hover:bg-white">
                                <input type="radio" name="q2" value="a" class="mr-3"> ก) มีประโยชน์มาก
                            </label>
                            <label class="flex items-center p-2 border rounded cursor-pointer hover:bg-white">
                                <input type="radio" name="q2" value="b" class="mr-3"> ข) มีประโยชน์บ้าง
                            </label>
                            <label class="flex items-center p-2 border rounded cursor-pointer hover:bg-white">
                                <input type="radio" name="q2" value="c" class="mr-3"> ค) ไม่มีประโยชน์
                            </label>
                        </div>
                    </div>

                    <!-- Question 3 -->
                    <div class="mb-6 p-4 bg-yellow-50 rounded-xl border border-yellow-100">
                        <p class="font-medium mb-3">3. คุณต้องการศึกษาเนื้อหาที่เกี่ยวข้องเพิ่มเติมหรือไม่?</p>
                        <div class="space-y-2">
                            <label class="flex items-center p-2 border rounded cursor-pointer hover:bg-white">
                                <input type="radio" name="q3" value="a" class="mr-3"> ก) ใช่
                            </label>
                            <label class="flex items-center p-2 border rounded cursor-pointer hover:bg-white">
                                <input type="radio" name="q3" value="b" class="mr-3"> ข) ไม่
                            </label>
                        </div>
                    </div>

                    <div class="flex gap-3">
                        <button onclick="submitForceQuiz()" class="flex-1 py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700">
                            <i data-lucide="check" class="w-4 h-4 inline mr-2"></i> ส่งคำตอบ
                        </button>
                        <button onclick="skipQuiz()" class="flex-1 py-3 bg-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-300">ข้าม</button>
                    </div>
                </div>
            `;
            
            // Show modal
            quizModal.classList.remove('hide');
            quizModal.querySelector('.modal-slide-up')?.classList.add('modal-slide-up');
            
            lucide.createIcons();
        }

        // Submit Force Quiz
        function submitForceQuiz() {
            const answers = {
                q1: document.querySelector('input[name="q1"]:checked')?.value,
                q2: document.querySelector('input[name="q2"]:checked')?.value,
                q3: document.querySelector('input[name="q3"]:checked')?.value
            };
            
            if (!Object.values(answers).every(a => a)) {
                alert('⚠️ กรุณาตอบคำถามทุกข้อ');
                return;
            }
            
            // Mark quiz as completed
            if (vdoTrainingState.currentSubtopic && !vdoTrainingState.completedQuizzes.includes(vdoTrainingState.currentSubtopic)) {
                vdoTrainingState.completedQuizzes.push(vdoTrainingState.currentSubtopic);
            }
            
            // Show results
            showQuizResults();
        }

        // Skip Quiz
        function skipQuiz() {
            closeModal();
        }

        // Show Quiz Results
        function showQuizResults() {
            const quizModal = document.getElementById('generic-modal');
            const quizTitle = document.getElementById('modal-title');
            const quizContent = document.getElementById('modal-content');
            
            quizTitle.textContent = 'ผลการทดสอบ';
            
            quizContent.innerHTML = `
                <div class="p-6 text-center">
                    <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span class="text-3xl">✅</span>
                    </div>
                    <h4 class="font-bold text-lg mb-2">ยอดเยี่ยม!</h4>
                    <p class="text-slate-600 mb-6">คุณได้ส่วนจากการเรียนเรียบร้อยแล้ว</p>
                    
                    <div class="bg-slate-50 rounded-xl p-4 mb-6 text-left text-sm">
                        <p class="font-medium mb-3">สรุปการเรียน:</p>
                        <ul class="space-y-2 text-slate-700">
                            <li>✅ ดูวิดีโอเรียบร้อย</li>
                            <li>✅ ทำแบบทดสอบเรียบร้อย</li>
                            <li>✅ บันทึกความสำเร็จ</li>
                        </ul>
                    </div>
                    
                    <p class="text-sm text-slate-600 mb-4">
                        วิดีโอที่ดูแล้ว: ${vdoTrainingState.watchedVideos.length}/${getTotalSubtopics()}
                    </p>
                    
                    <button onclick="closeModal()" class="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700">ปิด</button>
                </div>
            `;
            
            lucide.createIcons();
        }

        // Get Total Subtopics
        function getTotalSubtopics() {
            return vdoTrainingData.topics.reduce((sum, topic) => sum + topic.subtopics.length, 0);
        }

        // Switch to Teacher Training View
        function switchToTeacherTraining() {
            // Hide all branch role views
            document.querySelectorAll('.branch-role-view').forEach(el => el.classList.add('hide'));
            
            // Show teacher training view
            const view = document.getElementById('branch-teacher-training-view');
            if (view) {
                view.classList.remove('hide');
                view.classList.add('fade-in');
            }
            
            // Re-initialize UI
            setTimeout(() => {
                initializeVdoTrainingUI();
                lucide.createIcons();
            }, 100);
        }

        // ============= Carousel Functions =============
        function nextCarousel() {
            currentCarouselSlide = (currentCarouselSlide + 1) % carouselSlides.length;
            updateCarousel();
        }

        function setCarouselSlide(index) {
            currentCarouselSlide = index;
            updateCarousel();
        }

        function updateCarousel() {
            const slide = carouselSlides[currentCarouselSlide];
            document.getElementById('carousel-title').textContent = slide.title;
            document.getElementById('carousel-description').textContent = slide.description;

            // Update indicators
            for (let i = 0; i < carouselSlides.length; i++) {
                const dot = document.getElementById(`carousel-dot-${i}`);
                if (dot) {
                    if (i === currentCarouselSlide) {
                        dot.classList.remove('bg-indigo-300');
                        dot.classList.add('bg-white');
                    } else {
                        dot.classList.remove('bg-white');
                        dot.classList.add('bg-indigo-300');
                    }
                }
            }

            // Auto-rotate carousel every 5 seconds
            clearTimeout(carouselTimer);
            carouselTimer = setTimeout(nextCarousel, 5000);
        }

        let carouselTimer = null;

        // ============= Sidebar Collapse Functions =============
        function toggleSidebarCollapse(event) {
            event.stopPropagation(); // Prevent triggering parent click
            const sidebar = document.getElementById('sidebar');
            sidebar.classList.toggle('collapsed');
            localStorage.setItem('sidebar-collapsed', sidebar.classList.contains('collapsed'));
            
            // Rotate the chevron icon
            const icon = event.target.closest('[data-lucide]');
            if (icon) {
                icon.style.transform = sidebar.classList.contains('collapsed') ? 'rotate(180deg)' : 'rotate(0deg)';
            }
            
            // Update icons after collapse
            setTimeout(() => lucide.createIcons(), 100);
        }

        // Restore sidebar state on load
        function restoreSidebarState() {
            const sidebar = document.getElementById('sidebar');
            const isCollapsed = localStorage.getItem('sidebar-collapsed') === 'true';
            if (isCollapsed) {
                sidebar.classList.add('collapsed');
            }
        }

        // Go to Highest Role Dashboard
        function goToHighestRoleDashboard() {
            // Determine highest role (Super Admin > Master Teacher > Admin > Teacher > Executive > Parent > others)
            const roleHierarchy = ['hq-super-admin', 'hq-master-teacher', 'hq-hr', 'hq-accounting', 'branch-admin', 'branch-teacher', 'branch-executive', 'parent'];
            
            let highestRole = currentRole;
            for (let role of roleHierarchy) {
                if (roleConfig.hasOwnProperty(role)) {
                    highestRole = role;
                    break;
                }
            }
            
            // Switch to highest role
            switchRole(highestRole);
            
            // Navigate to its dashboard by switching main role
            if (highestRole.startsWith('hq-')) {
                document.getElementById('role-switcher-header').value = 'hq';
                const hqRole = highestRole.replace('hq-', '').replace('-', '-');
                if (highestRole === 'hq-super-admin') switchHqRole('super-admin');
                else if (highestRole === 'hq-master-teacher') switchHqRole('master-teacher');
                else if (highestRole === 'hq-hr') switchHqRole('hr');
                else if (highestRole === 'hq-accounting') switchHqRole('accounting');
            } else if (highestRole.startsWith('branch-')) {
                document.getElementById('role-switcher-header').value = 'branch';
                if (highestRole === 'branch-executive') switchBranchRole('executive');
                else if (highestRole === 'branch-admin') switchBranchRole('admin');
                else if (highestRole === 'branch-teacher') switchBranchRole('teacher');
            } else if (highestRole === 'parent') {
                document.getElementById('role-switcher-header').value = 'parent';
                switchRole('parent');
            }
        }

        // ============= Permission View Management =============
        let permissionViewMode = 'all'; // Default to showing all

        // Set Permission View Mode
        function setPermissionView(mode) {
            permissionViewMode = mode;
            updatePermissionButtons();
            filterPermissionDisplay();
        }

        // Update Permission Display Buttons
        function updatePermissionButtons() {
            const buttons = ['master', 'teacher', 'all'];
            buttons.forEach(btn => {
                const el = document.getElementById(`perm-btn-${btn}`);
                if (el) {
                    if (btn === permissionViewMode) {
                        el.classList.remove('bg-slate-50', 'border-slate-200', 'text-slate-600');
                        el.classList.add('bg-indigo-100', 'border-indigo-300', 'text-indigo-700', 'font-bold');
                    } else {
                        el.classList.remove('bg-indigo-100', 'border-indigo-300', 'text-indigo-700', 'font-bold');
                        el.classList.add('bg-slate-50', 'border-slate-200', 'text-slate-600');
                    }
                }
            });
        }

        // Filter After School Content Display
        function filterPermissionDisplay() {
            const userPerms = userPermissions.afterSchool || [];
            const hasMaster = userPerms.includes('master');
            const hasTeacher = userPerms.includes('teacher');
            
            const partnerCard = document.querySelector('[onclick="openModal(\'after-school-partners\')"]');
            const scheduleCard = document.querySelector('[onclick="openModal(\'after-school-schedule\')"]');
            const curriculumCard = document.querySelector('[onclick="openModal(\'after-school-curriculum\')"]');
            
            if (permissionViewMode === 'master') {
                if (partnerCard) partnerCard.style.display = hasMaster ? '' : 'none';
                if (scheduleCard) scheduleCard.style.display = hasMaster ? '' : 'none';
                if (curriculumCard) curriculumCard.style.display = hasMaster ? '' : 'none';
            } else if (permissionViewMode === 'teacher') {
                if (partnerCard) partnerCard.style.display = hasTeacher ? '' : 'none';
                if (scheduleCard) scheduleCard.style.display = hasTeacher ? '' : 'none';
                if (curriculumCard) curriculumCard.style.display = hasTeacher ? '' : 'none';
            } else {
                if (partnerCard) partnerCard.style.display = '';
                if (scheduleCard) scheduleCard.style.display = '';
                if (curriculumCard) curriculumCard.style.display = '';
            }
        }

        // Switch to Role View
        function switchToRoleView(role) {
            if (role === 'master-teacher') switchHqRole('master-teacher');
            else if (role === 'hr') switchHqRole('hr');
            else if (role === 'accounting') switchHqRole('accounting');
        }

        // Function to update menu items in sidebar for collapsed state
        function updateSidebarMenuCollapsed(role) {
            const menuContainer = document.getElementById('sidebar-menu');
            if (!menuContainer) return;
            
            menuContainer.innerHTML = '';
            const config = roleConfig[role];
            if (!config || !config.menu) return;
            
            config.menu.forEach((item) => {
                const link = document.createElement('a');
                link.onclick = item.action;
                link.className = 'p-3 rounded-lg hover:bg-indigo-800 transition flex items-center justify-center relative group';
                link.title = item.label;
                
                const icon = document.createElement('i');
                icon.setAttribute('data-lucide', item.icon);
                icon.className = 'w-5 h-5';
                
                link.appendChild(icon);
                
                // Tooltip for collapsed menu
                const tooltip = document.createElement('span');
                tooltip.className = 'absolute left-full ml-2 bg-slate-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap hidden group-hover:block z-50';
                tooltip.textContent = item.label;
                link.appendChild(tooltip);
                
                menuContainer.appendChild(link);
            });
        }
    </script>