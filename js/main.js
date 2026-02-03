const translations = {
    en: {
        // General & Nav
        'title': 'Land Chat - Premium Messaging Experience',
        'nav_home': 'Home',
        'nav_features': 'Features',
        'nav_download': 'Download',
        'nav_privacy': 'Privacy',

        // Hero Section
        'hero_h1': 'Fast. Secure. Fun.',
        'hero_p': 'Land Chat is the most secure and beautiful messaging app, designed for a unique communication experience with military-grade encryption.',
        'btn_download': 'Direct Download',

        // Features Section
        'features_title': 'Everything You Need in One App',
        'feat_security_h3': 'Military Encryption',
        'feat_security_p': 'Maximum protection for your messages using advanced AES-256 and RSA layers in Land Chat.',
        'feat_calls_h3': 'HD Calls',
        'feat_calls_p': 'High-quality crystal clear voice and video calls, even on slow networks.',
        'feat_rooms_h3': 'Rooms & Communities',
        'feat_rooms_p': 'Join thousands of public rooms or create your own to manage your community.',
        'feat_gifts_h3': 'Gifts & Rewards',
        'feat_gifts_p': 'Express yourself with premium virtual gifts and collect points to level up.',
        'feat_voice_h3': 'Voice Messages',
        'feat_voice_p': 'Communicate faster with clear voice notes and playback speed options.',
        'feat_levels_h3': 'Level System',
        'feat_levels_p': 'Earn rare badges and rank up to be part of the Land Chat elite.',
        'feat_admin_h3': 'Pro Management',
        'feat_admin_p': 'Powerful tools for moderators to manage rooms and ban violators efficiently.',
        'feat_files_h3': 'File Sharing',
        'feat_files_p': 'Send high-quality photos and files at lightning speed without compression.',

        // Data & Privacy Section
        'data_handling_h2': 'Privacy Commitment',
        'data_handling_p': 'We only collect essential data to operate your account. Your privacy is our top priority in Land Chat.',
        'data_deletion_h3': 'Full Control',
        'data_deletion_p': 'Delete your account and all associated logs permanently with a single tap in the app.',

        // Footer
        'footer_copy': '© 2026 Land Chat. All rights reserved.'
    },
    ar: {
        // العام والقائمة
        'title': 'لاند تشات - تجربة مراسلة متميزة',
        'nav_home': 'الرئيسية',
        'nav_features': 'المميزات',
        'nav_download': 'التحميل',
        'nav_privacy': 'الخصوصية',

        // قسم الهيرو
        'hero_h1': 'سريع. آمن. ممتع.',
        'hero_p': 'لاند تشات هو تطبيق المراسلة الأكثر أماناً وجمالاً، مصمم ليمنحك تجربة تواصل فريدة مع تشفير عسكري ومميزات حصرية.',
        'btn_download': 'التحميل المباشر',

        // قسم المميزات
        'features_title': 'كل ما تحتاجه في تطبيق واحد',
        'feat_security_h3': 'تشفير عسكري',
        'feat_security_p': 'حماية قصوى لرسائلك في لاند تشات باستخدام طبقات تشفير AES-256 و RSA المتقدمة.',
        'feat_calls_h3': 'مكالمات عالية الدقة',
        'feat_calls_p': 'مكالمات صوتية ومرئية فائقة الجودة تعمل حتى في ظروف الإنترنت الضعيفة.',
        'feat_rooms_h3': 'غرف وتجمعات',
        'feat_rooms_p': 'انضم إلى آلاف الغرف العامة أو أنشئ غرفتك الخاصة لإدارة مجتمعك في لاند تشات.',
        'feat_gifts_h3': 'هدايا وجوائز',
        'feat_gifts_p': 'عبر عن مشاعرك بإرسال هدايا افتراضية مميزة واجمع النقاط لرفع مستواك.',
        'feat_voice_h3': 'رسائل صوتية',
        'feat_voice_p': 'تواصل أسرع عبر الرسائل الصوتية الواضحة مع ميزة تسريع التشغيل.',
        'feat_levels_h3': 'نظام مستويات',
        'feat_levels_p': 'احصل على أوسمة نادرة وارفع رتبتك لتكون من النخبة في عالم لاند تشات.',
        'feat_admin_h3': 'إدارة احترافية',
        'feat_admin_p': 'أدوات قوية للمشرفين لإدارة الغرف وحظر المخالفين بكفاءة عالية.',
        'feat_files_h3': 'مشاركة الملفات',
        'feat_files_p': 'أرسل الصور والملفات بأحجام كبيرة وبسرعة فائقة دون فقدان الجودة.',

        // قسم الخصوصية
        'data_handling_h2': 'التزامنا بالخصوصية',
        'data_handling_p': 'نحن نجمع فقط البيانات الضرورية لتشغيل حسابك. خصوصيتك هي أولويتنا المطلقة في لاند تشات.',
        'data_deletion_h3': 'التحكم الكامل',
        'data_deletion_p': 'يمكنك حذف حسابك وكافة سجلاتك نهائياً بضغطة زر واحدة من داخل التطبيق.',

        // الفوتر
        'footer_copy': '© 2026 لاند تشات - Land Chat. جميع الحقوق محفوظة.'
    }
};

function switchLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    localStorage.setItem('preferredLang', lang);
    updateToggleButton(lang);
}

function updateToggleButton(lang) {
    const btn = document.getElementById('langToggle');
    if (btn) {
        btn.textContent = lang === 'ar' ? 'English' : 'العربية';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('langToggle');
    if (btn) {
        btn.addEventListener('click', () => {
            const currentLang = document.documentElement.lang;
            const nextLang = currentLang === 'ar' ? 'en' : 'ar';
            switchLanguage(nextLang);
        });
    }

    const savedLang = localStorage.getItem('preferredLang') || 'ar';
    switchLanguage(savedLang);

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
