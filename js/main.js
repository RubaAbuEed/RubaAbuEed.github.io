const translations = {
    en: {
        'title': 'Land Chat - Premium Messaging Experience',
        'nav_home': 'Home', 'nav_features': 'Features', 'nav_download': 'Download', 'nav_privacy': 'Privacy',
        'hero_h1': 'Fast. Secure. Fun.',
        'hero_p': 'Land Chat is the most secure messaging app, designed for a unique communication experience with military-grade encryption.',
        'btn_download': 'Download Land Chat',
        'features_title': 'Core Features',
        'footer_copy': '© 2026 Land Chat. All rights reserved.',
        
        // Privacy Policy 10 Items - English
        'p_h1': 'Full Privacy Policy',
        'p_intro': 'Land Chat is committed to protecting your privacy and providing a secure communication environment. These ten points explain our strict policy.',
        'p_item1_h': '1. Introduction', 'p_item1_p': 'Land Chat service is provided "as is" for secure messaging. By using the app, you agree to the policies described here.',
        'p_item2_h': '2. Information Collection', 'p_item2_p': 'We may collect information like your phone number, nickname, and profile picture to enhance your experience.',
        'p_item3_h': '3. Log Data', 'p_item3_p': 'In case of an error, we collect log data including IP address, device name, and OS version to fix the issue.',
        'p_item4_h': '4. Third-Party Services', 'p_item4_p': 'The app uses Google Play Services and Firebase Analytics which may collect identifying information.',
        'p_item5_h': '5. Cookies', 'p_item5_p': 'We do not use cookies explicitly, but third-party libraries might. You have the option to accept or refuse them.',
        'p_item6_h': '6. Message Encryption', 'p_item6_p': 'We use End-to-End encryption. Neither Land Chat nor any third party can access your private conversations.',
        'p_item7_h': '7. Service Providers', 'p_item7_p': 'We may employ external companies to facilitate our service. They have limited access only to perform specific tasks.',
        'p_item8_h': '8. Children’s Privacy', 'p_item8_p': 'Our services do not address anyone under 13. We immediately delete any data discovered from children under this age.',
        'p_item9_h': '9. Data Deletion Right', 'p_item9_p': 'You have full control. You can permanently delete your account and all data from the app settings.',
        'p_item10_h': '10. Policy Changes', 'p_item10_p': 'We may update this policy periodically. We advise you to review this page regularly for any changes.'
    },
    ar: {
        'title': 'لاند تشات - تجربة مراسلة متميزة',
        'nav_home': 'الرئيسية', 'nav_features': 'المميزات', 'nav_download': 'التحميل', 'nav_privacy': 'الخصوصية',
        'hero_h1': 'سريع. آمن. ممتع.',
        'hero_p': 'لاند تشات هو تطبيق المراسلة الأكثر أماناً، مصمم ليمنحك تجربة تواصل فريدة مع تشفير عسكري ومميزات حصرية.',
        'btn_download': 'تحميل لاند تشات',
        'features_title': 'كل ما تحتاجه في تطبيق واحد',
        'footer_copy': '© 2026 لاند تشات - Land Chat. جميع الحقوق محفوظة.',

        // Privacy Policy 10 Items - Arabic
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
    }
};

function downloadLatestAPK() {
    const directLink = "https://github.com/RubaAbuEed/RubaAbuEed.github.io/releases/download/2.4.0/landchat.2.4.0.release.apk";
    window.location.href = directLink;
}

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

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('langToggle');
    if (btn) {
        btn.addEventListener('click', () => {
            const nextLang = document.documentElement.lang === 'ar' ? 'en' : 'ar';
            switchLanguage(nextLang);
        });
    }
    switchLanguage(localStorage.getItem('preferredLang') || 'ar');
    
    document.querySelectorAll('.btn-primary, .btn-download-smart').forEach(el => {
        el.addEventListener('click', (e) => {
            if (el.getAttribute('data-key') === 'btn_download' || el.closest('.download-card')) {
                e.preventDefault();
                downloadLatestAPK();
            }
        });
    });
});
