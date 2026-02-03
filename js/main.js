const translations = {
    en: {
        'title': 'Land Chat - Premium Messaging Experience',
        'nav_home': 'Home', 'nav_features': 'Features', 'nav_download': 'Download', 'nav_privacy': 'Privacy',
        'hero_h1': 'Fast. Secure. Fun.',
        'hero_p': 'Land Chat is the most secure messaging app, designed for a unique communication experience with military-grade encryption.',
        'btn_download': 'Download Land Chat',
        'features_title': 'Core Features',
        'feat_security_h3': 'Military Encryption', 'feat_security_p': 'Maximum protection for your messages using advanced encryption in Land Chat.',
        'feat_calls_h3': 'HD Calls', 'feat_calls_p': 'Crystal clear voice and video calls even on slow networks.',
        'feat_rooms_h3': 'Rooms & Communities', 'feat_rooms_p': 'Join thousands of public rooms or create your own community.',
        'feat_gifts_h3': 'Gifts & Rewards', 'feat_gifts_p': 'Express yourself with premium virtual gifts and rewards.',
        'feat_voice_h3': 'Voice Messages', 'feat_voice_p': 'Communicate faster with clear voice notes and playback control.',
        'feat_levels_h3': 'Level System', 'feat_levels_p': 'Rank up and earn rare badges to be part of the elite.',
        'feat_admin_h3': 'Pro Management', 'feat_admin_p': 'Powerful tools for moderators to manage rooms efficiently.',
        'feat_files_h3': 'File Sharing', 'feat_files_p': 'Send high-quality files and photos at lightning speed.',
        'data_handling_h2': 'Privacy Commitment', 'data_handling_p': 'Your privacy is our top priority in Land Chat. We store minimal data.',
        'data_deletion_h3': 'Full Control', 'data_deletion_p': 'Delete your account and all associated data permanently from settings.',
        'footer_copy': '© 2026 Land Chat. All rights reserved.'
    },
    ar: {
        'title': 'لاند تشات - تجربة مراسلة متميزة',
        'nav_home': 'الرئيسية', 'nav_features': 'المميزات', 'nav_download': 'التحميل', 'nav_privacy': 'الخصوصية',
        'hero_h1': 'سريع. آمن. ممتع.',
        'hero_p': 'لاند تشات هو تطبيق المراسلة الأكثر أماناً، مصمم ليمنحك تجربة تواصل فريدة مع تشفير عسكري ومميزات حصرية.',
        'btn_download': 'تحميل لاند تشات',
        'features_title': 'كل ما تحتاجه في تطبيق واحد',
        'feat_security_h3': 'تشفير عسكري', 'feat_security_p': 'حماية قصوى لرسائلك في لاند تشات باستخدام أحدث تقنيات التشفير.',
        'feat_calls_h3': 'مكالمات عالية الدقة', 'feat_calls_p': 'مكالمات صوتية ومرئية فائقة الجودة تعمل حتى في ظروف الإنترنت الضعيفة.',
        'feat_rooms_h3': 'غرف وتجمعات', 'feat_rooms_p': 'انضم إلى آلاف الغرف العامة أو أنشئ غرفتك الخاصة في لاند تشات.',
        'feat_gifts_h3': 'هدايا وجوائز', 'feat_gifts_p': 'عبر عن مشاعرك بإرسال هدايا افتراضية مميزة واجمع النقاط.',
        'feat_voice_h3': 'رسائل صوتية', 'feat_voice_p': 'تواصل أسرع عبر الرسائل الصوتية الواضحة مع ميزة تسريع التشغيل.',
        'feat_levels_h3': 'نظام مستويات', 'feat_levels_p': 'احصل على أوسمة نادرة وارفع رتبتك لتكون من النخبة في لاند تشات.',
        'feat_admin_h3': 'إدارة احترافية', 'feat_admin_p': 'أدوات قوية للمشرفين لإدارة الغرف وحظر المخالفين بكفاءة عالية.',
        'feat_files_h3': 'مشاركة الملفات', 'feat_files_p': 'أرسل الصور والملفات بأحجام كبيرة وبسرعة فائقة دون فقدان الجودة.',
        'data_handling_h2': 'التزامنا بالخصوصية', 'data_handling_p': 'خصوصيتك هي أولويتنا المطلقة في لاند تشات؛ نحن نحمي بياناتك دائماً.',
        'data_deletion_h3': 'التحكم الكامل', 'data_deletion_p': 'يمكنك حذف حسابك وكافة سجلاتك نهائياً بضغطة زر واحدة من داخل التطبيق.',
        'footer_copy': '© 2026 لاند تشات - Land Chat. جميع الحقوق محفوظة.'
    }
};

// كود تحميل الـ APK الذكي
async function downloadLatestAPK() {
    const repoOwner = "RubaAbuEed";
    const repoName = "RubaAbuEed.github.io";
    try {
        const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/`);
        const files = await response.json();
        const apkFile = files.find(file => file.name.endsWith('.apk'));
        if (apkFile) { window.location.href = apkFile.download_url; }
        else { alert("عذراً، لم يتم العثور على ملف APK حالياً."); }
    } catch (e) { console.error("Error fetching APK:", e); }
}

function switchLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang][key]) { el.textContent = translations[lang][key]; }
    });
    localStorage.setItem('preferredLang', lang);
    const btn = document.getElementById('langToggle');
    if (btn) btn.textContent = lang === 'ar' ? 'English' : 'العربية';
}

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('langToggle');
    if (btn) btn.addEventListener('click', () => {
        const nextLang = document.documentElement.lang === 'ar' ? 'en' : 'ar';
        switchLanguage(nextLang);
    });
    switchLanguage(localStorage.getItem('preferredLang') || 'ar');
    
    // ربط أزرار التحميل بالكود الذكي
    document.querySelectorAll('a[href*=".apk"], .btn-download-smart').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            downloadLatestAPK();
        });
    });
});
