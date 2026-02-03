/* Land Chat - Official Script 2026 */
const translations = {
    en: {
        // Navigation
        'nav_home': 'Home',
        'nav_download': 'Download',
        'nav_privacy': 'Privacy',
        'nav_terms': 'Terms',
        'footer_copy': '© 2026 Land Chat. All rights reserved.',
        
        // Hero Section
        'title': 'Land Chat - Premium Messaging Experience',
        'hero_h1': 'Fast. Secure. Fun.',
        'hero_p': 'Land Chat is the most secure messaging app, designed for a unique communication experience with military-grade encryption.',
        'btn_download': 'Download Land Chat Now',

        // Features Section
        'features_title': 'Core Features',
        'feat_security_h3': 'Military Encryption',
        'feat_security_p': 'Maximum protection for your messages using AES-256 advanced encryption to ensure total privacy.',
        'feat_calls_h3': 'HD Calls',
        'feat_calls_p': 'Crystal clear voice and video calls that work efficiently even on slow internet conditions.',
        'feat_rooms_h3': 'Rooms & Communities',
        'feat_rooms_p': 'Create your own community or join thousands of public rooms in Land Chat to connect with others.',
        'feat_gifts_h3': 'Gifts & Rewards',
        'feat_gifts_p': 'Express your feelings by sending premium virtual gifts and collect points to level up.',
        'feat_voice_h3': 'Voice Messages',
        'feat_voice_p': 'Communicate faster with clear voice notes and playback speed control for long messages.',
        'feat_levels_h3': 'Level System',
        'feat_levels_p': 'Earn rare badges and raise your rank to be among the elite users of Land Chat.',
        'feat_admin_h3': 'Pro Management',
        'feat_admin_p': 'Powerful tools for moderators to manage rooms, ban violators, and protect the community.',
        'feat_files_h3': 'File Sharing',
        'feat_files_p': 'Send large photos and files at lightning speed without losing original quality.',

        // Privacy & Data
        'data_handling_h2': 'Privacy & Data Protection',
        'data_handling_p': 'At Land Chat, we are committed to protecting your privacy and only collect essential data to run the service.',
        'data_deletion_h3': 'Account Deletion Request',
        'data_deletion_p': 'You can permanently delete your account and all associated data with one click from the app settings.',

        // Download Page
        'd_h1': 'Download Land Chat',
        'd_p': 'Get the latest version of Land Chat directly as an APK file.',
        'd_btn': 'Direct Download (APK)',
        'd_secure': '100% Secure and Encrypted Version',

        // Privacy Policy (Full 10 Items)
        'p_h1': 'Full Privacy Policy',
        'p_intro': 'Land Chat is committed to protecting your privacy. These ten points explain our strict policy.',
        'p_item1_h': '1. Introduction', 'p_item1_p': 'Service provided for secure messaging as described.',
        'p_item2_h': '2. Info Collection', 'p_item2_p': 'We collect phone numbers and nicknames for account setup.',
        'p_item3_h': '3. Log Data', 'p_item3_p': 'Technical logs for error fixing and stability.',
        'p_item4_h': '4. Third-Party', 'p_item4_p': 'Use of Google and Firebase for app performance.',
        'p_item5_h': '5. Cookies', 'p_item5_p': 'Minimal use of identifiers for session management.',
        'p_item6_h': '6. Encryption', 'p_item6_p': 'End-to-End encryption for all your private chats.',
        'p_item7_h': '7. Providers', 'p_item7_p': 'Trusted partners only for infrastructure.',
        'p_item8_h': '8. Children', 'p_item8_p': 'Strictly for users above 13 years old.',
        'p_item9_h': '9. Deletion', 'p_item9_p': 'Your right to wipe all data permanently.',
        'p_item10_h': '10. Updates', 'p_item10_p': 'Policy may change to improve protection.',

        // Terms of Service (Full 7 Items)
        't_h1': 'Terms of Service',
        't_intro': 'By using Land Chat, you agree to these terms. Read carefully.',
        't_item1_h': '1. Acceptance', 't_item1_p': 'Terms apply automatically upon app usage.',
        't_item2_h': '2. Fees', 't_item2_p': 'Service is free, any future fees will be notified.',
        't_item3_h': '3. Security', 't_item3_p': 'User is responsible for device security.',
        't_item4_h': '4. External Services', 't_item4_p': 'Compliance with Google Play terms.',
        't_item5_h': '5. Liability', 't_item5_p': 'Not liable for connection issues.',
        't_item6_h': '6. Termination', 't_item6_p': 'Right to stop service for violators.',
        't_item7_h': '7. Changes', 't_item7_p': 'Terms updated periodically for legal compliance.'
    },
    ar: {
        // التنقل
        'nav_home': 'الرئيسية',
        'nav_download': 'التحميل',
        'nav_privacy': 'الخصوصية',
        'nav_terms': 'الشروط',
        'footer_copy': '© 2026 لاند تشات - Land Chat. جميع الحقوق محفوظة.',

        // قسم الهيرو
        'title': 'لاند تشات - تجربة مراسلة متميزة',
        'hero_h1': 'سريع. آمن. ممتع.',
        'hero_p': 'يقدم لاند تشات تجربة مراسلة خاصة مثالية مع تشفير تام ومميزات متميزة لضمان خصوصيتك.',
        'btn_download': 'تحميل لاند تشات الآن',

        // المميزات
        'features_title': 'المميزات الأساسية',
        'feat_security_h3': 'تشفير عسكري',
        'feat_security_p': 'حماية قصوى لرسائلك في لاند تشات باستخدام AES-256 لضمان الخصوصية التامة.',
        'feat_calls_h3': 'مكالمات HD',
        'feat_calls_p': 'مكالمات صوتية ومرئية فائقة الجودة تعمل بكفاءة عالية حتى في ظروف الإنترنت الضعيفة.',
        'feat_rooms_h3': 'غرف وتجمعات',
        'feat_rooms_p': 'أنشئ مجتمعك الخاص أو انضم لآلاف الغرف العامة في لاند تشات للتواصل مع الآخرين.',
        'feat_gifts_h3': 'هدايا وجوائز',
        'feat_gifts_p': 'عبر عن مشاعرك بإرسال هدايا افتراضية مميزة واجمع النقاط لرفع مستوى حسابك.',
        'feat_voice_h3': 'رسائل صوتية',
        'feat_voice_p': 'تواصل أسرع عبر الرسائل الصوتية الواضحة مع ميزة تسريع التشغيل للرسائل الطويلة.',
        'feat_levels_h3': 'نظام مستويات',
        'feat_levels_p': 'احصل على أوسمة نادرة وارفع رتبتك في التطبيق لتكون من نخبة مستخدمي لاند تشات.',
        'feat_admin_h3': 'إدارة احترافية',
        'feat_admin_p': 'أدوات قوية للمشرفين لإدارة الغرف وحظر المخالفين وحماية المجتمع من الرسائل المزعجة.',
        'feat_files_h3': 'مشاركة الملفات',
        'feat_files_p': 'أرسل الصور والملفات بأحجام كبيرة وبسرعة فائقة دون فقدان الجودة الأصلية للملفات.',

        // الخصوصية
        'data_handling_h2': 'الخصوصية وحماية البيانات',
        'data_handling_p': 'نحن في لاند تشات نلتزم بحماية خصوصيتك ولا نجمع إلا الضروري من البيانات لتشغيل الخدمة.',
        'data_deletion_h3': 'طلب حذف الحساب',
        'data_deletion_p': 'يمكنك حذف حسابك وكافة البيانات المرتبطة به نهائياً بضغطة زر واحدة من داخل إعدادات التطبيق.',

        // صفحة التحميل
        'd_h1': 'تحميل لاند تشات',
        'd_p': 'احصل على أحدث نسخة من تطبيق لاند تشات مباشرة بصيغة APK.',
        'd_btn': 'التحميل المباشر (APK)',
        'd_secure': 'إصدار آمن ومشفر 100%',

        // سياسة الخصوصية
        'p_h1': 'سياسة الخصوصية الشاملة لـ لاند تشات',
        'p_intro': 'تلتزم منصة لاند تشات بحماية خصوصيتك وتوفير بيئة آمنة للتواصل. توضح هذه البنود العشرة سياستنا الصارمة.',
        'p_item1_h': '1. مقدمة حول الخدمة', 'p_item1_p': 'يتم تقديم خدمة لاند تشات لغرض المراسلة الآمنة. باستخدامك للتطبيق، فإنك توافق على سياساتنا.',
        'p_item2_h': '2. جمع واستخدام المعلومات', 'p_item2_p': 'قد نطلب تزويدنا بمعلومات مثل رقم الهاتف والاسم المستعار وصورة الملف الشخصي لتسهيل التواصل.',
        'p_item3_h': '3. بيانات السجل (Log Data)', 'p_item3_p': 'في حال حدوث خطأ، نجمع بيانات تقنية مثل عنوان الـ IP ونوع الجهاز لإصلاح المشكلة.',
        'p_item4_h': '4. خدمات الطرف الثالث', 'p_item4_p': 'يستخدم التطبيق خدمات Google Play و Firebase التي قد تجمع معلومات تعريفية.',
        'p_item5_h': '5. ملفات تعريف الارتباط (Cookies)', 'p_item5_p': 'لا نستخدم الكوكيز مباشرة، ولكن قد تستخدمها مكتبات الطرف الثالث ولديكم خيار رفضها.',
        'p_item6_h': '6. تشفير الرسائل', 'p_item6_p': 'نستخدم تشفير End-to-End. لا يمكن لأي طرف، بما في ذلك لاند تشات، الوصول لمحتوى محادثاتك.',
        'p_item7_h': '7. مقدمو الخدمة', 'p_item7_p': 'قد نستعين بشركات خارجية لتسهيل خدمتنا؛ وصولهم للبيانات محدود جداً ولأغراض تقنية فقط.',
        'p_item8_h': '8. خصوصية الأطفال', 'p_item8_p': 'خدماتنا لا تخاطب من هم دون 13 عاماً، ونحذف أي بيانات تتعلق بهم فور اكتشافها.',
        'p_item9_h': '9. الحق في حذف البيانات نهائياً', 'p_item9_p': 'يمكنك حذف حسابك وكافة الرسائل والملفات نهائياً من داخل إعدادات التطبيق بضغطة زر.',
        'p_item10_h': '10. التغييرات على هذه السياسة', 'p_item10_p': 'قد نقوم بتحديث السياسة دورياً، وننصحك بمراجعة هذه الصفحة بشكل مستمر.',

        // شروط الاستخدام
        't_h1': 'شروط وأحكام استخدام لاند تشات',
        't_intro': 'باستخدامك لـ لاند تشات، فإنك توافق تلقائياً على الشروط التالية. يرجى قراءتها بعناية.',
        't_item1_h': '1. شروط القبول', 't_item1_p': 'بمجرد تنزيل التطبيق، تنطبق هذه الشروط عليك. لا يُسمح لك بنسخ أو تعديل أي جزء من التطبيق.',
        't_item2_h': '2. التعديلات والرسوم', 't_item2_p': 'نحتفظ بالحق في إجراء تغييرات أو فرض رسوم مستقبلاً. لن نفرض أي رسوم دون توضيح الغرض مسبقاً.',
        't_item3_h': '3. خصوصية وأمان البيانات', 't_item3_p': 'يعالج التطبيق البيانات لتقديم الخدمة. تقع على عاتقك مسؤولية أمان جهازك؛ لذا لا تقم بعمل Root لهاتفك.',
        't_item4_h': '4. خدمات الطرف الثالث', 't_item4_p': 'يعتمد لاند تشات على خدمات Google Play و Firebase والتي تخضع لشروطها الخاصة.',
        't_item5_h': '5. حدود المسؤولية', 't_item5_p': 'لاند تشات ليست مسؤولة عن عدم عمل التطبيق بسبب انقطاع الإنترنت أو نفاد رصيد البيانات.',
        't_item6_h': '6. التحديثات والإنهاء', 't_item6_p': 'قد نقوم بتحديث التطبيق للأمان أو إنهاء الخدمة في أي وقت دون إشعار مسبق.',
        't_item7_h': '7. التغييرات على الشروط', 't_item7_p': 'نحتفظ بالحق في تحديث الشروط دورياً. تسري التعديلات فور نشرها هنا.'
    }
};

// وظيفة التحميل الذكية من GitHub Releases
async function downloadLatestAPK() {
    const repoOwner = "RubaAbuEed";
    const repoName = "RubaAbuEed.github.io";
    try {
        const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/releases/latest`);
        const data = await response.json();
        const apkFile = data.assets.find(asset => asset.name.endsWith('.apk'));
        if (apkFile) {
            window.location.href = apkFile.browser_download_url;
        } else {
            window.location.href = "https://github.com/RubaAbuEed/RubaAbuEed.github.io/releases/download/2.4.0/landchat.2.4.0.release.apk";
        }
    } catch (e) {
        window.location.href = "https://github.com/RubaAbuEed/RubaAbuEed.github.io/releases/download/2.4.0/landchat.2.4.0.release.apk";
    }
}

// تبديل اللغة
function switchLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    localStorage.setItem('preferredLang', lang);
    const btn = document.getElementById('langToggle');
    if (btn) btn.textContent = lang === 'ar' ? 'English' : 'العربية';
}

// تشغيل الوظائف عند التحميل
document.addEventListener('DOMContentLoaded', () => {
    // تبديل اللغة
    document.getElementById('langToggle')?.addEventListener('click', () => {
        switchLanguage(document.documentElement.lang === 'ar' ? 'en' : 'ar');
    });

    // القائمة المنسدلة
    document.addEventListener('click', (e) => {
        const menuBtn = document.getElementById('menuBtn');
        const dropdown = document.getElementById('menuDropdown');
        if (menuBtn && menuBtn.contains(e.target)) {
            dropdown.classList.toggle('show-dropdown');
        } else if (dropdown && !dropdown.contains(e.target)) {
            dropdown.classList.remove('show-dropdown');
        }
    });

    // لغة البداية
    switchLanguage(localStorage.getItem('preferredLang') || 'ar');
});
