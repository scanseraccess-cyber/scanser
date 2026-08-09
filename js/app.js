/**
     * ==========================================================================
     * SCANSER DASHBOARD - CORE SINGLE PAGE APPLICATION ENGINE
     * Vanilla ES6 Architecture
     * ==========================================================================
     */

    /* ==========================================================================
       SECTION 1: TRANSLATIONS (i18n Engine)
       ========================================================================== */
    const translations = {
      en: {
        loginTitle: "Sign in to Scanser",
        loginSubtitle: "Enter your credentials to access your dashboard",
        emailLabel: "Email Address",
        passwordLabel: "Password",
        signInBtn: "Sign In",
        invalidAuth: "Invalid email or password",
        signUpTitle: "Create your account",
        signUpSubtitle: "Sign up to start submitting scans",
        nameLabel: "Full Name",
        createAccountBtn: "Create Account",
        confirmPasswordLabel: "Confirm Password",
        passwordMismatch: "Passwords don't match",
        noAccountText: "Don't have an account?",
        signUpLink: "Sign up",
        haveAccountText: "Already have an account?",
        signInLink: "Sign in",
        forgotPasswordLink: "Forgot password?",
        backToLogin: "Back to sign in",
        resetPasswordTitle: "Reset your password",
        resetPasswordSubtitle: "Enter your email and we'll send you a reset link",
        sendResetLinkBtn: "Send reset link",
        resetLinkSent: "If an account exists for that email, a reset link has been sent.",
        checkEmailTitle: "Check your inbox",
        checkEmailBody: "We sent a confirmation link to your email. Confirm it, then sign in.",
        signUpFailed: "Could not create account",
        profileLoadFailed: "Signed in, but couldn't load your profile. Contact an admin.",
        accountDisabled: "This account has been disabled. Contact an admin.",
        logout: "Logout",
        adminRole: "Administrator",
        userRole: "Standard User",

        navHome: "Home",
        navDashboard: "Dashboard",
        navSettings: "Settings",
        navAccess: "Access Management",
        navUsage: "Usage Statistics",
        navApiKeys: "API Keys",
        adminSection: "Admin Control",

        welcomeBack: "Welcome back,",
        welcomeDesc: "Here is what is happening with your services today.",
        statSubmissions: "Total Submissions",
        statAvgScore: "Avg. Similarity",
        statCredits: "Credits Remaining",
        statActiveKeys: "Active API Keys",
        recentActivity: "Recent Activity",
        quickActions: "Quick Actions",
        viewReports: "View All Tools",

        uploadDoc: "Upload Document",
        docTitle: "Document Title",
        wordCount: "Word Count",
        notes: "Notes / Description",
        dragDrop: "Drag and drop file here or click to browse",
        submitProcess: "Process Document",
        scanHistory: "Scan History",
        inputText: "Input Text",
        outputText: "Processed Output",
        processStealth: "Run Tool",
        copy: "Copy to Clipboard",
        clear: "Clear",
        copied: "Copied to clipboard!",

        userManagement: "User Management",
        addUser: "Add User",
        name: "Name",
        role: "Role",
        status: "Status",
        created: "Created Date",
        actions: "Actions",
        active: "Active",
        disabled: "Disabled",
        enable: "Enable",
        disable: "Disable",
        delete: "Delete",

        provider: "Provider",
        apiKey: "API Key",
        generateKey: "Add API Key",
        todaysUsage: "Today's Usage",
        monthlyUsage: "Monthly Usage",
        activeUsers: "Active Users",
        totalRequests: "Success Rate",

        searchPlaceholder: "Search...",
        saveChanges: "Save Changes",
        cancel: "Cancel",
        confirmDelete: "Are you sure you want to perform this action?",
        successSave: "Settings updated successfully",

        manageTools: "Manage Tools",
        manageToolsDesc: "Enable or disable the tools available to your team.",
        toolsCodeOnlyNotice: "New tools are added by a developer in the app's source code, not from this page. This list is read-only except for enable/disable.",
        toolName: "Tool Name",
        toolType: "Tool Type",
        toolDescription: "Description",
        toolIcon: "Icon",
        typeUpload: "Document Scan",
        typeText: "Text Processor",
        addTool: "Add Tool",
        existingTools: "Existing Tools",
        builtIn: "Built-in",
        iconDocument: "Document",
        iconCheck: "Checkmark",
        iconEye: "Eye",
        iconPlug: "Plug",

        allowedTools: "Allowed Tools",
        allToolsAdmin: "All tools (admin)",
        noneAssigned: "None assigned",
        manageAccess: "Manage Access",
        assignAccessDesc: "Select which tools this user is allowed to see and use.",

        credits: "Credits",
        adjust: "Adjust",
        adjustCredits: "Adjust Credits",
        adjustCreditsDesc: "Enter a positive number to add credits, or a negative number to remove credits.",
        currentBalance: "Current balance",
        creditAmount: "Amount",
        creditAmountHint: "e.g. 50 or -20",
        reasonOptional: "Reason (optional, shown in audit log)",
        enterValidAmount: "Enter a non-zero number.",
        creditAdjustFailed: "Could not update credits — check you're signed in as an admin.",
        creditsUpdated: "Credits updated",

        selectTool: "Tool",
        toolCreditsRemaining: "credits left",
        toolCreditsExhausted: "No credits left for this tool",
        upgradeToContinue: "You've used all your free credits for this tool. Upgrade to keep using it.",
        subscribeNow: "Subscribe now",
        creditsPerUse: "credit per use",

        creditSettingsTitle: "Credit Settings",
        creditSettingsDesc: "Control how many free uses each new user gets per tool, and how many credits one use costs.",
        freeCreditsPerToolLabel: "Free credits per tool (new users)",
        costPerUseLabel: "Credits charged per use",
        saveCreditSettings: "Save credit settings",
        creditSettingsSaved: "Credit settings saved",
        creditSettingsSaveFailed: "Could not save — check you're signed in as an admin.",

        paymentInstructionsLabel: "Payment instructions (shown to users on Settings)",
        paymentInstructionsHint: "Bank/EasyPaisa/WeChat Pay details + how to reach you after paying. Shown to every user once any of their tools run low.",
        paymentInstructionsPlaceholder: "e.g. EasyPaisa: 03xx-xxxxxxx (Your Name). After paying, send your Unique ID + payment screenshot to WhatsApp +92 3xx xxxxxxx.",
        subscriptionCardTitle: "Subscription & Top-up",
        subscriptionCardDesc: "Out of free credits on a tool? Send payment using the details below, then share your Unique ID above with the admin so they can add credits to your account.",
        subscriptionNotSetYet: "Payment details haven't been added yet — please contact the admin directly.",
        yourToolBalances: "Your credit balance per tool",

        applyTo: "Apply to",
        applyToThisTool: "This tool only",
        applyToAllTools: "All tools this user can access",

        welcomeModalTitle: "Welcome to Scanser 🎉",
        welcomeModalBody: "Every tool gives you {n} free uses to try it out. After that, you'll need to subscribe to keep using it. Enjoy exploring!",
        welcomeModalCta: "Got it, let's go",

        nameRequiredTitle: "What should we call you?",
        nameRequiredBody: "Enter your name so admins and your account settings can identify you.",
        nameRequiredPlaceholder: "Your name",
        nameRequiredCta: "Continue",
        nameRequiredError: "Please enter your name",

        demoInfoTitle: "You're in — quick heads-up 👋",
        demoInfoIntro: "You just signed in with a demo account — WeChat isn't wired up yet, so scanning a QR always signs you in this way for now. Here's exactly what's real today and what's still waiting on backend APIs:",
        demoInfoWorksTitle: "Working right now",
        demoInfoWorksItems: "Sign-in — instant demo session, no real WeChat account needed|All 6 tools are unlocked for every account, nothing is locked behind a paywall in this demo|Scans & rewrites run instantly and return simulated (fake) results|Credits, notifications, history and the admin panel all run fully on local demo data",
        demoInfoPendingTitle: "Not live yet (no backend API)",
        demoInfoPendingItems: "Real WeChat login — needs a WeChat Open Platform AppID + Secret on the backend|Real plagiarism / AI-detection scores — needs Turnitin, iThenticate or a stealth-rewrite API key|Payments — needs a real payment gateway connected",
        demoInfoCta: "Got it, let's explore",

        uniqueIdLabel: "Your Unique ID",
        uniqueIdHint: "This ID identifies your account. It can't be changed.",
        identifier: "Identifier",
        editIdentifier: "Edit ID",
        identifierLabel: "WeChat username / account no. / phone (optional)",
        identifierPlaceholder: "e.g. wx_johndoe or +86 138 0000 0000",
        identifierSaved: "Identifier saved",
        noneSet: "Not set",

        linkToTool: "Linked Tool",
        unlinked: "Unlinked",
        noApiKeys: "No API keys yet. Add one to connect a tool.",
        noApiKeysCodeOnly: "No API keys",
        apiKeysCodeOnlyNotice: "API keys are configured by a developer directly in the code (API_CONFIG) or in Supabase (api_keys_meta). This page is read-only — you can view and copy code-configured keys, but keys cannot be added, edited, or deleted from the app.",
        managedInSupabase: "Managed in Supabase",
        apiKeyValue: "API Key",
        baseUrlLabel: "Base URL (optional)",
        noneCustom: "-- None / Custom --",
        keyProviderLabel: "Provider / Label",

        connectedVia: "Connected via",
        notConnectedMsg: "Not connected — add an API key in Settings → API Keys and link it here.",
        demoToolBanner: "Demo mode — this tool is unlocked but no real API is connected yet, so results below are simulated, not real scan data.",
        demoKeyBadge: "Demo",
        notConnectedToast: "No API connected. Reports may be demo (fake). Connect in code in API Config.",
        docQueued: "Document submitted for processing",
        textProcessed: "Text processed successfully",
        genericError: "Something went wrong. Please try again.",
        noUsageYet: "No usage recorded yet — activity will appear here as tools are used.",
        requestActivity: "Request Activity (Last 7 Days)",
        noScansYet: "No scans yet.",

        // Command palette
        cmdkPlaceholder: "Search tools, pages, actions...",
        cmdkHint: "Navigate",
        cmdkNoResults: "No matches found",
        cmdkOpenHint: "Press",

        notifications: "Notifications",
        noNotifications: "You're all caught up — no notifications yet.",
        markAllRead: "Mark all as read",
        viewerRole: "Viewer (Read-only)",

        // Roles / access
        roleViewer: "Viewer",
        readOnlyBanner: "You have read-only access to this tool. Contact an administrator to request submission access.",

        // Nav
        navReports: "Reports",
        navAuditLog: "Audit Log",

        // Reports page
        reportsTitle: "Reports",
        reportsDesc: "Browse, view and export report history across every tool.",
        filterByTool: "Filter by Tool",
        allTools: "All Tools",
        submittedBy: "Submitted By",
        selectAll: "Select All",
        selectedCount: "selected",
        exportCsv: "Export CSV",
        exportPdf: "Download PDF",
        bulkDelete: "Delete Selected",
        view: "View",
        download: "Download",
        noReportsYet: "No reports match the current filter yet.",
        reportDetail: "Report Detail",
        matchBreakdown: "Match Breakdown",
        internetSources: "Internet Sources",
        publications: "Publications",
        studentPapers: "Student Papers",
        aiScoreBefore: "AI-Detection Score (Before)",
        aiScoreAfter: "AI-Detection Score (After)",
        close: "Close",

        // Audit log
        auditLogTitle: "Audit Log",
        auditLogDesc: "A record of administrative and account actions across this workspace.",
        auditTime: "Time",
        auditActor: "Actor",
        auditAction: "Action",
        auditDetails: "Details",
        noAuditEntries: "No activity recorded yet.",

        // Onboarding checklist
        onboardingTitle: "Get set up",
        onboardingDesc: "A few quick steps to get the most out of Scanser.",
        onboardingStep1: "Connect your first API key",
        onboardingStep2: "Invite a teammate",
        onboardingStep3: "Run your first scan",
        onboardingStep4: "Explore your reports",
        dismiss: "Dismiss",

        // Test connection / quota
        testConnection: "Test Connection",
        testing: "Testing...",
        testSuccess: "Connection successful",
        testFailed: "Connection failed — check the key and Base URL",
        lastChecked: "Last checked",
        never: "Never",
        quotaLabel: "Monthly Quota",
        quotaUsed: "used",
        quotaExceeded: "This key has reached its monthly quota. Increase it from the API Keys page.",
        monthlyQuotaOptional: "Monthly Quota (optional)",

        // Security / 2FA / SSO
        security: "Security",
        securityDesc: "Manage two-factor authentication and single sign-on for your account.",
        twoFactorAuth: "Two-Factor Authentication",
        twoFactorDesc: "Require a 6-digit code at sign-in, in addition to your password.",
        enable2fa: "Enable 2FA",
        disable2fa: "Disable 2FA",
        backupCodes: "Backup Codes",
        regenerateCodes: "Regenerate Codes",
        ssoTitle: "Single Sign-On",
        ssoDesc: "Let your team sign in with an existing company identity provider.",
        connectGoogle: "Connect Google Workspace",
        connectMicrosoft: "Connect Microsoft 365",
        ssoNotConfigured: "SSO requires a backend OAuth integration — see the TODO comment in the code for the connection point.",
        otpTitle: "Two-Factor Verification",
        otpSubtitle: "Enter the 6-digit code from your authenticator app",
        otpPlaceholder: "6-digit code",
        otpInvalid: "Invalid code. Please try again.",
        verifyBtn: "Verify",
        backToLogin: "Back to login",

        // Professional tool fields
        authorFirstName: "Author First Name",
        authorLastName: "Author Last Name",
        submitToAssignment: "Submit To",
        submitToFolder: "Submission Folder",
        submitToGroup: "Submission Group",
        chooseFile: "Choose File",
        noFileChosen: "No file chosen",
        acceptedFormats: "Accepted formats",
        fileSizeLimit: "Max file size",
        wordCountLimits: "Word count",
        repositoryOption: "Paper Repository",
        repoStandard: "Standard paper repository",
        repoInstitution: "Institution repository only",
        repoNone: "No repository (do not store this paper)",
        exclusionSettings: "Exclusion Settings",
        excludeBibliography: "Exclude bibliography",
        excludeQuotes: "Exclude quoted material",
        excludeSmallMatches: "Exclude matches smaller than",
        words: "words",
        certificationLabel: "I certify that this submission is my own original work and complies with my institution's academic integrity policy.",
        similarityIndex: "Similarity Index",
        matchesFound: "matches found",
        processingMode: "Processing Mode",
        modeStandard: "Standard",
        modeAggressive: "Aggressive",
        modeAcademic: "Academic",
        modeCreative: "Creative",
        targetReadingLevel: "Target Reading Level",
        levelGeneral: "General Audience",
        levelCollege: "College Level",
        levelAdvanced: "Advanced / Technical",
        characterCount: "Characters",
        humanLikeScore: "Human-likeness",
        requiredFieldsNote: "Fields marked with * are required before you can submit.",

        // Bulk / misc
        selectRowsHint: "Select rows to enable bulk actions.",
        confirmBulkDelete: "Delete the selected reports? This cannot be undone.",

        // Public homepage (no login required)
        brandName: "Scanser",
        publicNavHome: "Home",
        publicNavStartRewriting: "Start Rewriting",
        publicNavAiPrediction: "AI Rate Prediction",
        publicNavPaperCheck: "Paper Check",
        publicNavHistory: "Rewrite History",
        publicNavRanking: "Model Ranking",
        publicNavJoinGroup: "Join Group",
        publicLoginBtn: "Login",
        heroEyebrow: "LIMITED OFFER",
        heroTitle: "Free Trial for New Users",
        heroSubtitle: "Register for free trial credits — experience every tool instantly",
        heroCta: "Sign Up Free",
        heroSlide2Eyebrow: "DUAL ENGINE",
        heroSlide2Title: "Cut AI Rate & Plagiarism Together",
        heroSlide2Subtitle: "One pass, two problems solved — try Dual Reduction today",
        heroSlide2Cta: "Try Dual Reduction",
        heroSlide3Eyebrow: "12+ PLATFORMS",
        heroSlide3Title: "Built for Every Major Detector",
        heroSlide3Subtitle: "Turnitin, CNKI, Weipu and more — one dashboard, every check",
        heroSlide3Cta: "See Coverage",
        quickNavTitle: "Quick Navigation",
        quickNavSubtitle: "Choose a service to get started",
        tagPopular: "Popular",
        tagBest: "Best",
        tagNew: "New",
        cardAiTitle: "Reduce AI Rate",
        cardAiDesc: "Intelligently lower AI-detection markers across 12+ platforms while keeping your voice.",
        cardPlagTitle: "Reduce Plagiarism",
        cardPlagDesc: "Deep semantic rewriting that lowers similarity scores while preserving original meaning.",
        cardDualTitle: "Dual Reduction",
        cardDualDesc: "Reduce plagiarism and AI rate together in a single, efficient pass.",
        cardPredictTitle: "AI Prediction",
        cardPredictDesc: "Pre-detect AI probability and assess risk before you submit, across every platform.",
        getStarted: "Get Started",
        learnMore: "Learn more",
        guideTitle: "Academic Writing Guide",
        guideSubtitle: "Improve your skills & stay informed",
        guideReadMore: "Read more",
        guideTabAll: "All",
        guideTabGuides: "Guides",
        guideTabTech: "Tech",
        guideTabTips: "Tips",
        guideTabReviews: "Reviews",
        guideArticle1Title: "Complete Guide to Reducing Plagiarism in Academic Papers",
        guideArticle1Desc: "A step-by-step walkthrough of how similarity checkers work and how to bring your score down honestly.",
        guideArticle2Title: "How AI Detection Algorithms Work & How to Beat Them Fairly",
        guideArticle2Desc: "Understand perplexity, burstiness, and the signals detectors actually look for.",
        guideArticle3Title: "8 Common Plagiarism Check Mistakes and How to Avoid Them",
        guideArticle3Desc: "The small formatting and citation slip-ups that quietly inflate your similarity score.",
        guideArticle4Title: "Turnitin vs iThenticate: Which Should You Use First?",
        guideArticle4Desc: "A practical comparison for students choosing between the two most common checkers.",
        guideArticle5Title: "5 Habits That Keep Your Writing Naturally Human",
        guideArticle5Desc: "Small drafting habits that lower your AI-likeness score without sounding robotic.",
        guideArticle6Title: "Reader Review: A Semester With Scanser",
        guideArticle6Desc: "One graduate student's honest experience across three thesis chapters.",
        joinGroupTitle: "Join Our Community",
        joinGroupDesc: "Scan the QR code with WeChat to join the official user group for tips, updates and support.",
        wechatModalTitle: "Sign in with WeChat",
        wechatModalSubtitle: "Open WeChat and scan the QR code to continue",
        wechatScanHint: "Scan with WeChat",
        wechatWaitingHint: "Waiting for you to scan…",
        wechatSuccessHint: "Scanned! Please confirm on your phone…",
        wechatExpiredHint: "QR code expired",
        wechatRefreshBtn: "Refresh",
        wechatUsePasswordLink: "Use email & password instead",
        wechatOpenAppHint: "Don't have WeChat installed? Use email & password below.",
        wechatDemoBadge: "Demo mode — WeChat isn't connected yet, so this signs you in with a demo account instead.",
        signedInToastWelcome: "Signed in — welcome back!"
      },
      zh: {
        loginTitle: "登录 Scanser 平台",
        loginSubtitle: "输入您的凭据以访问您的仪表板",
        emailLabel: "电子邮件地址",
        passwordLabel: "密码",
        signInBtn: "登录",
        invalidAuth: "无效的电子邮件或密码",
        signUpTitle: "创建您的帐户",
        signUpSubtitle: "注册以开始提交扫描",
        nameLabel: "姓名",
        createAccountBtn: "创建帐户",
        confirmPasswordLabel: "确认密码",
        passwordMismatch: "两次输入的密码不一致",
        noAccountText: "还没有帐户？",
        signUpLink: "注册",
        haveAccountText: "已经有帐户了？",
        signInLink: "登录",
        forgotPasswordLink: "忘记密码？",
        backToLogin: "返回登录",
        resetPasswordTitle: "重置您的密码",
        resetPasswordSubtitle: "输入您的电子邮件，我们将向您发送重置链接",
        sendResetLinkBtn: "发送重置链接",
        resetLinkSent: "如果该电子邮件存在帐户，重置链接已发送。",
        checkEmailTitle: "请查看您的邮箱",
        checkEmailBody: "我们已向您的邮箱发送了确认链接。请确认后再登录。",
        signUpFailed: "无法创建帐户",
        profileLoadFailed: "登录成功，但无法加载您的资料。请联系管理员。",
        accountDisabled: "此帐户已被禁用。请联系管理员。",
        logout: "退出登录",
        adminRole: "系统管理员",
        userRole: "普通用户",

        navHome: "首页",
        navDashboard: "仪表板",
        navSettings: "设置",
        navAccess: "用户权限管理",
        navUsage: "用量统计分析",
        navApiKeys: "API 密钥管理",
        adminSection: "管理员控制台",

        welcomeBack: "欢迎回来，",
        welcomeDesc: "这是您今天所有服务的概览状态。",
        statSubmissions: "总提交次数",
        statAvgScore: "平均重复率",
        statCredits: "剩余点数",
        statActiveKeys: "活跃 API 密钥",
        recentActivity: "近期活动记录",
        quickActions: "快捷操作",
        viewReports: "查看所有工具",

        uploadDoc: "上传文档",
        docTitle: "文档标题",
        wordCount: "总字数",
        notes: "备注 / 描述",
        dragDrop: "拖放文件到此处，或点击浏览上传",
        submitProcess: "提交并开始处理",
        scanHistory: "历史检测记录",
        inputText: "输入原始文本",
        outputText: "优化生成结果",
        processStealth: "运行工具",
        copy: "复制到剪贴板",
        clear: "清空",
        copied: "已成功复制到剪贴板！",

        userManagement: "用户账号管理",
        addUser: "添加新用户",
        name: "姓名",
        role: "角色",
        status: "状态",
        created: "创建时间",
        actions: "操作",
        active: "启用",
        disabled: "禁用",
        enable: "启用",
        disable: "禁用",
        delete: "删除",

        provider: "服务商",
        apiKey: "API 密钥",
        generateKey: "添加 API 密钥",
        todaysUsage: "今日使用量",
        monthlyUsage: "本月使用量",
        activeUsers: "活跃用户数",
        totalRequests: "成功率",

        searchPlaceholder: "搜索...",
        saveChanges: "保存更改",
        cancel: "取消",
        confirmDelete: "您确定要执行此操作吗？",
        successSave: "设置已成功保存",

        manageTools: "管理工具",
        manageToolsDesc: "启用或禁用团队可用的工具。",
        toolsCodeOnlyNotice: "新工具由开发者在应用源代码中添加，无法在此页面添加。此列表为只读，仅可启用/禁用。",
        toolName: "工具名称",
        toolType: "工具类型",
        toolDescription: "描述",
        toolIcon: "图标",
        typeUpload: "文档检测",
        typeText: "文本处理",
        addTool: "添加工具",
        existingTools: "现有工具",
        builtIn: "内置",
        iconDocument: "文档",
        iconCheck: "对勾",
        iconEye: "眼睛",
        iconPlug: "插头",

        allowedTools: "可用工具",
        allToolsAdmin: "全部工具（管理员）",
        noneAssigned: "未分配",
        manageAccess: "管理权限",
        credits: "积分",
        adjust: "调整",
        adjustCredits: "调整积分",
        adjustCreditsDesc: "输入正数以增加积分，输入负数以扣除积分。",
        currentBalance: "当前余额",
        creditAmount: "数量",
        creditAmountHint: "例如 50 或 -20",
        reasonOptional: "原因（可选，会显示在审计日志中）",
        enterValidAmount: "请输入一个非零数字。",
        creditAdjustFailed: "无法更新积分 — 请确认你以管理员身份登录。",
        creditsUpdated: "积分已更新",
        assignAccessDesc: "选择此用户可以查看和使用的工具。",

        selectTool: "工具",
        toolCreditsRemaining: "次剩余",
        toolCreditsExhausted: "该工具的免费次数已用完",
        upgradeToContinue: "您已用完该工具的免费试用次数，请升级订阅以继续使用。",
        subscribeNow: "立即订阅",
        creditsPerUse: "积分/次",

        creditSettingsTitle: "积分设置",
        creditSettingsDesc: "设置新用户每个工具可获得的免费使用次数，以及每次使用扣除的积分数。",
        freeCreditsPerToolLabel: "每个工具的免费积分（新用户）",
        costPerUseLabel: "每次使用扣除的积分",
        saveCreditSettings: "保存积分设置",
        creditSettingsSaved: "积分设置已保存",
        creditSettingsSaveFailed: "保存失败 — 请确认你以管理员身份登录。",

        paymentInstructionsLabel: "付款说明（会显示在用户的设置页）",
        paymentInstructionsHint: "银行/支付宝/微信支付信息，以及付款后如何联系您。当用户任一工具积分用完时会显示给他们。",
        paymentInstructionsPlaceholder: "例如：微信支付：xxx（您的姓名）。付款后请将您的唯一ID和付款截图发送到 WhatsApp +92 3xx xxxxxxx。",
        subscriptionCardTitle: "订阅与充值",
        subscriptionCardDesc: "某个工具的免费积分用完了？请按下方信息付款，然后把上方的唯一ID发给管理员，以便为您的账户充值。",
        subscriptionNotSetYet: "付款信息尚未添加 — 请直接联系管理员。",
        yourToolBalances: "您各工具的积分余额",

        applyTo: "应用于",
        applyToThisTool: "仅此工具",
        applyToAllTools: "该用户可使用的所有工具",

        welcomeModalTitle: "欢迎使用 Scanser 🎉",
        welcomeModalBody: "每个工具都有 {n} 次免费试用机会，用完后需要订阅才能继续使用。祝您使用愉快！",
        welcomeModalCta: "知道了，开始使用",

        nameRequiredTitle: "我们该如何称呼您？",
        nameRequiredBody: "请输入您的姓名，以便管理员和账户设置能够识别您。",
        nameRequiredPlaceholder: "您的姓名",
        nameRequiredCta: "继续",
        nameRequiredError: "请输入您的姓名",

        demoInfoTitle: "登录成功 — 温馨提示 👋",
        demoInfoIntro: "您刚刚使用演示账号登录 — 微信登录尚未真正接入，目前扫码都会以此方式为您登录。以下是目前真实可用的功能，以及仍需后端 API 支持的部分：",
        demoInfoWorksTitle: "目前可用",
        demoInfoWorksItems: "登录 — 演示账号即时登录，无需真实微信账号|全部 6 个工具均已为所有账号解锁，演示版中没有付费墙|扫描与降重可即时运行，返回模拟（虚假）结果|积分、通知、历史记录与管理后台均基于本地演示数据完整运行",
        demoInfoPendingTitle: "尚未接入（缺少后端 API）",
        demoInfoPendingItems: "真实微信登录 — 需要在后端配置微信开放平台 AppID 与 Secret|真实查重 / AI 检测分数 — 需要 Turnitin、iThenticate 或降 AI 率 API 密钥|支付功能 — 需要接入真实的支付网关",
        demoInfoCta: "知道了，开始体验",

        uniqueIdLabel: "您的唯一 ID",
        uniqueIdHint: "此 ID 用于识别您的账户，无法更改。",
        identifier: "标识信息",
        editIdentifier: "编辑标识",
        identifierLabel: "微信用户名 / 账号 / 手机号（可选）",
        identifierPlaceholder: "例如 wx_johndoe 或 +86 138 0000 0000",
        identifierSaved: "标识信息已保存",
        noneSet: "未设置",

        linkToTool: "关联工具",
        unlinked: "未关联",
        noApiKeys: "暂无 API 密钥，添加一个以连接工具。",
        noApiKeysCodeOnly: "无 API 密钥",
        apiKeysCodeOnlyNotice: "API 密钥由开发者直接在代码（API_CONFIG）或 Supabase（api_keys_meta）中配置。此页面为只读——您可以查看和复制代码中配置的密钥，但无法在应用内添加、编辑或删除密钥。",
        managedInSupabase: "在 Supabase 中管理",
        apiKeyValue: "API 密钥",
        baseUrlLabel: "基础地址（可选）",
        noneCustom: "-- 无 / 自定义 --",
        keyProviderLabel: "服务商 / 标签",

        connectedVia: "已连接：",
        notConnectedMsg: "尚未连接 — 请在设置 → API 密钥中添加并关联密钥。",
        demoToolBanner: "演示模式 — 此工具已解锁，但尚未连接真实 API，下方结果为模拟数据，非真实扫描结果。",
        demoKeyBadge: "演示",
        notConnectedToast: "未连接 API。报告可能是演示（虚假）数据。请在源代码的 API Config 中连接。",
        docQueued: "文档已提交处理",
        textProcessed: "文本处理成功",
        genericError: "出现错误，请重试。",
        noUsageYet: "暂无使用记录 — 使用工具后将在此显示。",
        requestActivity: "请求活动（近 7 天）",
        noScansYet: "暂无检测记录。",

        // 命令面板
        cmdkPlaceholder: "搜索工具、页面、操作...",
        cmdkHint: "导航",
        cmdkNoResults: "未找到匹配项",
        cmdkOpenHint: "按",

        // 通知
        notifications: "通知",
        noNotifications: "暂无通知，一切都已处理完毕。",
        markAllRead: "全部标记为已读",
        viewerRole: "访客（只读）",

        // 角色 / 权限
        roleViewer: "访客",
        readOnlyBanner: "您对此工具拥有只读权限，如需提交权限请联系管理员。",

        // 导航
        navReports: "报告",
        navAuditLog: "审计日志",

        // 报告页面
        reportsTitle: "报告",
        reportsDesc: "浏览、查看并导出各工具的报告历史记录。",
        filterByTool: "按工具筛选",
        allTools: "全部工具",
        submittedBy: "提交人",
        selectAll: "全选",
        selectedCount: "已选择",
        exportCsv: "导出 CSV",
        exportPdf: "下载 PDF",
        bulkDelete: "删除所选",
        view: "查看",
        download: "下载",
        noReportsYet: "当前筛选条件下暂无报告。",
        reportDetail: "报告详情",
        matchBreakdown: "匹配来源分布",
        internetSources: "互联网来源",
        publications: "出版物",
        studentPapers: "学生论文",
        aiScoreBefore: "AI 检测分数（处理前）",
        aiScoreAfter: "AI 检测分数（处理后）",
        close: "关闭",

        // 审计日志
        auditLogTitle: "审计日志",
        auditLogDesc: "记录本工作区内的管理与账户相关操作。",
        auditTime: "时间",
        auditActor: "操作人",
        auditAction: "操作",
        auditDetails: "详情",
        noAuditEntries: "暂无活动记录。",

        // 新手引导清单
        onboardingTitle: "开始设置",
        onboardingDesc: "完成以下几个步骤，充分使用 Scanser。",
        onboardingStep1: "添加您的第一个 API 密钥",
        onboardingStep2: "邀请一位团队成员",
        onboardingStep3: "运行您的第一次检测",
        onboardingStep4: "查看您的报告",
        dismiss: "关闭提示",

        // 连接测试 / 配额
        testConnection: "测试连接",
        testing: "测试中...",
        testSuccess: "连接成功",
        testFailed: "连接失败 — 请检查密钥与基础地址",
        lastChecked: "上次检查",
        never: "从未",
        quotaLabel: "每月配额",
        quotaUsed: "已使用",
        quotaExceeded: "该密钥已达到每月配额上限，请前往 API 密钥页面调整。",
        monthlyQuotaOptional: "每月配额（可选）",

        // 安全 / 双重验证 / 单点登录
        security: "安全设置",
        securityDesc: "管理您账户的双重验证与单点登录。",
        twoFactorAuth: "双重验证 (2FA)",
        twoFactorDesc: "登录时除密码外还需输入 6 位验证码。",
        enable2fa: "启用双重验证",
        disable2fa: "关闭双重验证",
        backupCodes: "备用验证码",
        regenerateCodes: "重新生成验证码",
        ssoTitle: "单点登录 (SSO)",
        ssoDesc: "允许团队使用现有企业身份提供商登录。",
        connectGoogle: "连接 Google Workspace",
        connectMicrosoft: "连接 Microsoft 365",
        ssoNotConfigured: "单点登录需要后端 OAuth 集成 — 请查看代码中的 TODO 注释了解接入点。",
        otpTitle: "双重验证",
        otpSubtitle: "请输入身份验证器 App 中的 6 位验证码",
        otpPlaceholder: "6 位验证码",
        otpInvalid: "验证码无效，请重试。",
        verifyBtn: "验证",
        backToLogin: "返回登录",

        // 专业工具字段
        authorFirstName: "作者名",
        authorLastName: "作者姓",
        submitToAssignment: "提交至作业",
        submitToFolder: "提交文件夹",
        submitToGroup: "提交分组",
        chooseFile: "选择文件",
        noFileChosen: "未选择文件",
        acceptedFormats: "支持的格式",
        fileSizeLimit: "最大文件大小",
        wordCountLimits: "字数限制",
        repositoryOption: "论文库选项",
        repoStandard: "标准论文库",
        repoInstitution: "仅本机构论文库",
        repoNone: "不存入任何论文库",
        exclusionSettings: "排除设置",
        excludeBibliography: "排除参考文献",
        excludeQuotes: "排除引用内容",
        excludeSmallMatches: "排除小于此字数的匹配",
        words: "字",
        certificationLabel: "我确认此提交为本人原创作品，并符合所在机构的学术诚信政策。",
        similarityIndex: "相似度指数",
        matchesFound: "个匹配项",
        processingMode: "处理模式",
        modeStandard: "标准模式",
        modeAggressive: "深度模式",
        modeAcademic: "学术模式",
        modeCreative: "创意模式",
        targetReadingLevel: "目标阅读水平",
        levelGeneral: "大众读者",
        levelCollege: "大学水平",
        levelAdvanced: "高级 / 专业",
        characterCount: "字符数",
        humanLikeScore: "拟人化程度",
        requiredFieldsNote: "标有 * 的字段为提交前必填项。",

        // 批量操作 / 其他
        selectRowsHint: "选择行以启用批量操作。",
        confirmBulkDelete: "确定删除所选报告吗？此操作无法撤销。",

        // 公开首页（无需登录）
        brandName: "一触即改",
        publicNavHome: "首页",
        publicNavStartRewriting: "开始改写",
        publicNavAiPrediction: "AI 率预测",
        publicNavPaperCheck: "论文查重",
        publicNavHistory: "改写历史",
        publicNavRanking: "模型排行",
        publicNavJoinGroup: "加入群组",
        publicLoginBtn: "登录",
        heroEyebrow: "限时优惠",
        heroTitle: "新用户免费试用",
        heroSubtitle: "注册领取试用点数 — 立即体验全部核心功能",
        heroCta: "免费注册",
        heroSlide2Eyebrow: "双引擎",
        heroSlide2Title: "查重率与 AI 率一起降",
        heroSlide2Subtitle: "一次处理，两个问题同时解决，立即体验双重降重",
        heroSlide2Cta: "体验双重降重",
        heroSlide3Eyebrow: "12+ 检测平台",
        heroSlide3Title: "覆盖所有主流检测系统",
        heroSlide3Subtitle: "知网、维普、Turnitin 等，一个平台全部搞定",
        heroSlide3Cta: "查看支持平台",
        quickNavTitle: "快捷导航",
        quickNavSubtitle: "选择一项服务，立即开始",
        tagPopular: "热门",
        tagBest: "推荐",
        tagNew: "新",
        cardAiTitle: "降低 AI 率",
        cardAiDesc: "智能降低 12+ 检测平台的 AI 特征标记，同时保留原文语义。",
        cardPlagTitle: "降低查重率",
        cardPlagDesc: "深度语义重写，在保留原意的前提下有效降低相似度。",
        cardDualTitle: "双重降重",
        cardDualDesc: "一次处理，同时降低查重率与 AI 率，高效省心。",
        cardPredictTitle: "AI 预测",
        cardPredictDesc: "提交前预先检测 AI 概率与风险，覆盖多个检测平台。",
        getStarted: "立即开始",
        learnMore: "了解更多",
        guideTitle: "学术写作指南",
        guideSubtitle: "提升写作技巧，掌握最新资讯",
        guideReadMore: "阅读更多",
        guideTabAll: "全部",
        guideTabGuides: "指南",
        guideTabTech: "技术",
        guideTabTips: "技巧",
        guideTabReviews: "测评",
        guideArticle1Title: "学术论文降重完整指南",
        guideArticle1Desc: "详解相似度检测系统的工作原理，教你合规、有效地降低查重率。",
        guideArticle2Title: "AI 检测算法原理及应对方法",
        guideArticle2Desc: "了解困惑度、突发性等检测系统真正关注的核心信号。",
        guideArticle3Title: "8 个常见查重误区及规避方法",
        guideArticle3Desc: "那些悄悄拉高你相似度分数的排版与引用小失误。",
        guideArticle4Title: "Turnitin 与 iThenticate：该先用哪个？",
        guideArticle4Desc: "为学生梳理两大主流检测平台的实用对比。",
        guideArticle5Title: "保持文字自然的 5 个写作习惯",
        guideArticle5Desc: "在不失自然的前提下，降低文本的 AI 特征分数。",
        guideArticle6Title: "用户测评：使用一触即改的一学期",
        guideArticle6Desc: "一位研究生在三章论文写作中的真实体验分享。",
        joinGroupTitle: "加入我们的社群",
        joinGroupDesc: "使用微信扫描二维码，加入官方用户群获取技巧、更新与支持。",
        wechatModalTitle: "微信登录",
        wechatModalSubtitle: "打开微信，扫描下方二维码继续",
        wechatScanHint: "微信扫一扫",
        wechatWaitingHint: "等待扫码中…",
        wechatSuccessHint: "扫码成功，请在手机上确认…",
        wechatExpiredHint: "二维码已过期",
        wechatRefreshBtn: "点击刷新",
        wechatUsePasswordLink: "使用账号密码登录",
        wechatOpenAppHint: "没有安装微信？请使用下方账号密码登录。",
        wechatDemoBadge: "演示模式 — 微信尚未接入，将使用演示账号为您登录。",
        signedInToastWelcome: "登录成功，欢迎回来！"
      }
    };

    /* ==========================================================================
       SECTION 2: CENTRALIZED APPLICATION STATE
       ========================================================================== */
    // --------------------------------------------------------------------
    // PER-TOOL CREDIT ENGINE
    // --------------------------------------------------------------------
    // Every user gets `free_credits_per_tool` free uses of EACH tool
    // (default 2) — not one shared pool. Each use of a tool costs
    // `scan_cost` credits (default 1) FROM THAT TOOL's own balance. Once a
    // tool's balance hits 0 for a user, that one tool is blocked for them
    // until an admin tops it up (future: until they subscribe).
    //
    // Admin controls both numbers from Settings -> Credit Settings. Real
    // per-user/per-tool balances live in Supabase (usage_ledger.tool_id +
    // user_tool_credit_balance view, see migration_007). Until a real
    // Supabase session exists, an equivalent local mock mirrors the same
    // rules in localStorage so the free-trial/blocking behavior can be
    // fully tested without a backend.
    const DEFAULT_FREE_CREDITS_PER_TOOL = 2;
    const DEFAULT_CREDIT_COST = 1;

    // creditSettings is mutable and admin-editable even without Supabase —
    // same pattern as state.tools[].enabled (see toggleToolEnabled).
    let creditSettings = JSON.parse(localStorage.getItem('scanser_credit_settings') || 'null') || {
      scan_cost: DEFAULT_CREDIT_COST,
      free_credits_per_tool: DEFAULT_FREE_CREDITS_PER_TOOL,
      payment_instructions: ''
    };

    let toolCreditBalances = null; // { [toolId]: number } — current user, real Supabase values once loaded
    let allToolCreditBalances = {}; // { [userId]: { [toolId]: number } } — admin-only, User Management page

    // Local mock balances, keyed by user id, so the free-trial/blocking
    // behavior works identically with no backend configured.
    let mockCredits = JSON.parse(localStorage.getItem('scanser_mock_credits') || '{}');
    function persistMockCredits() {
      localStorage.setItem('scanser_mock_credits', JSON.stringify(mockCredits));
    }
    function persistCreditSettings() {
      localStorage.setItem('scanser_credit_settings', JSON.stringify(creditSettings));
    }

    // Makes sure a (non-admin) user has access to every current tool —
    // mirrors what migration_009 does server-side on signup. Called right
    // after a demo/mock login creates a session, so "login karte sath har
    // tool ki access mil jaye" holds locally too, not just once a real
    // Supabase project is wired up.
    function ensureFullToolAccess(userId) {
      if (!userId) return;
      const allIds = state.tools.map(x => x.id);
      const current = state.userAccess[userId] || [];
      const merged = Array.from(new Set([...current, ...allIds]));
      state.userAccess[userId] = merged;
    }

    // Makes sure the given user has a balance entry for every current tool,
    // granting free_credits_per_tool the first time a tool is seen for them
    // (new tools added later also get topped up once, for existing users).
    function ensureMockCredits(userId) {
      if (!userId) return;
      if (!mockCredits[userId]) mockCredits[userId] = {};
      let changed = false;
      state.tools.forEach(tool => {
        if (mockCredits[userId][tool.id] === undefined) {
          mockCredits[userId][tool.id] = creditSettings.free_credits_per_tool;
          changed = true;
        }
      });
      if (changed) persistMockCredits();
    }

    // Remaining credits for a given tool for the CURRENT user. Real balance
    // (Supabase) takes priority once loaded; otherwise falls back to the
    // local mock — never both, so it can't double-count.
    function getToolCredits(toolId) {
      if (!state.user) return 0;
      if (toolCreditBalances && toolCreditBalances[toolId] !== undefined) {
        return Math.max(0, toolCreditBalances[toolId]);
      }
      ensureMockCredits(state.user.id);
      return Math.max(0, mockCredits[state.user.id][toolId] || 0);
    }

    function canUseTool(toolId) {
      const cost = creditSettings.scan_cost || 1;
      return getToolCredits(toolId) >= cost;
    }

    // Called right after a scan/rewrite completes successfully. Deducts the
    // configured cost from that tool's own balance (mock, instantly) and,
    // with a real Supabase session, also persists the spend to
    // usage_ledger — the on-screen balance then reconciles itself via the
    // realtime subscription the moment the real row lands.
    function spendCredit(scanId, toolId) {
      const cost = creditSettings.scan_cost || 1;
      if (state.user) {
        ensureMockCredits(state.user.id);
        mockCredits[state.user.id][toolId] = Math.max(0, (mockCredits[state.user.id][toolId] || 0) - cost);
        persistMockCredits();
      }
      if (toolCreditBalances && toolCreditBalances[toolId] !== undefined) {
        toolCreditBalances[toolId] = Math.max(0, toolCreditBalances[toolId] - cost);
      }
      if (!isSupabaseConfigured() || !state.user) return;
      DataLayer.deductCredit(scanId || null, toolId, cost);
    }

    /**
     * ==========================================================================
     * DEVELOPER CONFIG — API keys and tools are managed HERE, in code, only.
     *
     * By design there is no "Add API Key" or "Add Tool" button anywhere in the
     * app UI. The API Keys page (Settings -> API Keys) and the tool list in
     * Settings -> Manage Tools are READ-ONLY: they display whatever is
     * configured below and in state.tools (SECTION 2, just below this block).
     * This is intentional — it keeps provider credentials and the tool catalog
     * under source control instead of editable at runtime by anyone with
     * admin access.
     *
     * To connect a real key: fill it in below and reload the app.
     * To add a new tool: add an entry to state.tools AND a matching entry
     * here (same id), then reload.
     * Leave apiKey as '' to leave that tool disconnected until you fill one in.
     *
     * IMPORTANT (production security): this file ships to the browser, so
     * anything placed here — including these keys — is visible to anyone who
     * opens dev tools. This client-only setup is fine for a demo/prototype.
     * Before going live, move real provider calls to a backend (see the
     * architecture notes at the end of this conversation) and keep keys only
     * in server-side environment variables / a secrets manager, never in
     * client-side HTML/JS.
     * ==========================================================================
     */
    // DEMO MODE: every tool below is seeded with a placeholder key (see
    // DEMO_PLACEHOLDER_KEY) purely so ToolAPI.process() — which is a mock
    // no matter what the key says — doesn't dead-end on NOT_CONNECTED.
    // Nothing here ever leaves the browser or hits a real provider. Swap
    // any apiKey for a real one (and fill baseUrl) when you're ready to go
    // live; state.apiKeys[].demo flag (set below) drives the "Demo" badges
    // across the UI and flips off automatically once a real key is used.
    const DEMO_PLACEHOLDER_KEY = 'demo-mode-no-real-api-connected';
    const API_CONFIG = {
      'paper-check':        { provider: 'Turnitin API',   apiKey: DEMO_PLACEHOLDER_KEY, baseUrl: 'https://api.turnitin.com' },
      'plagiarism-report':  { provider: 'iThenticate API',apiKey: DEMO_PLACEHOLDER_KEY, baseUrl: 'https://api.ithenticate.com' },
      'reduce-ai-rate':     { provider: 'Stealth API',    apiKey: DEMO_PLACEHOLDER_KEY, baseUrl: 'https://api.your-provider.com' },
      'rewriting':          { provider: 'Stealth API',    apiKey: DEMO_PLACEHOLDER_KEY, baseUrl: 'https://api.your-provider.com' }
      // Add an entry here for any custom tool you add to state.tools below,
      // using the same id you gave the tool, e.g.:
      // quillbot: { provider: 'Quillbot API', apiKey: 'YOUR_KEY_HERE', baseUrl: 'https://api.quillbot.com' }
    };

    function seedApiKeysFromConfig() {
      Object.entries(API_CONFIG).forEach(([toolId, cfg]) => {
        if (!cfg.apiKey) return; // no key hardcoded for this tool -> managed from the UI only
        const tool = state.tools.find(x => x.id === toolId);
        if (!tool || tool.apiKeyId) return; // tool missing, or already has a key linked (don't override UI changes)
        const isDemo = cfg.apiKey === DEMO_PLACEHOLDER_KEY;
        const newKey = {
          id: 'k_cfg_' + toolId,
          provider: cfg.provider || toolId,
          key: cfg.apiKey,
          baseUrl: cfg.baseUrl || '',
          created: todayStr(),
          status: 'active',
          visible: false,
          toolId,
          quota: cfg.quota || 0,
          used: 0,
          lastTest: null,
          demo: isDemo // drives the "Demo" badges — see API Keys admin page + tool pages
        };
        state.apiKeys.push(newKey);
        tool.apiKeyId = newKey.id;
      });
    }

    const state = {
      user: JSON.parse(localStorage.getItem('scanser_session')) || null,
      language: localStorage.getItem('scanser_lang') || 'zh',
      theme: localStorage.getItem('scanser_theme') || 'light', // Default theme is always Light unless the user explicitly switched to dark before.
      sidebarCollapsed: localStorage.getItem('scanser_sidebar') === 'true',
      currentRoute: 'home',
      onboardingDismissed: localStorage.getItem('scanser_onboarding_dismissed') === 'true',
      pendingAuth: null, // { userId } set when password is correct but a 2FA code is still required
      twoFactor: JSON.parse(localStorage.getItem('scanser_2fa') || '{}'), // { [userId]: { enabled, codes: [] } }

      // Real accounts used for the demo login screen only.
      users: [
        { id: '1', name: 'Admin Master', email: 'admin@scanser.com', uniqueId: '1000000000000001', externalId: '', role: 'admin', status: 'active', created: '2026-01-15' },
        { id: '2', name: 'Standard User', email: 'user@scanser.com', uniqueId: '1000000000000002', externalId: '', role: 'user', status: 'active', created: '2026-01-15' },
        { id: '3', name: 'Guest Reviewer', email: 'viewer@scanser.com', uniqueId: '1000000000000003', externalId: '', role: 'viewer', status: 'active', created: '2026-01-20' }
      ],

      // The 6 services. This ONE array drives the sidebar, the home quick-nav
      // cards, routing, and every tool page (Views.toolPage) — add a service
      // here and it shows up everywhere automatically, no other view needs
      // to change. `type` decides the input shape ('text' = paste-in/
      // paste-out, 'upload' = file-in/report-out). `kind` groups services
      // that share the same underlying processing logic even though they
      // are separate menu items with their own copy (per product decision:
      // Reduce AI Rate / Rewriting share logic; Paper Check / See
      // Plagiarism Report share logic).
      tools: [
        { id: 'reduce-ai-rate', kind: 'rewrite', icon: 'stealth', tone: 'red', type: 'text', articleId: 3,
          name: 'Reduce AI Rate', description: 'Lower AI-detector scores while keeping your meaning.',
          titleEn: 'Reduce AI Rate', titleZh: '降低AI率', descEn: 'Rewrite your text so AI-detection tools score it as human-written.', descZh: '改写文本，让AI检测工具将其判定为人工撰写。',
          chips: ['Turnitin AI', 'GPTZero', 'Originality.ai'], apiKeyId: null, builtIn: true, enabled: true },
        { id: 'reduce-plagiarism', kind: 'rewrite', icon: 'reports', tone: 'blue', type: 'text', articleId: 5,
          name: 'Reduce Plagiarism', description: 'Rephrase flagged passages to lower a similarity score.',
          titleEn: 'Reduce Plagiarism', titleZh: '降低查重率', descEn: 'Rephrase flagged passages so your similarity score drops before you submit.', descZh: '改写被标红的段落，在提交前降低查重相似度。',
          chips: ['CNKI', 'Turnitin', 'Weipu'], apiKeyId: null, builtIn: true, enabled: true },
        { id: 'ai-report', kind: 'report', icon: 'usage', tone: 'purple', type: 'upload', articleId: 7,
          name: 'See AI Report', description: 'Upload a document and get a full AI-detection report.',
          titleEn: 'See AI Report', titleZh: '查看AI检测报告', descEn: 'Upload a document to get a section-by-section AI-detection report.', descZh: '上传文档，获取分段AI检测报告。',
          chips: ['SVIP', 'PDF export'], apiKeyId: null, builtIn: true, enabled: true },
        { id: 'plagiarism-report', kind: 'upload', icon: 'shield', tone: 'green', type: 'upload', articleId: 8,
          name: 'See Plagiarism Report', description: 'Upload a document and get a full similarity report.',
          titleEn: 'See Plagiarism Report', titleZh: '查看查重报告', descEn: 'Upload a document to get a full similarity report with matched sources.', descZh: '上传文档，获取带匹配来源的完整查重报告。',
          chips: ['CNKI', 'Turnitin', 'PDF export'], apiKeyId: null, builtIn: true, enabled: true },
        { id: 'rewriting', kind: 'rewrite', icon: 'stealth', tone: 'orange', type: 'text', articleId: 1,
          name: 'Rewriting', description: 'General-purpose paraphrasing that keeps your original meaning.',
          titleEn: 'Rewriting', titleZh: '智能改写', descEn: 'General-purpose paraphrasing — keep your meaning, change the wording.', descZh: '通用智能改写，保留原意，更换表达方式。',
          chips: ['12+ styles', 'Academic tone'], apiKeyId: null, builtIn: true, enabled: true },
        { id: 'paper-check', kind: 'upload', icon: 'turnitin', tone: 'blue', type: 'upload', articleId: 2,
          name: 'Paper Check', description: 'Submit a paper for a Turnitin/iThenticate-style similarity check.',
          titleEn: 'Paper Check', titleZh: '论文查重', descEn: 'Submit a full paper for a Turnitin/iThenticate-style similarity check.', descZh: '提交完整论文，进行Turnitin/iThenticate风格的相似度检测。',
          chips: ['Turnitin', 'iThenticate', 'x2 report'], apiKeyId: null, builtIn: true, enabled: true }
      ],

      // Per-user tool access. Admins always see every enabled tool. Regular
      // signups get every tool by default now (see ensureFullToolAccess /
      // migration_009) — credits are what actually gate usage, not this
      // list, so it starts open rather than needing an admin to check boxes
      // one by one. '2' is the local demo login account; '3' is left as a
      // partial-access example row for the Access Control page.
      userAccess: {
        '2': ['reduce-ai-rate', 'reduce-plagiarism', 'ai-report', 'plagiarism-report', 'rewriting', 'paper-check'],
        '3': ['reduce-ai-rate', 'reduce-plagiarism', 'ai-report', 'plagiarism-report', 'rewriting', 'paper-check']
      },

      apiKeys: [],
      scans: [],
      notifications: [],
      auditLog: [],
      reportsFilterTool: 'all'
    };

    function t(key) {
      return (translations[state.language] && translations[state.language][key]) || key;
    }

    // Bilingual copy for a SERVICES/tools entry — falls back to the
    // English field if a Chinese one is somehow missing, never to the id.
    function svcTitle(tool) {
      return state.language === 'zh' ? (tool.titleZh || tool.titleEn || tool.name) : (tool.titleEn || tool.name);
    }
    function svcDesc(tool) {
      return state.language === 'zh' ? (tool.descZh || tool.descEn || tool.description) : (tool.descEn || tool.description);
    }

    /* ==========================================================================
       SECTION 3: HELPERS
       ========================================================================== */
    function todayStr() {
      return new Date().toISOString().split('T')[0];
    }

    // Generates a random 16-digit numeric string used as the client-side
    // fallback unique ID (DEMO MODE only). In LIVE MODE the real ID comes
    // from profiles.unique_id, generated server-side by Postgres
    // (see supabase/migration_008_unique_id.sql) so it's guaranteed unique
    // across every user, not just locally.
    function generateUniqueId16() {
      let id = '';
      for (let i = 0; i < 16; i++) id += Math.floor(Math.random() * 10);
      return id;
    }

    function slugify(name) {
      return name.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'tool';
    }

    function maskKey(key) {
      if (!key) return '••••••••';
      if (key.length <= 8) return '••••••••';
      return key.slice(0, 4) + '••••••••' + key.slice(-4);
    }

    function getLast7DaysCounts() {
      const days = [];
      for (let i = 6; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const iso = d.toISOString().split('T')[0];
        const label = d.toLocaleDateString('en-US', { weekday: 'short' });
        const count = state.scans.filter(s => s.date === iso).length;
        days.push({ iso, label, count });
      }
      return days;
    }

    /* ==========================================================================
       SECTION 3B: THEME (Light / Premium Dark)
       ========================================================================== */
    const Theme = {
      apply() {
        document.documentElement.setAttribute('data-theme', state.theme);
      },
      toggle() {
        state.theme = state.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('scanser_theme', state.theme);
        this.apply();
        const btn = document.getElementById('theme-toggle-btn');
        if (btn) btn.innerHTML = state.theme === 'dark' ? Icons.sun : Icons.moon;
        // Repaint the canvas chart so its colors match the new theme.
        if (document.getElementById('usageChart')) Events.renderUsageChart();
      }
    };
    Theme.apply(); // Applied immediately, before first paint, to avoid a light-mode flash.

    /* ==========================================================================
       SECTION 4: AUTHENTICATION ENGINE
       ========================================================================== */
    // Real Supabase Auth when js/supabaseClient.js is configured. Falls back to
    // the original local/mock login (3 hardcoded demo accounts) when it isn't —
    // e.g. running this folder with no Supabase project connected — so the app
    // never hard-breaks just because credentials are missing.
    const AuthService = {
      // Loads the matching `profiles` row for a Supabase auth session and
      // shapes it into the same state.user object the rest of the app expects
      // (id, name, email, role). Returns true on success.
      async hydrateUserFromSession(session) {
        if (!session || !session.user) { state.user = null; return false; }
        const { data: profile, error } = await supabaseClient
          .from('profiles')
          .select('id, name, email, role, status, unique_id, external_id')
          .eq('id', session.user.id)
          .maybeSingle();

        if (error) {
          console.warn('[Auth] failed to load profile:', error.message);
          state.user = null;
          return false;
        }
        if (!profile) {
          // Session exists but the handle_new_user trigger hasn't created a
          // profiles row yet (race right after signup) or it's missing.
          state.user = null;
          return false;
        }
        if (profile.status === 'disabled') {
          await supabaseClient.auth.signOut();
          state.user = null;
          return 'disabled';
        }
        state.user = { id: profile.id, name: profile.name, email: profile.email, role: profile.role, uniqueId: profile.unique_id || '', externalId: profile.external_id || '' };
        return true;
      },

      // Called once at startup to restore an existing session (Supabase JS
      // persists sessions in localStorage itself — this just reads it back).
      // DEMO MODE: a demo login (see WeChatAuth.completeLogin) never creates
      // a real Supabase auth session — it only writes scanser_session to
      // localStorage — so we always check for a REAL session first, and
      // only fall back to the local demo session when there isn't one.
      // This is what keeps a demo user signed in (with full tool access)
      // across a page reload instead of silently bouncing them out.
      async init() {
        if (isSupabaseConfigured()) {
          const { data: { session } } = await supabaseClient.auth.getSession();
          if (session) {
            await this.hydrateUserFromSession(session);
            return;
          }
        }
        // No real Supabase session (or Supabase isn't configured at all) —
        // fall back to the local demo session.
        state.user = JSON.parse(localStorage.getItem('scanser_session')) || null;
        if (state.user) {
          ensureFullToolAccess(state.user.id);
          ensureMockCredits(state.user.id);
        }
      },

      // Keeps state.user in sync with auth events firing elsewhere (another
      // tab signing out, a token refresh, etc).
      listen() {
        if (!isSupabaseConfigured()) return;
        supabaseClient.auth.onAuthStateChange(async (event) => {
          if (event === 'SIGNED_OUT') {
            state.user = null;
            Router.navigate('home');
          }
        });
      },

      // Exchanges the one-time WeChat login ticket (already confirmed by the
      // wechat-auth Edge Function) for a real Supabase session on the client,
      // via a magic-link-style token that the Edge Function minted server-side
      // with the service_role key. See SECTION 4B (WeChatAuth) for the flow
      // that calls this, and supabase/functions/wechat-auth for the backend.
      async completeWeChatSession(tokenHash, email) {
        if (!isSupabaseConfigured()) {
          return { success: false, message: 'Supabase is not configured — see js/supabaseClient.js.' };
        }
        const { data, error } = await supabaseClient.auth.verifyOtp({
          type: 'magiclink',
          token_hash: tokenHash,
          email
        });
        if (error) return { success: false, message: error.message };
        const result = await this.hydrateUserFromSession(data.session);
        if (result === 'disabled') return { success: false, message: t('accountDisabled') };
        if (!result) return { success: false, message: t('profileLoadFailed') };
        return { success: true };
      },

      async logout() {
        if (state.user) AuditLog.log('Signed out', state.user.uniqueId || state.user.name);
        unsubscribeRealtime();
        // Always clear the local demo session — a demo login (see
        // WeChatAuth.completeLogin) never creates a real Supabase auth
        // session, so relying on supabaseClient.auth.signOut() alone (as
        // before) left scanser_session behind and could re-log a demo user
        // back in on the next reload.
        localStorage.removeItem('scanser_session');
        if (isSupabaseConfigured()) {
          await supabaseClient.auth.signOut().catch(() => {});
        }
        state.user = null;
        toolCreditBalances = null;
        allToolCreditBalances = {};
        Router.navigate('home');
      },

      isAuthenticated() {
        return !!state.user;
      }
    };

    /* ==========================================================================
       SECTION 4B: WECHAT QR SIGN-IN (the ONLY sign-in method in this app)
       ==========================================================================
       Renders the WeChat QR sign-in overlay on top of the current screen.
       There is no password/email form anywhere in this app — WeChat is the
       entire auth system.

       LIVE MODE (isSupabaseConfigured() === true, the normal case since
       js/supabaseClient.js already has your project's URL/anon key):
         1. mint()   -> calls the `wechat-auth` Edge Function (action=mint),
                        which asks WeChat's Open Platform for a real
                        qrconnect ticket and returns { session_id, qr_url,
                        expires_at }.
         2. poll()   -> polls the same function (action=status) every 2s.
                        Once the user has scanned + confirmed in WeChat, the
                        function replies { status: 'confirmed', token_hash,
                        email } — token_hash comes from admin.generateLink()
                        run server-side with the service_role key.
         3. AuthService.completeWeChatSession() -> exchanges token_hash for
                        a real Supabase Auth session client-side via
                        supabaseClient.auth.verifyOtp(). Nothing touching
                        the service_role key ever reaches the browser.

       DEMO MODE (Supabase not configured, or the Edge Function isn't
       deployed yet / WeChat AppID+Secret not filled in): falls back to a
       local timer that fakes the same timeline so the rest of the app
       stays fully clickable while you finish backend setup. See
       supabase/functions/wechat-auth/index.ts for the real implementation
       and the exact TODOs (AppID/AppSecret) that switch this to LIVE MODE.
       ========================================================================== */
    const WeChatAuth = {
      pendingRoute: null,
      sessionId: null,
      expiresAt: null,
      timer: null,
      countdownTimer: null,
      pollTimer: null,
      status: 'waiting', // 'waiting' | 'scanned' | 'expired'

      open(pendingRoute) {
        this.pendingRoute = pendingRoute || null;
        this.render();
        document.getElementById('modal-container').classList.add('active');
        this.startSession();
      },

      close() {
        document.getElementById('modal-container').classList.remove('active');
        document.getElementById('modal-container').innerHTML = '';
        clearTimeout(this.timer);
        clearInterval(this.countdownTimer);
        clearInterval(this.pollTimer);
      },

      render() {
        document.getElementById('modal-container').innerHTML = `
          <div class="modal wechat-modal">
            <button class="wechat-modal-close" id="wechat-modal-close" aria-label="Close">&times;</button>
            <div class="wechat-modal-brand">
              <div class="auth-brand-logo" style="width:36px;height:36px;font-size:1.05rem;">${(t('brandName') || 'S').charAt(0)}</div>
              <span>${t('brandName')}</span>
            </div>
            <h3 class="wechat-modal-title">${t('wechatModalTitle')}</h3>
            <p class="wechat-modal-subtitle">${t('wechatModalSubtitle')}</p>
            <div class="wechat-demo-badge hidden" id="wechat-demo-badge">${Icons.statusWarn}<span>${t('wechatDemoBadge')}</span></div>

            <div class="wechat-qr-box" id="wechat-qr-box">
              <canvas id="wechat-qr-canvas" width="176" height="176"></canvas>
              <div class="wechat-qr-overlay" id="wechat-qr-overlay"></div>
            </div>

            <p class="wechat-qr-status" id="wechat-qr-status">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M17.5 6.5h.01"></path><path d="M7 3.5C4 3.5 2 5.7 2 9c0 2.1 1.2 3.9 3.1 4.9L4 17l3.6-1.4c.6.1 1.2.2 1.9.2 3.6 0 6.5-2.7 6.5-6s-2.9-6.4-6.5-6.4z"></path><path d="M15.3 9c3.7.3 6.7 2.9 6.7 6.1 0 1.5-.7 2.9-1.9 3.9l.7 2.4-2.9-1.2c-.8.2-1.7.3-2.6.2"></path></svg>
              <span id="wechat-qr-status-text">${t('wechatWaitingHint')}</span>
            </p>

            <div class="wechat-modal-divider"><span>${t('brandName')}</span></div>
          </div>
        `;
      },

      async startSession() {
        this.status = 'waiting';
        this.bindEvents();

        if (isSupabaseConfigured()) {
          try {
            const { data, error } = await supabaseClient.functions.invoke('wechat-auth', {
              body: { action: 'mint' }
            });
            if (error || !data || !data.session_id) throw error || new Error('mint failed');
            this.sessionId = data.session_id;
            this.expiresAt = new Date(data.expires_at).getTime();
            this.drawQr(data.qr_url);
            this.tickCountdown();
            this.poll();
            return;
          } catch (err) {
            console.warn('[WeChatAuth] Edge Function unavailable, falling back to demo mode:', err && err.message);
            // Falls through to demo mode below — e.g. wechat-auth isn't
            // deployed yet, or the WeChat AppID/Secret TODOs aren't filled in.
          }
        }

        // DEMO MODE — see file header comment above.
        this.sessionId = 'demo_' + Math.random().toString(36).slice(2, 10);
        this.expiresAt = Date.now() + 120000;
        this.drawQr(`https://scanser.app/wx-auth?token=${this.sessionId}`);
        this.tickCountdown();
        const badge = document.getElementById('wechat-demo-badge');
        if (badge) badge.classList.remove('hidden');
        this.timer = setTimeout(() => this.markScanned(), 3200 + Math.random() * 1800);
      },

      // LIVE MODE polling loop — asks the Edge Function whether this
      // session_id has been scanned / confirmed yet.
      poll() {
        clearInterval(this.pollTimer);
        this.pollTimer = setInterval(async () => {
          if (this.status === 'expired') { clearInterval(this.pollTimer); return; }
          try {
            const { data, error } = await supabaseClient.functions.invoke('wechat-auth', {
              body: { action: 'status', session_id: this.sessionId }
            });
            if (error || !data) return;
            if (data.status === 'scanned' && this.status === 'waiting') this.markScanned();
            if (data.status === 'confirmed') {
              clearInterval(this.pollTimer);
              await this.completeLogin({ tokenHash: data.token_hash, email: data.email });
            }
            if (data.status === 'expired') this.expire();
          } catch (err) {
            console.warn('[WeChatAuth] poll error:', err && err.message);
          }
        }, 2000);
      },

      markScanned() {
        if (this.status !== 'waiting') return;
        this.status = 'scanned';
        const statusText = document.getElementById('wechat-qr-status-text');
        const overlay = document.getElementById('wechat-qr-overlay');
        if (statusText) statusText.textContent = t('wechatSuccessHint');
        if (overlay) overlay.innerHTML = `<div class="wechat-scanned-check">${Icons.statusOk}</div>`;
        // DEMO MODE only — LIVE MODE waits for the poll() loop to see
        // status:'confirmed' from the Edge Function instead of a timer.
        if (!isSupabaseConfigured() || String(this.sessionId).startsWith('demo_')) {
          this.timer = setTimeout(() => this.completeLogin(), 1100);
        }
      },

      // `opts.tokenHash` + `opts.email` come from the Edge Function in LIVE
      // MODE. When absent (DEMO MODE) this signs in as the built-in demo user
      // so the gated dashboard/tool pages stay reachable without a backend.
      async completeLogin(opts) {
        clearInterval(this.countdownTimer);
        clearInterval(this.pollTimer);

        if (opts && opts.tokenHash) {
          const res = await AuthService.completeWeChatSession(opts.tokenHash, opts.email);
          if (!res.success) {
            Toast.show(res.message || t('profileLoadFailed'), 'danger');
            return;
          }
        } else {
          const demoUser = state.users.find(u => u.email === 'user@scanser.com') || state.users[1];
          const session = { id: demoUser.id, email: demoUser.email, role: demoUser.role, name: demoUser.name, uniqueId: demoUser.uniqueId || generateUniqueId16(), externalId: demoUser.externalId || '' };
          if (!demoUser.uniqueId) demoUser.uniqueId = session.uniqueId;
          localStorage.setItem('scanser_session', JSON.stringify(session));
          state.user = session;
          ensureFullToolAccess(session.id);
          ensureMockCredits(session.id);
        }

        this.close();
        Toast.show(t('signedInToastWelcome'), 'success');

        if (isSupabaseConfigured()) {
          await hydrateFromSupabase().catch(() => {});
        }
        if (state.user) ensureMockCredits(state.user.id);
        Router.navigate(this.pendingRoute || 'home');
        subscribeRealtime();
        maybeShowNameRequiredModal(() => maybeShowDemoInfoModal(() => maybeShowWelcomeCreditsModal()));
      },

      expire() {
        this.status = 'expired';
        clearInterval(this.countdownTimer);
        clearInterval(this.pollTimer);
        const overlay = document.getElementById('wechat-qr-overlay');
        const statusText = document.getElementById('wechat-qr-status-text');
        if (overlay) {
          overlay.innerHTML = `<button class="wechat-refresh-btn" id="wechat-refresh-btn">${Icons.statusWarn}<span>${t('wechatRefreshBtn')}</span></button>`;
          const btn = document.getElementById('wechat-refresh-btn');
          if (btn) btn.onclick = () => this.startSession();
        }
        if (statusText) statusText.textContent = t('wechatExpiredHint');
      },

      tickCountdown() {
        clearInterval(this.countdownTimer);
        this.countdownTimer = setInterval(() => {
          if (this.status !== 'waiting' && this.status !== 'scanned') return;
          if (Date.now() >= this.expiresAt) this.expire();
        }, 1000);
      },

      drawQr(payload) {
        const canvas = document.getElementById('wechat-qr-canvas');
        if (!canvas) return;
        const overlay = document.getElementById('wechat-qr-overlay');
        if (overlay) overlay.innerHTML = '';
        if (window.QRCode && typeof QRCode.toCanvas === 'function') {
          QRCode.toCanvas(canvas, payload, { width: 176, margin: 1, color: { dark: '#1F2937', light: '#FFFFFF' } });
        }
      },

      bindEvents() {
        const closeBtn = document.getElementById('wechat-modal-close');
        if (closeBtn) closeBtn.onclick = () => this.close();
      }
    };

    /* ==========================================================================
       SECTION 5: ACCESS CONTROL & PERMISSIONS
       ========================================================================== */
    const Permissions = {
      fixed: {
        settings: ['admin', 'user', 'viewer'],
        reports: ['admin', 'user', 'viewer'],
        ranking: ['admin', 'user', 'viewer'],
        access: ['admin'],
        usage: ['admin'],
        apikeys: ['admin'],
        auditlog: ['admin']
      },

      canAccess(route) {
        if (!state.user) return false;
        if (this.fixed[route]) return this.fixed[route].includes(state.user.role);

        const tool = state.tools.find(x => x.id === route);
        if (!tool || !tool.enabled) return false;
        if (state.user.role === 'admin') return true;
        const allowed = state.userAccess[state.user.id] || [];
        return allowed.includes(tool.id);
      }
    };

    /* ==========================================================================
       SECTION 6: ROUTING & NAVIGATION
       ========================================================================== */
    const Router = {
      // Routes reachable with no session at all — the public marketing site.
      publicRoutes: ['home'],

      navigate(route) {
        if (this.publicRoutes.includes(route)) {
          state.currentRoute = route;
          this.renderScreen(route);
          return;
        }

        if (!AuthService.isAuthenticated()) {
          // Logged-out visitor tapped a gated service/nav item — instead of a
          // hard redirect to a login page (there isn't one), keep them on
          // the public page underneath and pop the WeChat QR sign-in overlay
          // on top of it (see SECTION 4B).
          if (state.currentRoute !== 'home') {
            state.currentRoute = 'home';
            this.renderScreen('home');
          }
          WeChatAuth.open(route);
          return;
        }
        if (!Permissions.canAccess(route)) {
          Toast.show('Access Denied: Insufficient permissions', 'danger');
          return;
        }
        state.currentRoute = route;
        this.renderScreen(route);
      },

      // Used by nav items / cards that should prompt WeChat sign-in when
      // logged out, rather than ever hard-navigating a stranger to a form.
      requireAuth(route) {
        if (AuthService.isAuthenticated()) {
          this.navigate(route);
        } else {
          WeChatAuth.open(route);
        }
      },

      renderScreen(route) {
        const app = document.getElementById('app');
        if (route !== 'home') clearInterval(window.__heroTimer); // stop the hero carousel once we leave the homepage
        if (route === 'home') {
          app.innerHTML = Views.Home();
          Events.bindHomeEvents();
          return;
        }
        let content;
        if (Views[route]) {
          content = Views[route]();
        } else {
          const tool = state.tools.find(x => x.id === route);
          content = tool ? Views.toolPage(tool) : '<h1>404 Not Found</h1>';
        }

        app.innerHTML = Views.Layout(content);
        Events.bindGlobalEvents();
        Events.bindPageEvents(route);
      }
    };

    // Several Events handlers (add/edit/disable/delete user, adjust credits,
    // manage access, toggle an API key's visibility) are shared verbatim
    // between the signed-in app (index.html, driven by Router) and the
    // separate hidden admin shell (admin.html, driven by AdminPanel below).
    // Those handlers used to call Router.navigate(...) directly to redraw
    // themselves after saving — which is correct in index.html, but inside
    // admin.html it silently swapped the whole #app out from under
    // AdminPanel and rendered the *regular signed-in user dashboard*
    // instead (same shell a normal WeChat user sees). One click on "Adjust"
    // or "Manage Access" and the admin would find themselves looking at
    // their own account's tool grid instead of the admin panel — this is
    // what redraws the *correct* shell for whichever context is actually
    // running.
    function refreshScreen(route) {
      if (window.SCANSER_ADMIN_MODE) {
        AdminPanel.navigate(route);
      } else {
        Router.navigate(route);
      }
    }

    /* ==========================================================================
       SECTION 7: UI COMPONENTS (Icons, Toast, Modals, Mock API layer)
       ========================================================================== */
    const Icons = {
      dashboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
      home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><path d="M9 21V12h6v9"></path></svg>`,
      turnitin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>`,
      ithenticate: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>`,
      stealth: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path><path d="M12 6v6l4 2"></path></svg>`,
      generic: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 2v4M15 2v4M6 8h12l-1 6a5 5 0 0 1-5 4 5 5 0 0 1-5-4L6 8z"></path><path d="M10 20v-2M14 20v-2"></path></svg>`,
      settings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
      access: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
      usage: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
      apikeys: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>`,
      collapse: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>`,
      menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`,
      search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
      user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
      statusOk: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"></circle><path d="M8.5 12.5l2.5 2.5 5-5"></path></svg>`,
      statusWarn: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"></circle><line x1="12" y1="8" x2="12" y2="13"></line><circle cx="12" cy="16.2" r="0.4" fill="currentColor"></circle></svg>`,
      sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"></path></svg>`,
      moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`,
      bell: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>`,
      reports: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19V5a2 2 0 0 1 2-2h8l6 6v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></path><path d="M14 3v6h6"></path><line x1="8" y1="13" x2="16" y2="13"></line><line x1="8" y1="17" x2="13" y2="17"></line></svg>`,
      audit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"></circle><path d="M21 21l-4.3-4.3"></path><path d="M11 8v3l2 2"></path></svg>`,
      shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z"></path><path d="M9 12l2 2 4-4"></path></svg>`,
      upload: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>`,
      download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`,
      trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path><path d="M10 11v6M14 11v6M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"></path></svg>`
    };

    function iconFor(tool) {
      return Icons[tool.icon] || Icons.generic;
    }

    // Maps a route to its display title, used by the shared app navbar
    // (Views.Layout) to show the current page name where the search bar
    // used to be.
    function pageTitleForRoute(route) {
      if (route === 'home') return t('publicNavHome');
      if (route === 'settings') return t('navSettings');
      if (route === 'access') return t('navAccess');
      if (route === 'usage') return t('navUsage');
      if (route === 'apikeys') return t('navApiKeys');
      if (route === 'reports') return t('publicNavHistory');
      if (route === 'auditlog') return t('navAuditLog');
      if (route === 'ranking') return t('publicNavRanking');
      const tool = state.tools.find(x => x.id === route);
      if (tool) return svcTitle(tool);
      return '';
    }

    // The ONE nav list used by BOTH the logged-out public sidebar (Views.Home)
    // and the logged-in app sidebar (Views.Layout), so they can never drift
    // out of sync again. `gated` items pop the WeChat sign-in modal when
    // nobody is signed in yet; ungated items (just Home) always work.
    function getSidebarNavItems() {
      const items = [
        { route: 'home', icon: Icons.home || Icons.dashboard, label: t('publicNavHome'), gated: false }
      ];
      state.tools.forEach(tool => {
        items.push({ route: tool.id, icon: iconFor(tool), label: svcTitle(tool), gated: true });
      });
      items.push({ route: 'reports', icon: Icons.audit, label: t('publicNavHistory'), gated: true });
      items.push({ route: 'ranking', icon: Icons.access, label: t('publicNavRanking'), gated: true });
      return items;
    }

    const Toast = {
      show(message, type = 'info') {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `<span>${message}</span>`;
        container.appendChild(toast);
        setTimeout(() => {
          toast.style.opacity = '0';
          setTimeout(() => toast.remove(), 300);
        }, 3000);
      }
    };

    const Notify = {
      // persist=false for things that shouldn't be written to the DB again
      // (namely: rows we just loaded FROM the DB — see hydrateFromSupabase).
      push(message, type = 'info', route = null, persist = true) {
        const localNotif = {
          id: 'n_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6),
          message, type, route,
          read: false,
          ts: new Date().toISOString()
        };
        state.notifications.unshift(localNotif);
        if (state.notifications.length > 50) state.notifications.length = 50;
        this.refreshBadge();

        if (persist && isSupabaseConfigured() && state.user) {
          // Fire-and-forget, same pattern as DataLayer.saveScan. Once the
          // real row comes back, swap the temp local id for the DB uuid so
          // an immediate click on this notif can still mark it read.
          DataLayer.createNotification({ type, title: message, route }).then(row => {
            if (row && row.id) localNotif.id = row.id;
          });
        }
      },
      refreshBadge() {
        const badge = document.getElementById('notif-badge');
        if (badge) {
          const unread = state.notifications.filter(n => !n.read).length;
          badge.textContent = unread > 9 ? '9+' : unread;
          badge.classList.toggle('hidden', unread === 0);
        }
      },
      markAllRead() {
        state.notifications.forEach(n => n.read = true);
        if (isSupabaseConfigured() && state.user) {
          DataLayer.markAllNotificationsRead(); // fire-and-forget
        }
        Router.navigate(state.currentRoute);
      },
      timeAgo(iso) {
        const diffMs = Date.now() - new Date(iso).getTime();
        const mins = Math.floor(diffMs / 60000);
        if (mins < 1) return 'just now';
        if (mins < 60) return mins + 'm ago';
        const hrs = Math.floor(mins / 60);
        if (hrs < 24) return hrs + 'h ago';
        return Math.floor(hrs / 24) + 'd ago';
      }
    };

    const AuditLog = {
      log(action, details) {
        // Local copy always happens first, so the UI is instant regardless
        // of Supabase being configured or the network being slow/offline.
        state.auditLog.unshift({
          id: 'a_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6),
          actor: (state.user && state.user.name) || 'System',
          action, details: details || '',
          ts: new Date().toISOString()
        });
        if (state.auditLog.length > 300) state.auditLog.length = 300;

        // Fire-and-forget persistence to Supabase (no-op until configured +
        // Auth is wired up — see js/dataLayer.js and supabase/schema.sql).
        DataLayer.logAudit(action, details, (state.user && state.user.name) || 'System');
      }
    };

    const CommandPalette = {
      query: '',
      activeIndex: 0,

      items() {
        if (!state.user) return [];
        const list = [];
        const pageIcon = { reports: Icons.audit, ranking: Icons.access, settings: Icons.settings };
        const pageLabel = { reports: 'publicNavHistory', ranking: 'publicNavRanking', settings: 'navSettings' };
        ['reports', 'ranking', 'settings'].forEach(route => {
          if (Permissions.canAccess(route)) list.push({ label: t(pageLabel[route]), icon: pageIcon[route], route });
        });
        state.tools.filter(tool => tool.enabled && Permissions.canAccess(tool.id)).forEach(tool => {
          list.push({ label: svcTitle(tool), icon: iconFor(tool), route: tool.id });
        });
        return list;
      },

      filtered() {
        const q = this.query.trim().toLowerCase();
        const all = this.items();
        if (!q) return all;
        return all.filter(i => i.label.toLowerCase().includes(q));
      },

      open() {
        this.query = '';
        this.activeIndex = 0;
        this.render();
        document.getElementById('command-palette').classList.add('active');
        setTimeout(() => {
          const input = document.getElementById('cmdk-input');
          if (input) input.focus();
        }, 30);
      },

      close() {
        document.getElementById('command-palette').classList.remove('active');
      },

      isOpen() {
        return document.getElementById('command-palette').classList.contains('active');
      },

      render() {
        const results = this.filtered();
        const container = document.getElementById('command-palette');
        container.innerHTML = `
          <div class="cmdk-box" onclick="event.stopPropagation()">
            <div class="cmdk-input-row">
              ${Icons.search}
              <input type="text" id="cmdk-input" placeholder="${t('cmdkPlaceholder')}" value="${this.query.replace(/"/g, '&quot;')}" autocomplete="off">
            </div>
            <div class="cmdk-list" id="cmdk-list">
              ${results.length ? results.map((item, i) => `
                <div class="cmdk-item ${i === this.activeIndex ? 'active-row' : ''}" data-index="${i}" data-route="${item.route}">
                  ${item.icon} <span>${item.label}</span>
                </div>
              `).join('') : `<div class="cmdk-empty">${t('cmdkNoResults')}</div>`}
            </div>
            <div class="cmdk-footer">↑↓ ${t('cmdkHint')} · Enter · Esc</div>
          </div>
        `;
        container.onclick = () => this.close();

        const input = document.getElementById('cmdk-input');
        input.oninput = (e) => {
          this.query = e.target.value;
          this.activeIndex = 0;
          this.render();
          document.getElementById('cmdk-input').focus();
          const val = document.getElementById('cmdk-input').value;
          document.getElementById('cmdk-input').setSelectionRange(val.length, val.length);
        };
        input.onkeydown = (e) => {
          const res = this.filtered();
          if (e.key === 'ArrowDown') {
            e.preventDefault();
            this.activeIndex = Math.min(this.activeIndex + 1, res.length - 1);
            this.render();
            document.getElementById('cmdk-input').focus();
          } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            this.activeIndex = Math.max(this.activeIndex - 1, 0);
            this.render();
            document.getElementById('cmdk-input').focus();
          } else if (e.key === 'Enter') {
            e.preventDefault();
            const chosen = res[this.activeIndex];
            if (chosen) {
              this.close();
              Router.navigate(chosen.route);
            }
          } else if (e.key === 'Escape') {
            this.close();
          }
        };

        document.querySelectorAll('.cmdk-item').forEach(el => {
          el.onclick = () => {
            const route = el.getAttribute('data-route');
            this.close();
            Router.navigate(route);
          };
        });
      }
    };

    const Modal = {
      open(title, contentHtml, onConfirm, confirmLabel) {
        const container = document.getElementById('modal-container');
        container.innerHTML = `
          <div class="modal">
            <div class="modal-header">
              <h3 style="font-weight:600; font-size:1.1rem;">${title}</h3>
              <button onclick="Modal.close()">&times;</button>
            </div>
            <div class="modal-body">${contentHtml}</div>
            <div class="modal-footer">
              <button class="btn btn-secondary" onclick="Modal.close()">${t('cancel')}</button>
              <button class="btn btn-primary" id="modal-confirm-btn">${confirmLabel || t('saveChanges')}</button>
            </div>
          </div>
        `;
        container.classList.add('active');
        document.getElementById('modal-confirm-btn').onclick = () => {
          if (onConfirm()) Modal.close();
        };
      },
      close() {
        document.getElementById('modal-container').classList.remove('active');
      }
    };

    // Very first thing a brand-new WeChat login sees: since there's no
    // email/password sign-up form to type a name into, we ask for it once,
    // right after the QR scan confirms. `profile.name` is '' (the
    // handle_new_user default) until this runs — that emptiness IS the
    // "is this a first login" flag, no separate column needed. Blocking:
    // no backdrop-click-to-close, no X — a name is required to continue.
    // `onDone` runs after the name is saved (or immediately if a name
    // already exists), so callers can chain the welcome-credits modal etc.
    function maybeShowNameRequiredModal(onDone) {
      if (!state.user || state.user.role === 'admin' || state.user.name) {
        if (onDone) onDone();
        return;
      }
      const container = document.getElementById('modal-container');
      container.innerHTML = `
        <div class="modal welcome-credits-modal">
          <div class="modal-body" style="text-align:center; padding-top:1.75rem;">
            <div style="font-size:2.25rem; margin-bottom:0.5rem;">👋</div>
            <h3 style="font-size:1.25rem; font-weight:700; margin-bottom:0.6rem;">${t('nameRequiredTitle')}</h3>
            <p class="muted" style="max-width:420px; margin:0 auto 1rem;">${t('nameRequiredBody')}</p>
            <input type="text" id="name-required-input" class="form-input" style="max-width:320px; margin:0 auto;" placeholder="${t('nameRequiredPlaceholder')}" autofocus />
          </div>
          <div class="modal-footer" style="justify-content:center; border-top:none; padding-top:0.5rem;">
            <button class="btn btn-primary" id="name-required-ok">${t('nameRequiredCta')}</button>
          </div>
        </div>
      `;
      container.classList.add('active');
      const input = document.getElementById('name-required-input');
      const submit = async () => {
        const name = input.value.trim();
        if (!name) { Toast.show(t('nameRequiredError'), 'danger'); input.focus(); return; }
        state.user.name = name;
        const localUser = state.users.find(u => u.id === state.user.id);
        if (localUser) localUser.name = name;
        if (isSupabaseConfigured()) {
          await DataLayer.updateProfile(state.user.id, { name });
        } else {
          const session = JSON.parse(localStorage.getItem('scanser_session') || 'null');
          if (session) { session.name = name; localStorage.setItem('scanser_session', JSON.stringify(session)); }
        }
        Modal.close();
        Router.navigate(state.currentRoute || 'home');
        if (onDone) onDone();
      };
      document.getElementById('name-required-ok').onclick = submit;
      input.onkeydown = (e) => { if (e.key === 'Enter') submit(); };
    }

    // Every-login announcement: since there's no real WeChat AppID/Secret
    // and no real provider keys wired up yet (see API_CONFIG / DEMO_PLACEHOLDER_KEY),
    // this tells whoever just signed in exactly what's genuinely working
    // right now vs. what's still waiting on a backend connection — shown
    // every sign-in (not just the first) so it stays accurate for testers
    // switching accounts. Chained after maybeShowNameRequiredModal, before
    // maybeShowWelcomeCreditsModal — see WeChatAuth.completeLogin().
    function maybeShowDemoInfoModal(onDone) {
      if (!state.user || state.user.role === 'admin') { if (onDone) onDone(); return; }
      const works = (t('demoInfoWorksItems') || '').split('|').filter(Boolean);
      const pending = (t('demoInfoPendingItems') || '').split('|').filter(Boolean);
      const container = document.getElementById('modal-container');
      container.innerHTML = `
        <div class="modal demo-info-modal">
          <div class="modal-body" style="padding-top:1.6rem;">
            <div style="text-align:center; margin-bottom:1rem;">
              <div style="font-size:2rem; margin-bottom:0.4rem;">🧪</div>
              <h3 style="font-size:1.15rem; font-weight:700; margin-bottom:0.4rem;">${t('demoInfoTitle')}</h3>
              <p class="muted" style="max-width:440px; margin:0 auto;">${t('demoInfoIntro')}</p>
            </div>
            <div class="demo-info-cols">
              <div class="demo-info-col demo-info-col-ok">
                <h4>${Icons.statusOk} ${t('demoInfoWorksTitle')}</h4>
                <ul>${works.map(i => `<li>${i}</li>`).join('')}</ul>
              </div>
              <div class="demo-info-col demo-info-col-pending">
                <h4>${Icons.statusWarn} ${t('demoInfoPendingTitle')}</h4>
                <ul>${pending.map(i => `<li>${i}</li>`).join('')}</ul>
              </div>
            </div>
          </div>
          <div class="modal-footer" style="justify-content:center; border-top:none; padding-top:0.25rem;">
            <button class="btn btn-primary" id="demo-info-ok">${t('demoInfoCta')}</button>
          </div>
        </div>
      `;
      container.classList.add('active');
      document.getElementById('demo-info-ok').onclick = () => { Modal.close(); if (onDone) onDone(); };
    }

    // First-ever-login announcement: explains the per-tool free-credit
    // policy once, right after a new (or returning-but-never-seen-it)
    // user signs in. Tracked per user id in localStorage so it only ever
    // shows once per account, on any device, not once per browser.
    function maybeShowWelcomeCreditsModal() {
      if (!state.user || state.user.role === 'admin') return;
      const flagKey = 'scanser_seen_credit_intro_' + state.user.id;
      if (localStorage.getItem(flagKey) === 'true') return;
      localStorage.setItem(flagKey, 'true');
      const n = creditSettings.free_credits_per_tool || DEFAULT_FREE_CREDITS_PER_TOOL;
      const container = document.getElementById('modal-container');
      container.innerHTML = `
        <div class="modal welcome-credits-modal">
          <div class="modal-body" style="text-align:center; padding-top:1.75rem;">
            <div style="font-size:2.25rem; margin-bottom:0.5rem;">🎉</div>
            <h3 style="font-size:1.25rem; font-weight:700; margin-bottom:0.6rem;">${t('welcomeModalTitle')}</h3>
            <p class="muted" style="max-width:420px; margin:0 auto;">${t('welcomeModalBody').replace('{n}', n)}</p>
          </div>
          <div class="modal-footer" style="justify-content:center; border-top:none; padding-top:0.5rem;">
            <button class="btn btn-primary" id="welcome-credits-ok">${t('welcomeModalCta')}</button>
          </div>
        </div>
      `;
      container.classList.add('active');
      document.getElementById('welcome-credits-ok').onclick = () => Modal.close();
    }

    /**
     * Mock integration layer. Every tool call is routed through here.
     * Swap the marked block for a real fetch() call to the provider
     * that owns the API key linked to this tool.
     */
    const ToolAPI = {
      async process(tool, payload) {
        const key = state.apiKeys.find(k => k.id === tool.apiKeyId && k.status === 'active');
        if (!key) {
          throw new Error('NOT_CONNECTED');
        }
        if (key.quota && key.used >= key.quota) {
          throw new Error('QUOTA_EXCEEDED');
        }

        // ============================================================
        // TODO: PRODUCTION INTEGRATION
        // Replace this mock block with a real call to the provider
        // whose key is linked to this tool, e.g.:
        //
        // const res = await fetch(`${key.baseUrl}/v1/analyze`, {
        //   method: 'POST',
        //   headers: {
        //     'Authorization': `Bearer ${key.key}`,
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify(payload)
        // });
        // if (!res.ok) throw new Error('API_ERROR');
        // return await res.json();
        // ============================================================
        await new Promise(resolve => setTimeout(resolve, 900));

        key.used = (key.used || 0) + 1;
        if (key.quota && key.used >= Math.round(key.quota * 0.9)) {
          Notify.push(`${key.provider} is near its monthly quota (${key.used}/${key.quota}).`, 'warning', 'apikeys');
        }

        if (tool.type === 'upload') {
          const total = Math.floor(Math.random() * 24);
          const internet = Math.floor(total * (0.3 + Math.random() * 0.4));
          const publications = Math.floor((total - internet) * (0.3 + Math.random() * 0.4));
          const student = Math.max(0, total - internet - publications);
          return {
            score: total + '%',
            matches: Math.floor(total * 3.2) + (total > 0 ? 2 : 0),
            breakdown: { internet, publications, student }
          };
        }

        const output = payload.text.split('. ').map(s => s.trim()).filter(Boolean).map(s => s + '.').join(' ');
        const before = Math.floor(Math.random() * 20) + 72; // 72-91%
        const after = Math.floor(Math.random() * 14) + 4;   // 4-17%
        return { output, aiScoreBefore: before, aiScoreAfter: after, humanLike: 100 - after };
      },

      /**
       * Lightweight health check for a linked key, used by the "Test Connection"
       * button on the API Keys page and inside the Add Key modal.
       * TODO: PRODUCTION INTEGRATION — replace with a real ping to the
       * provider's status/health endpoint, e.g. GET `${baseUrl}/v1/ping`.
       */
      async testConnection(key) {
        const start = Date.now();
        await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 500));
        const latency = Date.now() - start;
        const ok = !!(key.key && key.key.length >= 8);
        return { ok, latency, message: ok ? 'OK' : 'Missing or invalid key' };
      }
    };

    /* ==========================================================================
       SECTION 8: HTML VIEWS (Templates Engine)
       ========================================================================== */
    const Views = {

      // Public marketing homepage — browsable with no session at all.
      // Clicking any service or a gated nav item routes through
      // Router.requireAuth(), which pops the WeChat QR overlay for anyone
      // not signed in yet instead of hard-redirecting them away.
      Home() {
        const collapsed = state.sidebarCollapsed ? 'collapsed' : '';
        const loggedIn = AuthService.isAuthenticated();
        const navItems = getSidebarNavItems();
        const unreadCount = state.notifications.filter(n => !n.read).length;

        const heroSlides = [
          { badge: t('heroEyebrow'), title: t('heroTitle'), sub: t('heroSubtitle'), cta: t('heroCta'), route: 'reduce-ai-rate', grad: 'linear-gradient(120deg,#FF9A44 0%,#E8384A 100%)' },
          { badge: t('heroSlide2Eyebrow'), title: t('heroSlide2Title'), sub: t('heroSlide2Subtitle'), cta: t('heroSlide2Cta'), route: 'plagiarism-report', grad: 'linear-gradient(120deg,#4A90E2 0%,#7C3AED 100%)' },
          { badge: t('heroSlide3Eyebrow'), title: t('heroSlide3Title'), sub: t('heroSlide3Subtitle'), cta: t('heroSlide3Cta'), route: 'paper-check', grad: 'linear-gradient(120deg,#10B981 0%,#0EA5E9 100%)' }
        ];

        // Quick-nav cards = the exact same 6 SERVICES as the sidebar, just
        // rendered as a grid. One array, two presentations — never drifts.
        const quickCards = state.tools.map(tool => ({
          route: tool.id, icon: iconFor(tool), tone: tool.tone,
          tag: tool.id === 'reduce-ai-rate' ? t('tagPopular') : (tool.id === 'paper-check' ? t('tagBest') : ''),
          title: svcTitle(tool), desc: svcDesc(tool), chips: tool.chips || []
        }));

        const guideCats = [
          { id: 'all', label: t('guideTabAll') },
          { id: 'guide', label: t('guideTabGuides') },
          { id: 'tech', label: t('guideTabTech') },
          { id: 'tips', label: t('guideTabTips') },
          { id: 'reviews', label: t('guideTabReviews') }
        ];
        const manifest = (window.ARTICLES_MANIFEST || []);
        const guideArticles = manifest.map(a => ({
          id: a.id, cat: a.category, color: a.color, icon: Icons[a.icon] || Icons.reports,
          title: state.language === 'zh' ? a.titleZh : a.titleEn,
          desc: state.language === 'zh' ? a.excerptZh : a.excerptEn,
          date: a.date
        }));

        const notifBellHtml = `
          <div class="dropdown">
            <button class="theme-toggle" id="notif-dropdown-btn" style="position:relative;" title="${t('notifications')}">
              ${Icons.bell}
              <span id="notif-badge" class="notif-badge ${loggedIn && unreadCount > 0 ? '' : 'hidden'}">${unreadCount > 9 ? '9+' : unreadCount}</span>
            </button>
            <div class="dropdown-menu notif-panel" id="notif-menu">
              <div class="flex justify-between items-center" style="padding:0.5rem 1rem 0.25rem;">
                <strong style="font-size:0.85rem;">${t('notifications')}</strong>
                ${loggedIn && state.notifications.length ? `<button class="btn-sm" style="color:var(--primary); font-weight:500;" id="notif-mark-all">${t('markAllRead')}</button>` : ''}
              </div>
              <div style="max-height:320px; overflow-y:auto;">
                ${loggedIn && state.notifications.length ? state.notifications.slice(0, 12).map(n => `
                  <div class="notif-item ${n.read ? '' : 'unread'}" data-route="${n.route || ''}" data-id="${n.id}">
                    <span class="notif-dot notif-dot-${n.type}"></span>
                    <div>
                      <div style="font-size:0.8rem; color:var(--text);">${n.message}</div>
                      <div style="font-size:0.7rem; color:var(--text-light); margin-top:0.15rem;">${Notify.timeAgo(n.ts)}</div>
                    </div>
                  </div>
                `).join('') : `<p class="muted" style="padding:0.75rem 1rem; margin:0;">${t('noNotifications')}</p>`}
              </div>
            </div>
          </div>`;

        return `
          <div id="home-screen">
            <aside class="sidebar public-sidebar ${collapsed}" id="sidebar">
              <div class="sidebar-header">
                <div class="sidebar-logo">
                  <div class="auth-brand-logo" style="width:32px; height:32px; font-size:1rem; background:linear-gradient(135deg,#FF4D6D,#4A90E2);">${t('brandName').charAt(0)}</div>
                  <span>${t('brandName')}</span>
                </div>
                <button class="btn-icon" id="sidebar-toggle">${Icons.collapse}</button>
              </div>
              <nav class="sidebar-menu">
                ${navItems.map(item => `
                  <a href="#" class="nav-item ${state.currentRoute === item.route ? 'active' : ''}" data-route="${item.route}" data-gated="${item.gated}">
                    ${item.icon} <span class="nav-text">${item.label}</span>
                  </a>
                `).join('')}
                <a href="#" class="nav-item" id="home-join-group-link">
                  ${Icons.access} <span class="nav-text">${t('publicNavJoinGroup')}</span>
                </a>
                ${loggedIn ? `
                  <a href="#" class="nav-item ${state.currentRoute === 'settings' ? 'active' : ''}" data-route="settings">
                    ${Icons.settings} <span class="nav-text">${t('navSettings')}</span>
                  </a>
                ` : ''}
              </nav>
            </aside>
            <div class="sidebar-backdrop" id="sidebar-backdrop"></div>

            <div class="main-wrapper">
              <header class="navbar public-navbar">
                <button class="btn-icon mobile-menu-btn" id="mobile-sidebar-toggle" aria-label="Menu">${Icons.menu}</button>
                <h1 class="public-navbar-title">${t('publicNavHome')}</h1>
                <div class="flex items-center gap-4">
                  <button class="theme-toggle" id="theme-toggle-btn" title="Toggle dark mode">${state.theme === 'dark' ? Icons.sun : Icons.moon}</button>
                  <button class="theme-toggle" id="lang-toggle-btn" title="Language">${state.language === 'zh' ? 'EN' : '中'}</button>
                  ${notifBellHtml}
                  ${loggedIn
                    ? `<div class="dropdown">
                        <button class="btn btn-secondary btn-sm" id="profile-dropdown-btn">
                          ${Icons.user}<span class="profile-name">${state.user.name}</span>
                        </button>
                        <div class="dropdown-menu" id="profile-menu">
                          <div style="padding:0.5rem 1rem; border-bottom:1px solid var(--border); font-size:0.75rem; color:var(--text-muted)">
                            Role: <strong>${state.user.role === 'admin' ? t('adminRole') : t('userRole')}</strong>
                          </div>
                          <a href="#" class="dropdown-item" id="logout-btn" style="color:var(--danger)">${t('logout')}</a>
                        </div>
                      </div>`
                    : `<button class="btn btn-primary public-login-btn" id="home-login-btn">${Icons.user}<span>${t('publicLoginBtn')}</span></button>`}
                </div>
              </header>

              <main class="public-main">
                <section class="hero-banner" id="hero-banner">
                  <div class="hero-slides" id="hero-slides">
                    ${heroSlides.map((s, i) => `
                      <div class="hero-slide ${i === 0 ? 'active' : ''}" style="background:${s.grad}" data-index="${i}">
                        <div class="hero-slide-inner">
                          <div class="hero-badge">${s.badge}</div>
                          <h2>${s.title}</h2>
                          <p>${s.sub}</p>
                          <button class="btn hero-cta" data-route="${s.route}" data-gated="true">${s.cta} →</button>
                        </div>
                      </div>
                    `).join('')}
                  </div>
                  <div class="hero-dots" id="hero-dots">
                    ${heroSlides.map((_, i) => `<span class="hero-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>`).join('')}
                  </div>
                </section>

                <section class="section-block">
                  <div class="section-heading">
                    <h2><span class="heading-bar"></span>${t('quickNavTitle')}</h2>
                    <p>${t('quickNavSubtitle')}</p>
                  </div>
                  <div class="quick-nav-grid">
                    ${quickCards.map(c => `
                      <div class="service-card tone-${c.tone}" data-route="${c.route}" data-gated="true">
                        <div class="service-card-top">
                          <div class="service-icon">${c.icon}</div>
                          ${c.tag ? `<span class="service-tag">${c.tag}</span>` : ''}
                        </div>
                        <h3>${c.title}</h3>
                        <p>${c.desc}</p>
                        <div class="service-chips">${c.chips.map(ch => `<span>${ch}</span>`).join('')}</div>
                        <div class="service-cta">${t('getStarted')} →</div>
                      </div>
                    `).join('')}
                  </div>
                </section>

                <section class="section-block">
                  <div class="section-heading">
                    <h2><span class="heading-bar"></span>${t('guideTitle')}</h2>
                    <p>${t('guideSubtitle')}</p>
                  </div>
                  <div class="guide-tabs" id="guide-tabs">
                    ${guideCats.map((c, i) => `
                      <button class="guide-tab ${i === 0 ? 'active' : ''}" data-cat="${c.id}">
                        ${c.label} <span class="guide-tab-count">${c.id === 'all' ? guideArticles.length : guideArticles.filter(a => a.cat === c.id).length}</span>
                      </button>
                    `).join('')}
                  </div>
                  <div class="guide-grid" id="guide-grid">
                    ${guideArticles.map(a => `
                      <div class="guide-card" data-cat="${a.cat}">
                        <div class="guide-card-cover" style="background:linear-gradient(135deg, ${a.color}, ${a.color}CC);">${a.icon}</div>
                        <div class="guide-card-body">
                          <span class="guide-card-pill" style="color:${a.color}; background:${a.color}1A;">${(guideCats.find(c => c.id === a.cat) || {}).label || ''}</span>
                          <span class="guide-card-date">${a.date}</span>
                          <h4>${a.title}</h4>
                          <p>${a.desc}</p>
                          <a class="guide-card-readmore" href="articles/${a.id}.html" target="_blank" rel="noopener">${t('guideReadMore') || 'Read more'} →</a>
                        </div>
                      </div>
                    `).join('')}
                  </div>
                  <div class="guide-pagination" id="guide-pagination"></div>
                </section>

                <section class="join-group-banner">
                  <div>
                    <h3>${t('joinGroupTitle')}</h3>
                    <p>${t('joinGroupDesc')}</p>
                  </div>
                  <div class="join-group-qr" id="join-group-qr"><canvas id="join-group-qr-canvas" width="112" height="112"></canvas></div>
                </section>
              </main>
            </div>
          </div>
        `;
      },

      Layout(content) {
        const collapsed = state.sidebarCollapsed ? 'collapsed' : '';
        const roleLabel = state.user.role === 'admin' ? t('adminRole') : (state.user.role === 'viewer' ? t('viewerRole') : t('userRole'));
        const unreadCount = state.notifications.filter(n => !n.read).length;
        const navItems = getSidebarNavItems();

        return `
          <div id="app-screen">
            <aside class="sidebar ${collapsed}" id="sidebar">
              <div class="sidebar-header">
                <div class="sidebar-logo">
                  <div class="auth-brand-logo" style="width:32px; height:32px; font-size:1rem;">S</div>
                  <span>Scanser</span>
                </div>
                <button class="btn-icon" id="sidebar-toggle">${Icons.collapse}</button>
              </div>

              <nav class="sidebar-menu">
                ${navItems.map(item => `
                  <a href="#" class="nav-item ${state.currentRoute === item.route ? 'active' : ''}" data-route="${item.route}">
                    ${item.icon} <span class="nav-text">${item.label}</span>
                  </a>
                `).join('')}

                <a href="#" class="nav-item" id="app-join-group-link">
                  ${Icons.access} <span class="nav-text">${t('publicNavJoinGroup')}</span>
                </a>
                <a href="#" class="nav-item ${state.currentRoute === 'settings' ? 'active' : ''}" data-route="settings">
                  ${Icons.settings} <span class="nav-text">${t('navSettings')}</span>
                </a>
              </nav>
            </aside>

            <div class="sidebar-backdrop" id="sidebar-backdrop"></div>

            <div class="main-wrapper">
              <header class="navbar public-navbar">
                <button class="btn-icon mobile-menu-btn" id="mobile-sidebar-toggle" aria-label="Menu">${Icons.menu}</button>
                <h1 class="public-navbar-title">${pageTitleForRoute(state.currentRoute)}</h1>

                <div class="flex items-center gap-4">
                  <button class="theme-toggle" id="theme-toggle-btn" title="Toggle dark mode">${state.theme === 'dark' ? Icons.sun : Icons.moon}</button>
                  <button class="theme-toggle" id="lang-toggle-btn" title="Language">${state.language === 'zh' ? 'EN' : '中'}</button>

                  <div class="dropdown">
                    <button class="theme-toggle" id="notif-dropdown-btn" style="position:relative;" title="${t('notifications')}">
                      ${Icons.bell}
                      <span id="notif-badge" class="notif-badge ${unreadCount === 0 ? 'hidden' : ''}">${unreadCount > 9 ? '9+' : unreadCount}</span>
                    </button>
                    <div class="dropdown-menu notif-panel" id="notif-menu">
                      <div class="flex justify-between items-center" style="padding:0.5rem 1rem 0.25rem;">
                        <strong style="font-size:0.85rem;">${t('notifications')}</strong>
                        ${state.notifications.length ? `<button class="btn-sm" style="color:var(--primary); font-weight:500;" id="notif-mark-all">${t('markAllRead')}</button>` : ''}
                      </div>
                      <div style="max-height:320px; overflow-y:auto;">
                        ${state.notifications.length ? state.notifications.slice(0, 12).map(n => `
                          <div class="notif-item ${n.read ? '' : 'unread'}" data-route="${n.route || ''}" data-id="${n.id}">
                            <span class="notif-dot notif-dot-${n.type}"></span>
                            <div>
                              <div style="font-size:0.8rem; color:var(--text);">${n.message}</div>
                              <div style="font-size:0.7rem; color:var(--text-light); margin-top:0.15rem;">${Notify.timeAgo(n.ts)}</div>
                            </div>
                          </div>
                        `).join('') : `<p class="muted" style="padding:0.75rem 1rem; margin:0;">${t('noNotifications')}</p>`}
                      </div>
                    </div>
                  </div>

                  <div class="dropdown">
                    <button class="btn btn-secondary btn-sm" id="profile-dropdown-btn">
                      ${Icons.user}
                      <span class="profile-name">${state.user.name}</span>
                    </button>
                    <div class="dropdown-menu" id="profile-menu">
                      <div style="padding:0.5rem 1rem; border-bottom:1px solid var(--border); font-size:0.75rem; color:var(--text-muted)">
                        Role: <strong>${roleLabel}</strong>
                      </div>
                      <a href="#" class="dropdown-item" id="logout-btn" style="color:var(--danger)">
                        ${t('logout')}
                      </a>
                    </div>
                  </div>
                </div>
              </header>

              <main class="content-container">
                ${content}
              </main>
            </div>
          </div>
        `;
      },

      ranking() {
        const rows = [
          { name: 'GPT-4 class', ai: 6, plag: 2 },
          { name: 'Claude class', ai: 9, plag: 3 },
          { name: 'Gemini class', ai: 11, plag: 4 },
          { name: 'Open-source 70B', ai: 18, plag: 7 },
          { name: 'Open-source 8B', ai: 27, plag: 9 }
        ];
        return `
          <div class="page-header">
            <div>
              <h1 class="page-title">${t('publicNavRanking')}</h1>
              <p style="color:var(--text-muted); font-size:0.9rem;">${state.language === 'zh' ? '各类模型在改写后的平均AI检出率与查重率（越低越好）。' : 'Average AI-detection and similarity rate after rewriting, by model family (lower is better).'}</p>
            </div>
          </div>
          <div class="card">
            <div class="table-container">
              <table class="table">
                <thead><tr><th>${state.language === 'zh' ? '模型' : 'Model'}</th><th>${state.language === 'zh' ? '平均AI检出率' : 'Avg. AI detection'}</th><th>${state.language === 'zh' ? '平均查重率' : 'Avg. similarity'}</th></tr></thead>
                <tbody>
                  ${rows.map((r, i) => `
                    <tr>
                      <td><strong>#${i + 1}</strong> &nbsp; ${r.name}</td>
                      <td><span class="badge ${r.ai > 15 ? 'badge-danger' : 'badge-success'}">${r.ai}%</span></td>
                      <td><span class="badge ${r.plag > 5 ? 'badge-danger' : 'badge-success'}">${r.plag}%</span></td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        `;
      },

      toolPage(tool) {
        const key = state.apiKeys.find(k => k.id === tool.apiKeyId);
        const connected = key && key.status === 'active';
        const isDemoKey = connected && key.demo;
        const statusBanner = connected
          ? (isDemoKey
              ? `<div class="tool-status tool-status-demo">${Icons.statusWarn} ${t('demoToolBanner')}</div>`
              : `<div class="tool-status tool-status-connected">${Icons.statusOk} ${t('connectedVia')} ${key.provider}</div>`)
          : `<div class="tool-status tool-status-disconnected">${Icons.statusWarn} ${t('notConnectedMsg')}</div>`;

        const toolCredits = state.user && state.user.role !== 'admin' ? getToolCredits(tool.id) : null;
        const creditBadge = toolCredits === null ? '' : `
          <div class="tool-status ${toolCredits > 0 ? 'tool-status-connected' : 'tool-status-disconnected'}" style="margin-top:0.5rem;">
            ${toolCredits > 0 ? Icons.statusOk : Icons.statusWarn}
            ${toolCredits > 0
              ? `<strong>${toolCredits}</strong> ${t('toolCreditsRemaining')} · ${creditSettings.scan_cost || 1} ${t('creditsPerUse')}`
              : t('toolCreditsExhausted')}
          </div>`;

        // Shared header: icon + bilingual title/subtitle, then a short
        // usage-guide blurb with a "Learn more" link out to this service's
        // article page (articles/{id}.html) — same shape for all 6 services.
        const article = (window.ARTICLES_MANIFEST || []).find(a => a.id === tool.articleId);
        const guideBlurb = article ? (state.language === 'zh' ? article.excerptZh : article.excerptEn) : svcDesc(tool);
        const header = `
          <div class="page-header">
            <div class="tool-page-header">
              <div class="tool-page-icon tone-${tool.tone}">${iconFor(tool)}</div>
              <div>
                <h1 class="page-title">${svcTitle(tool)}</h1>
                <p class="tool-page-subtitle">${svcDesc(tool)}</p>
              </div>
            </div>
          </div>
          <div class="tool-guide-card">
            <p>${guideBlurb}</p>
            ${article ? `<a class="tool-guide-learn-more" href="articles/${article.id}.html" target="_blank" rel="noopener">${t('learnMore')} →</a>` : ''}
          </div>`;

        if (tool.type === 'upload') {
          const history = state.scans.filter(s => s.toolId === tool.id);
          return `
            ${header}
            ${statusBanner}
            ${creditBadge}
            <div class="grid-2col">
              <div class="card">
                <h3 style="font-size:1.1rem; font-weight:600; margin-bottom:1.25rem;">${t('uploadDoc')}</h3>
                <form id="tool-upload-form">
                  <div class="form-group">
                    <label class="form-label">${t('docTitle')}</label>
                    <input type="text" id="doc-title" class="form-input" placeholder="e.g. Thesis_Final_Draft" required>
                  </div>
                  <div class="form-group">
                    <label class="form-label">${t('wordCount')}</label>
                    <input type="number" id="doc-words" class="form-input" placeholder="3500">
                  </div>
                  <div class="form-group">
                    <label class="form-label">${t('notes')}</label>
                    <textarea id="doc-notes" class="form-textarea" placeholder="Optional submission notes..."></textarea>
                  </div>
                  <div style="border: 2px dashed var(--border); padding:2rem; text-align:center; border-radius:var(--radius-sm); margin-bottom:1.25rem; background:var(--bg);">
                    <p style="font-size:0.875rem; color:var(--text-muted);">${t('dragDrop')}</p>
                  </div>
                  <button type="submit" class="btn btn-primary w-full">${t('submitProcess')}</button>
                </form>
              </div>

              <div class="card">
                <h3 style="font-size:1.1rem; font-weight:600; margin-bottom:1.25rem;">${t('scanHistory')}</h3>
                ${history.length ? `
                <div class="table-container">
                  <table class="table">
                    <thead><tr><th>Document</th><th>Score</th><th>Date</th></tr></thead>
                    <tbody>
                      ${history.map(s => `
                        <tr>
                          <td>${s.title}</td>
                          <td><span class="badge ${parseInt(s.score) > 15 ? 'badge-danger' : 'badge-success'}">${s.score}</span></td>
                          <td>${s.date}</td>
                        </tr>
                      `).join('')}
                    </tbody>
                  </table>
                </div>` : `<p class="muted" style="margin-bottom:0;">${t('noScansYet')}</p>`}
              </div>
            </div>
          `;
        }

        // type === 'text'
        return `
          ${header}
          ${statusBanner}
          ${creditBadge}
          <div class="grid-2col">
            <div class="card">
              <h3 style="font-size:1rem; font-weight:600; margin-bottom:0.75rem;">${t('inputText')}</h3>
              <textarea id="tool-text-input" class="form-textarea" style="height:250px;" placeholder="Paste text here..."></textarea>
              <div class="flex justify-between items-center" style="margin-top:1rem;">
                <button class="btn btn-secondary btn-sm" id="tool-text-clear">${t('clear')}</button>
                <button class="btn btn-primary" id="tool-text-process">${t('processStealth')}</button>
              </div>
            </div>
            <div class="card">
              <h3 style="font-size:1rem; font-weight:600; margin-bottom:0.75rem;">${t('outputText')}</h3>
              <textarea id="tool-text-output" class="form-textarea" style="height:250px;" readonly placeholder="Output will appear here..."></textarea>
              <div class="flex justify-between items-center" style="margin-top:1rem;">
                <span class="badge badge-success hidden" id="tool-text-badge">Done</span>
                <button class="btn btn-secondary btn-sm" id="tool-text-copy">${t('copy')}</button>
              </div>
            </div>
          </div>
        `;
      },

      settings() {
        return `
          <div class="page-header"><h1 class="page-title">${t('navSettings')}</h1></div>

          <div class="card" style="max-width:600px; margin-bottom:1.5rem;">
            <form id="settings-form">
              <div class="form-group">
                <label class="form-label">${t('name')}</label>
                <input type="text" id="settings-name-input" class="form-input" value="${state.user.name}" required />
              </div>
              <div class="form-group">
                <label class="form-label">${t('uniqueIdLabel')}</label>
                <div style="display:flex; gap:0.5rem; align-items:center;">
                  <input type="text" id="settings-unique-id" class="form-input" style="font-family:monospace; letter-spacing:0.03em;" value="${state.user.uniqueId || ''}" disabled />
                  <button type="button" class="btn btn-secondary btn-sm" id="settings-copy-id">${t('copy')}</button>
                </div>
                <p class="muted" style="font-size:0.78rem; margin-top:0.35rem;">${t('uniqueIdHint')}</p>
              </div>
              <button type="submit" class="btn btn-primary" style="margin-top:1rem;">${t('saveChanges')}</button>
            </form>
          </div>

          ${state.user.role !== 'admin' ? `
          <div class="card" style="max-width:600px; margin-bottom:1.5rem;">
            <h3 style="font-size:1.1rem; font-weight:600; margin-bottom:0.35rem;">${t('subscriptionCardTitle')}</h3>
            <p class="muted">${t('subscriptionCardDesc')}</p>
            <div style="background:var(--bg); border:1px solid var(--border); border-radius:var(--radius-sm); padding:0.9rem 1rem; margin:1rem 0; white-space:pre-wrap; font-size:0.85rem; line-height:1.6;">${
              creditSettings.payment_instructions
                ? creditSettings.payment_instructions.replace(/</g, '&lt;')
                : `<span class="muted">${t('subscriptionNotSetYet')}</span>`
            }</div>
            <h4 style="font-size:0.85rem; font-weight:600; margin-bottom:0.6rem; color:var(--text-muted);">${t('yourToolBalances')}</h4>
            <div style="display:flex; flex-direction:column; gap:0.5rem;">
              ${state.tools.filter(tool => (state.userAccess[state.user.id] || []).includes(tool.id)).map(tool => `
                <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.85rem; padding:0.4rem 0; border-bottom:1px solid var(--border);">
                  <span>${svcTitle(tool)}</span>
                  <strong style="color:${getToolCredits(tool.id) > 0 ? 'var(--success)' : 'var(--danger)'};">${getToolCredits(tool.id)} ${t('toolCreditsRemaining')}</strong>
                </div>
              `).join('')}
            </div>
          </div>
          ` : ''}

          ${state.user.role === 'admin' ? `
          <div class="card" style="max-width:760px; margin-bottom:1.5rem;">
            <h3 style="font-size:1.1rem; font-weight:600; margin-bottom:0.35rem;">${t('creditSettingsTitle')}</h3>
            <p class="muted">${t('creditSettingsDesc')}</p>
            <form id="credit-settings-form" style="max-width:420px;">
              <div class="form-group">
                <label class="form-label">${t('freeCreditsPerToolLabel')}</label>
                <input type="number" min="0" step="1" id="free-credits-input" class="form-input" value="${creditSettings.free_credits_per_tool}">
              </div>
              <div class="form-group">
                <label class="form-label">${t('costPerUseLabel')}</label>
                <input type="number" min="1" step="1" id="cost-per-use-input" class="form-input" value="${creditSettings.scan_cost}">
              </div>
              <div class="form-group">
                <label class="form-label">${t('paymentInstructionsLabel')}</label>
                <textarea id="payment-instructions-input" class="form-input" rows="3" placeholder="${t('paymentInstructionsPlaceholder')}">${creditSettings.payment_instructions || ''}</textarea>
                <p class="muted" style="font-size:0.78rem; margin-top:0.35rem;">${t('paymentInstructionsHint')}</p>
              </div>
              <button type="submit" class="btn btn-primary">${t('saveCreditSettings')}</button>
            </form>
          </div>

          <div class="card" style="max-width:760px;">
            <h3 style="font-size:1.1rem; font-weight:600; margin-bottom:0.35rem;">${t('manageTools')}</h3>
            <p class="muted">${t('manageToolsDesc')}</p>

            <div style="background:var(--bg); border:1px solid var(--border); border-radius:var(--radius-sm); padding:0.75rem 1rem; margin-bottom:1.25rem; font-size:0.8rem; color:var(--text-muted); display:flex; gap:0.6rem; align-items:flex-start;">
              <span style="flex-shrink:0; margin-top:0.1rem;">${Icons.shield}</span>
              <span>${t('toolsCodeOnlyNotice')}</span>
            </div>

            <div>
              <h4 style="font-size:0.9rem; font-weight:600; margin-bottom:0.75rem; color:var(--text-muted);">${t('existingTools')}</h4>
              <div class="table-container">
                <table class="table">
                  <thead><tr><th>${t('toolName')}</th><th>${t('toolType')}</th><th>${t('status')}</th><th>${t('actions')}</th></tr></thead>
                  <tbody>
                    ${state.tools.map(tool => `
                      <tr>
                        <td><strong>${tool.name}</strong>${tool.builtIn ? ` <span class="badge badge-info" style="margin-left:0.4rem;">${t('builtIn')}</span>` : ''}</td>
                        <td>${tool.type === 'upload' ? t('typeUpload') : t('typeText')}</td>
                        <td><span class="badge ${tool.enabled ? 'badge-success' : 'badge-danger'}">${tool.enabled ? t('active') : t('disabled')}</span></td>
                        <td>
                          <button class="btn btn-secondary btn-sm" onclick="Events.toggleToolEnabled('${tool.id}')">${tool.enabled ? t('disable') : t('enable')}</button>
                        </td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          ` : ''}
        `;
      },

      access() {
        return `
          <div class="page-header">
            <h1 class="page-title">${t('userManagement')}</h1>
          </div>

          <div class="card">
            <div class="table-container">
              <table class="table">
                <thead>
                  <tr>
                    <th>${t('name')}</th><th>${t('uniqueIdLabel')}</th><th>${t('identifier')}</th><th>${t('role')}</th><th>${t('status')}</th>
                    <th>${t('allowedTools')}</th><th>${t('credits')}</th><th>${t('actions')}</th>
                  </tr>
                </thead>
                <tbody>
                  ${state.users.map(u => {
                    const allowedIds = u.role === 'admin' ? state.tools.map(x => x.id) : (state.userAccess[u.id] || []);
                    const allowedLabel = u.role === 'admin'
                      ? t('allToolsAdmin')
                      : (allowedIds.length
                          ? allowedIds.map(id => { const tool = state.tools.find(x => x.id === id); return tool ? tool.name : id; }).join(', ')
                          : t('noneAssigned'));
                    const perToolBal = (isSupabaseConfigured() && allToolCreditBalances[u.id])
                      ? allToolCreditBalances[u.id]
                      : (mockCredits[u.id] || {});
                    const total = allowedIds.reduce((sum, id) => sum + (perToolBal[id] !== undefined ? perToolBal[id] : creditSettings.free_credits_per_tool), 0);
                    return `
                    <tr>
                      <td><strong>${u.name || '—'}</strong></td>
                      <td>
                        <span style="font-family:monospace; font-size:0.8rem;">${u.uniqueId || '—'}</span>
                        ${u.uniqueId ? `<button class="btn btn-secondary btn-sm" style="padding:0.1rem 0.4rem; margin-left:0.3rem;" onclick="navigator.clipboard.writeText('${u.uniqueId}'); Toast.show('${t('copied')}','success');">${t('copy')}</button>` : ''}
                      </td>
                      <td style="max-width:180px;">
                        <span style="font-size:0.82rem; color:var(--text-muted);">${u.externalId || t('noneSet')}</span>
                        <button class="btn btn-secondary btn-sm" style="margin-left:0.3rem;" onclick="Events.openIdentifierModal('${u.id}')">${t('editIdentifier')}</button>
                      </td>
                      <td><span class="badge badge-info">${u.role}</span></td>
                      <td><span class="badge ${u.status === 'active' ? 'badge-success' : 'badge-danger'}">${u.status}</span></td>
                      <td style="max-width:240px; font-size:0.8rem; color:var(--text-muted);">${allowedLabel}</td>
                      <td>
                        <strong>${u.role === 'admin' ? '—' : total}</strong>
                        ${u.role !== 'admin' ? `<button class="btn btn-secondary btn-sm" style="margin-left:0.4rem;" onclick="Events.openCreditModal('${u.id}')">${t('adjust')}</button>` : ''}
                      </td>
                      <td>
                        ${u.role !== 'admin' ? `<button class="btn btn-secondary btn-sm" onclick="Events.openAccessModal('${u.id}')">${t('manageAccess')}</button>` : ''}
                        <button class="btn btn-secondary btn-sm" onclick="Events.toggleUserStatus('${u.id}')">${u.status === 'active' ? t('disable') : t('enable')}</button>
                        <button class="btn btn-danger btn-sm" onclick="Events.deleteUser('${u.id}')">${t('delete')}</button>
                      </td>
                    </tr>`;
                  }).join('')}
                </tbody>
              </table>
            </div>
          </div>
        `;
      },

      usage() {
        const days = getLast7DaysCounts();
        const todayCount = state.scans.filter(s => s.date === todayStr()).length;
        const monthPrefix = todayStr().slice(0, 7);
        const monthCount = state.scans.filter(s => s.date && s.date.slice(0, 7) === monthPrefix).length;
        const activeUsersCount = state.users.filter(u => u.status === 'active').length;
        const completed = state.scans.filter(s => s.status === 'completed').length;
        const successRate = state.scans.length ? Math.round((completed / state.scans.length) * 100) : 0;

        return `
          <div class="page-header"><h1 class="page-title">${t('navUsage')}</h1></div>

          <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:1.25rem; margin-bottom:1.5rem;">
            <div class="card"><div style="color:var(--text-muted); font-size:0.85rem;">${t('todaysUsage')}</div><div class="stat-value" style="font-size:1.5rem; font-weight:700;">${todayCount}</div></div>
            <div class="card"><div style="color:var(--text-muted); font-size:0.85rem;">${t('monthlyUsage')}</div><div class="stat-value" style="font-size:1.5rem; font-weight:700;">${monthCount}</div></div>
            <div class="card"><div style="color:var(--text-muted); font-size:0.85rem;">${t('activeUsers')}</div><div class="stat-value" style="font-size:1.5rem; font-weight:700;">${activeUsersCount}</div></div>
            <div class="card"><div style="color:var(--text-muted); font-size:0.85rem;">${t('totalRequests')}</div><div class="stat-value" style="font-size:1.5rem; font-weight:700;">${state.scans.length ? successRate + '%' : '—'}</div></div>
          </div>

          <div class="card">
            <h3 style="font-size:1.1rem; font-weight:600; margin-bottom:1rem;">${t('requestActivity')}</h3>
            <canvas id="usageChart" height="120" style="width:100%;" data-days='${JSON.stringify(days)}'></canvas>
            ${state.scans.length === 0 ? `<p style="text-align:center; color:var(--text-muted); margin-top:0.75rem; font-size:0.85rem;">${t('noUsageYet')}</p>` : ''}
          </div>
        `;
      },

      apikeys() {
        return `
          <div class="page-header">
            <h1 class="page-title">${t('navApiKeys')}</h1>
          </div>

          <div style="background:var(--bg); border:1px solid var(--border); border-radius:var(--radius-sm); padding:0.75rem 1rem; margin-bottom:1.25rem; font-size:0.8rem; color:var(--text-muted); display:flex; gap:0.6rem; align-items:flex-start;">
            <span style="flex-shrink:0; margin-top:0.1rem;">${Icons.shield}</span>
            <span>${t('apiKeysCodeOnlyNotice')}</span>
          </div>

          <div class="card">
            <div class="table-container">
              <table class="table">
                <thead>
                  <tr><th>${t('provider')}</th><th>${t('linkToTool')}</th><th>${t('apiKey')}</th><th>${t('created')}</th><th>${t('status')}</th><th>${t('actions')}</th></tr>
                </thead>
                <tbody>
                  ${state.apiKeys.length ? state.apiKeys.map(k => {
                    const tool = state.tools.find(x => x.id === k.toolId);
                    // dbSourced rows come from api_keys_meta (real Supabase
                    // data) — that table only ever stores the last 4 chars
                    // for display, never the real secret (see schema.sql),
                    // so there's nothing to "Show" or "Copy" for these.
                    const keyCell = k.dbSourced
                      ? `•••• ${k.last4 || '????'}`
                      : (k.visible ? k.key : maskKey(k.key));
                    const actionsCell = k.dbSourced
                      ? `<span class="muted" style="font-size:0.8rem;">${t('managedInSupabase')}</span>`
                      : `<button class="btn btn-secondary btn-sm" onclick="Events.toggleKeyVisibility('${k.id}')">${k.visible ? 'Hide' : 'Show'}</button>
                         <button class="btn btn-secondary btn-sm" onclick="Events.copyKey('${k.id}')">${t('copy')}</button>`;
                    return `
                    <tr>
                      <td><strong>${k.provider}</strong> ${k.demo ? `<span class="badge badge-warning" style="margin-left:0.35rem; vertical-align:middle;">${t('demoKeyBadge')}</span>` : ''}</td>
                      <td>${tool ? `<span class="badge badge-info">${tool.name}</span>` : `<span class="badge badge-neutral">${t('unlinked')}</span>`}</td>
                      <td style="font-family:monospace;">${keyCell}</td>
                      <td>${k.created}</td>
                      <td><span class="badge ${k.status === 'active' ? 'badge-success' : 'badge-danger'}">${k.status}</span></td>
                      <td>${actionsCell}</td>
                    </tr>`;
                  }).join('') : `<tr><td colspan="6" style="text-align:center; color:var(--text-muted); padding:2rem;">${t('noApiKeysCodeOnly')}</td></tr>`}
                </tbody>
              </table>
            </div>
          </div>
        `;
      },

      reports() {
        const accessibleToolIds = state.tools
          .filter(tool => state.user.role === 'admin' || (state.userAccess[state.user.id] || []).includes(tool.id))
          .map(tool => tool.id);

        const filterTool = state.reportsFilterTool || 'all';
        const rows = state.scans
          .filter(s => accessibleToolIds.includes(s.toolId))
          .filter(s => filterTool === 'all' || s.toolId === filterTool);

        const toolOptions = state.tools.filter(tool => accessibleToolIds.includes(tool.id));

        return `
          <div class="page-header">
            <div>
              <h1 class="page-title">${t('reportsTitle')}</h1>
              <p style="color:var(--text-muted); font-size:0.9rem;">${t('reportsDesc')}</p>
            </div>
            <div class="flex gap-2" style="align-items:center;">
              <select id="reports-tool-filter" class="form-select" style="width:auto;">
                <option value="all" ${filterTool === 'all' ? 'selected' : ''}>${t('allTools')}</option>
                ${toolOptions.map(tool => `<option value="${tool.id}" ${filterTool === tool.id ? 'selected' : ''}>${tool.name}</option>`).join('')}
              </select>
              <button class="btn btn-secondary" id="reports-export-csv">${t('exportCsv')}</button>
              <button class="btn btn-secondary" id="reports-export-pdf">${t('exportPdf')}</button>
              ${state.user.role === 'admin' ? `<button class="btn btn-danger hidden" id="reports-bulk-delete">${t('bulkDelete')}</button>` : ''}
            </div>
          </div>

          <p class="muted" id="reports-selected-count" style="margin-bottom:0.75rem;"></p>

          <div class="card">
            <div class="table-container">
              <table class="table">
                <thead>
                  <tr>
                    ${state.user.role === 'admin' ? `<th style="width:2rem;"><input type="checkbox" id="reports-select-all"></th>` : ''}
                    <th>Document</th>
                    <th>Tool</th>
                    <th>${t('submittedBy')}</th>
                    <th>Score</th>
                    <th>Date</th>
                    <th>${t('actions')}</th>
                  </tr>
                </thead>
                <tbody>
                  ${rows.length ? rows.map(s => {
                    const tool = state.tools.find(x => x.id === s.toolId);
                    return `
                    <tr>
                      ${state.user.role === 'admin' ? `<td><input type="checkbox" class="reports-row-check" data-id="${s.id}"></td>` : ''}
                      <td><strong>${s.title}</strong></td>
                      <td>${tool ? tool.name : s.toolId}</td>
                      <td>${s.submittedBy || '—'}</td>
                      <td><span class="badge ${parseInt(s.score) > 15 ? 'badge-danger' : 'badge-success'}">${s.score}</span></td>
                      <td>${s.date}</td>
                      <td>
                        <button class="btn btn-secondary btn-sm" onclick="Events.viewReport('${s.id}')">${t('view')}</button>
                        <button class="btn btn-secondary btn-sm" onclick="Events.downloadReport('${s.id}')">${t('download')}</button>
                      </td>
                    </tr>`;
                  }).join('') : `<tr><td colspan="${state.user.role === 'admin' ? 7 : 6}" style="text-align:center; color:var(--text-muted); padding:2rem;">${t('noReportsYet')}</td></tr>`}
                </tbody>
              </table>
            </div>
          </div>
        `;
      },

      auditlog() {
        return `
          <div class="page-header">
            <div>
              <h1 class="page-title">${t('auditLogTitle')}</h1>
              <p style="color:var(--text-muted); font-size:0.9rem;">${t('auditLogDesc')}</p>
            </div>
          </div>

          <div class="card">
            <div class="table-container">
              <table class="table">
                <thead>
                  <tr><th style="width:180px;">${t('auditTime')}</th><th>${t('auditActor')}</th><th>${t('auditAction')}</th><th>${t('auditDetails')}</th></tr>
                </thead>
                <tbody>
                  ${state.auditLog.length ? state.auditLog.map(entry => `
                    <tr>
                      <td style="color:var(--text-muted); font-size:0.82rem;">${new Date(entry.ts).toLocaleString()}</td>
                      <td><strong>${entry.actor}</strong></td>
                      <td>${entry.action}</td>
                      <td style="color:var(--text-muted); font-size:0.85rem;">${entry.details || '—'}</td>
                    </tr>
                  `).join('') : `<tr><td colspan="4" style="text-align:center; color:var(--text-muted); padding:2rem;">${t('noAuditEntries')}</td></tr>`}
                </tbody>
              </table>
            </div>
          </div>
        `;
      }
    };

    /* ==========================================================================
       SECTION 9: EVENT LISTENERS & CONTROLLERS
       ========================================================================== */
    const Events = {
      bindHomeEvents() {
        const themeBtn = document.getElementById('theme-toggle-btn');
        if (themeBtn) {
          themeBtn.onclick = () => {
            Theme.toggle();
            const b = document.getElementById('theme-toggle-btn');
            if (b) b.innerHTML = state.theme === 'dark' ? Icons.sun : Icons.moon;
          };
        }

        const langBtn = document.getElementById('lang-toggle-btn');
        if (langBtn) {
          langBtn.onclick = () => {
            state.language = state.language === 'zh' ? 'en' : 'zh';
            localStorage.setItem('scanser_lang', state.language);
            Router.navigate('home');
          };
        }

        const toggleBtn = document.getElementById('sidebar-toggle');
        if (toggleBtn) {
          toggleBtn.onclick = () => {
            state.sidebarCollapsed = !state.sidebarCollapsed;
            localStorage.setItem('scanser_sidebar', state.sidebarCollapsed);
            document.getElementById('sidebar').classList.toggle('collapsed');
          };
        }

        const sidebarEl = document.getElementById('sidebar');
        const backdropEl = document.getElementById('sidebar-backdrop');
        const closeMobileSidebar = () => {
          if (sidebarEl) sidebarEl.classList.remove('mobile-open');
          if (backdropEl) backdropEl.classList.remove('active');
        };
        const mobileToggleBtn = document.getElementById('mobile-sidebar-toggle');
        if (mobileToggleBtn) {
          mobileToggleBtn.onclick = () => {
            if (sidebarEl) sidebarEl.classList.toggle('mobile-open');
            if (backdropEl) backdropEl.classList.toggle('active');
          };
        }
        if (backdropEl) backdropEl.onclick = closeMobileSidebar;

        // Any element carrying data-route navigates; data-gated="true"
        // routes go through Router.requireAuth so a logged-out visitor gets
        // the WeChat overlay instead of a dead click.
        document.querySelectorAll('[data-route]').forEach(el => {
          el.onclick = (e) => {
            e.preventDefault();
            closeMobileSidebar();
            const route = el.getAttribute('data-route');
            if (el.getAttribute('data-gated') === 'true') {
              Router.requireAuth(route);
            } else {
              Router.navigate(route);
            }
          };
        });

        const loginBtn = document.getElementById('home-login-btn');
        if (loginBtn) loginBtn.onclick = () => WeChatAuth.open('home');

        // Notif bell + profile dropdown — same widgets/ids as the
        // authenticated shell (see bindGlobalEvents), so they work
        // identically here on the public/home navbar too.
        const profileBtn = document.getElementById('profile-dropdown-btn');
        const profileMenu = document.getElementById('profile-menu');
        const notifBtn = document.getElementById('notif-dropdown-btn');
        const notifMenu = document.getElementById('notif-menu');
        if (profileBtn) {
          profileBtn.onclick = (e) => {
            e.stopPropagation();
            if (notifMenu) notifMenu.classList.remove('show');
            profileMenu.classList.toggle('show');
          };
        }
        if (notifBtn) {
          notifBtn.onclick = (e) => {
            e.stopPropagation();
            if (profileMenu) profileMenu.classList.remove('show');
            notifMenu.classList.toggle('show');
          };
        }
        document.onclick = () => {
          if (profileMenu) profileMenu.classList.remove('show');
          if (notifMenu) notifMenu.classList.remove('show');
        };
        const notifMarkAll = document.getElementById('notif-mark-all');
        if (notifMarkAll) {
          notifMarkAll.onclick = (e) => {
            e.stopPropagation();
            Notify.markAllRead();
          };
        }
        document.querySelectorAll('.notif-item').forEach(item => {
          item.onclick = () => {
            const route = item.getAttribute('data-route');
            const id = item.getAttribute('data-id');
            const notif = state.notifications.find(n => n.id === id);
            if (notif && !notif.read) {
              notif.read = true;
              Notify.refreshBadge();
              if (isSupabaseConfigured() && state.user) DataLayer.markNotificationRead(id);
            }
            if (route) Router.navigate(route);
          };
        });
        const logoutBtn = document.getElementById('logout-btn');
        if (logoutBtn) {
          logoutBtn.onclick = (e) => {
            e.preventDefault();
            AuthService.logout();
          };
        }

        const joinGroupLink = document.getElementById('home-join-group-link');
        if (joinGroupLink) {
          joinGroupLink.onclick = (e) => {
            e.preventDefault();
            document.querySelector('.join-group-banner')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          };
        }

        // Hero carousel — small auto-rotating banner, matches the
        // competitor reference's "2/3" style slide indicator.
        const slides = document.querySelectorAll('.hero-slide');
        const dots = document.querySelectorAll('.hero-dot');
        let heroIndex = 0;
        const showSlide = (i) => {
          heroIndex = i;
          slides.forEach((s, idx) => s.classList.toggle('active', idx === i));
          dots.forEach((d, idx) => d.classList.toggle('active', idx === i));
        };
        dots.forEach(d => d.onclick = () => showSlide(parseInt(d.getAttribute('data-index'), 10)));
        if (slides.length > 1) {
          clearInterval(window.__heroTimer);
          window.__heroTimer = setInterval(() => showSlide((heroIndex + 1) % slides.length), 5000);
        }

        // Article category filter + pagination — client-side, no reload.
        // 4 cards per page, with numbered prev/next controls under the grid.
        const tabs = document.querySelectorAll('.guide-tab');
        const cards = Array.from(document.querySelectorAll('.guide-card'));
        const guidePagination = document.getElementById('guide-pagination');
        const GUIDE_PAGE_SIZE = 4;

        const renderGuidePage = (cat, page) => {
          const filtered = cards.filter(c => cat === 'all' || c.getAttribute('data-cat') === cat);
          const totalPages = Math.max(1, Math.ceil(filtered.length / GUIDE_PAGE_SIZE));
          page = Math.min(Math.max(1, page), totalPages);

          cards.forEach(c => { c.style.display = 'none'; c.classList.remove('guide-card-enter'); });
          filtered.slice((page - 1) * GUIDE_PAGE_SIZE, page * GUIDE_PAGE_SIZE).forEach((c, i) => {
            c.style.display = '';
            // Smooth fade/slide-in, staggered slightly per card.
            requestAnimationFrame(() => setTimeout(() => c.classList.add('guide-card-enter'), i * 40));
          });

          if (!guidePagination) return;
          if (totalPages <= 1) { guidePagination.innerHTML = ''; return; }
          let html = `<button class="guide-page-btn" id="guide-page-prev" ${page === 1 ? 'disabled' : ''} aria-label="Previous">‹</button>`;
          for (let i = 1; i <= totalPages; i++) {
            html += `<button class="guide-page-btn ${i === page ? 'active' : ''}" data-guide-page="${i}">${i}</button>`;
          }
          html += `<button class="guide-page-btn" id="guide-page-next" ${page === totalPages ? 'disabled' : ''} aria-label="Next">›</button>`;
          guidePagination.innerHTML = html;

          guidePagination.querySelectorAll('[data-guide-page]').forEach(btn => {
            btn.onclick = () => renderGuidePage(cat, parseInt(btn.getAttribute('data-guide-page'), 10));
          });
          const prevBtn = document.getElementById('guide-page-prev');
          if (prevBtn) prevBtn.onclick = () => renderGuidePage(cat, page - 1);
          const nextBtn = document.getElementById('guide-page-next');
          if (nextBtn) nextBtn.onclick = () => renderGuidePage(cat, page + 1);
        };

        tabs.forEach(tab => {
          tab.onclick = () => {
            tabs.forEach(x => x.classList.remove('active'));
            tab.classList.add('active');
            renderGuidePage(tab.getAttribute('data-cat'), 1);
          };
        });

        if (cards.length) renderGuidePage('all', 1);

        // Community QR — same demo-mode QR renderer as the WeChat login
        // modal, just encoding a "join group" link instead of a login token.
        const groupCanvas = document.getElementById('join-group-qr-canvas');
        if (groupCanvas && window.QRCode && typeof QRCode.toCanvas === 'function') {
          QRCode.toCanvas(groupCanvas, 'https://scanser.app/wx-group', { width: 112, margin: 1, color: { dark: '#1F2937', light: '#FFFFFF' } });
        }
      },

      bindGlobalEvents() {
        const themeBtn = document.getElementById('theme-toggle-btn');
        if (themeBtn) themeBtn.onclick = () => Theme.toggle();

        const toggleBtn = document.getElementById('sidebar-toggle');
        if (toggleBtn) {
          toggleBtn.onclick = () => {
            state.sidebarCollapsed = !state.sidebarCollapsed;
            localStorage.setItem('scanser_sidebar', state.sidebarCollapsed);
            document.getElementById('sidebar').classList.toggle('collapsed');
          };
        }

        const sidebarEl = document.getElementById('sidebar');
        const backdropEl = document.getElementById('sidebar-backdrop');
        const closeMobileSidebar = () => {
          if (sidebarEl) sidebarEl.classList.remove('mobile-open');
          if (backdropEl) backdropEl.classList.remove('active');
        };
        const mobileToggleBtn = document.getElementById('mobile-sidebar-toggle');
        if (mobileToggleBtn) {
          mobileToggleBtn.onclick = () => {
            if (sidebarEl) sidebarEl.classList.toggle('mobile-open');
            if (backdropEl) backdropEl.classList.toggle('active');
          };
        }
        if (backdropEl) backdropEl.onclick = closeMobileSidebar;

        document.querySelectorAll('.nav-item[data-route]').forEach(link => {
          link.onclick = (e) => {
            e.preventDefault();
            closeMobileSidebar();
            Router.navigate(link.getAttribute('data-route'));
          };
        });

        // Join Group has no route of its own (it's a banner on the Home
        // page, not a separate screen) — navigate home, then scroll to it,
        // same behavior as the equivalent link on Views.Home() itself.
        const appJoinGroupLink = document.getElementById('app-join-group-link');
        if (appJoinGroupLink) {
          appJoinGroupLink.onclick = (e) => {
            e.preventDefault();
            closeMobileSidebar();
            Router.navigate('home');
            setTimeout(() => {
              document.querySelector('.join-group-banner')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 50);
          };
        }

        const profileBtn = document.getElementById('profile-dropdown-btn');
        const profileMenu = document.getElementById('profile-menu');
        const notifBtn = document.getElementById('notif-dropdown-btn');
        const notifMenu = document.getElementById('notif-menu');

        if (profileBtn) {
          profileBtn.onclick = (e) => {
            e.stopPropagation();
            if (notifMenu) notifMenu.classList.remove('show');
            profileMenu.classList.toggle('show');
          };
        }
        if (notifBtn) {
          notifBtn.onclick = (e) => {
            e.stopPropagation();
            if (profileMenu) profileMenu.classList.remove('show');
            notifMenu.classList.toggle('show');
          };
        }
        document.onclick = () => {
          if (profileMenu) profileMenu.classList.remove('show');
          if (notifMenu) notifMenu.classList.remove('show');
        };

        const notifMarkAll = document.getElementById('notif-mark-all');
        if (notifMarkAll) {
          notifMarkAll.onclick = (e) => {
            e.stopPropagation();
            Notify.markAllRead();
          };
        }
        document.querySelectorAll('.notif-item').forEach(item => {
          item.onclick = () => {
            const route = item.getAttribute('data-route');
            const id = item.getAttribute('data-id');
            const notif = state.notifications.find(n => n.id === id);
            if (notif && !notif.read) {
              notif.read = true;
              Notify.refreshBadge();
              if (isSupabaseConfigured() && state.user) {
                DataLayer.markNotificationRead(id); // fire-and-forget
              }
            }
            if (route) Router.navigate(route);
          };
        });

        const logoutBtn = document.getElementById('logout-btn');
        if (logoutBtn) {
          logoutBtn.onclick = (e) => {
            e.preventDefault();
            AuthService.logout();
          };
        }

        const langBtn = document.getElementById('lang-toggle-btn');
        if (langBtn) {
          langBtn.onclick = () => {
            state.language = state.language === 'zh' ? 'en' : 'zh';
            localStorage.setItem('scanser_lang', state.language);
            Router.navigate(state.currentRoute);
          };
        }
      },

      bindPageEvents(route) {
        if (route === 'settings') {
          const settingsForm = document.getElementById('settings-form');
          if (settingsForm) {
            settingsForm.onsubmit = async (e) => {
              e.preventDefault();
              const name = document.getElementById('settings-name-input').value.trim();
              if (!name) { Toast.show(t('nameRequiredError'), 'danger'); return; }
              state.user.name = name;
              const localUser = state.users.find(u => u.id === state.user.id);
              if (localUser) localUser.name = name;
              if (isSupabaseConfigured()) {
                await DataLayer.updateProfile(state.user.id, { name });
              } else {
                const session = JSON.parse(localStorage.getItem('scanser_session') || 'null');
                if (session) { session.name = name; localStorage.setItem('scanser_session', JSON.stringify(session)); }
              }
              AuditLog.log('Profile updated', state.user.uniqueId || state.user.name);
              Toast.show(t('successSave'), 'success');
            };
          }

          const copyIdBtn = document.getElementById('settings-copy-id');
          if (copyIdBtn) {
            copyIdBtn.onclick = () => {
              navigator.clipboard.writeText(state.user.uniqueId || '');
              Toast.show(t('copied'), 'success');
            };
          }

          // New tools are added only in code (state.tools / API_CONFIG below).
          // There is intentionally no in-app "Add Tool" form — see SECTION 2.

          const creditForm = document.getElementById('credit-settings-form');
          if (creditForm) {
            creditForm.onsubmit = (e) => {
              e.preventDefault();
              const freeCredits = parseInt(document.getElementById('free-credits-input').value, 10);
              const costPerUse = parseInt(document.getElementById('cost-per-use-input').value, 10);
              const paymentInstructions = document.getElementById('payment-instructions-input').value.trim();
              if (isNaN(freeCredits) || freeCredits < 0 || isNaN(costPerUse) || costPerUse < 1) {
                Toast.show(t('enterValidAmount'), 'danger');
                return;
              }
              creditSettings.free_credits_per_tool = freeCredits;
              creditSettings.scan_cost = costPerUse;
              creditSettings.payment_instructions = paymentInstructions;
              persistCreditSettings();
              if (isSupabaseConfigured()) {
                DataLayer.updateCreditSettings({ free_credits_per_tool: freeCredits, scan_cost: costPerUse, payment_instructions: paymentInstructions })
                  .then(ok => { if (!ok) Toast.show(t('creditSettingsSaveFailed'), 'danger'); });
              }
              AuditLog.log('Credit settings updated', `${t('freeCreditsPerToolLabel')}: ${freeCredits}, ${t('costPerUseLabel')}: ${costPerUse}`);
              Toast.show(t('creditSettingsSaved'), 'success');
            };
          }
          return;
        }

        if (route === 'access') {
          const addBtn = document.getElementById('add-user-btn');
          if (addBtn) {
            addBtn.onclick = () => this.openAddUserModal();
          }
          return;
        }

        if (route === 'usage') {
          this.renderUsageChart();
          return;
        }

        if (route === 'apikeys') {
          // View-only page — keys are added/edited in API_CONFIG (SECTION 2) by a developer.
          return;
        }

        if (route === 'reports') {
          this.bindReportsEvents();
          return;
        }

        const tool = state.tools.find(x => x.id === route);
        if (tool) this.bindToolEvents(tool);
      },

      bindReportsEvents() {
        const filterSel = document.getElementById('reports-tool-filter');
        if (filterSel) {
          filterSel.onchange = () => {
            state.reportsFilterTool = filterSel.value;
            Router.navigate('reports');
          };
        }

        const selectAll = document.getElementById('reports-select-all');
        const rowChecks = () => Array.from(document.querySelectorAll('.reports-row-check'));
        const bulkDeleteBtn = document.getElementById('reports-bulk-delete');
        const selCountEl = document.getElementById('reports-selected-count');

        const updateBulkUi = () => {
          const checked = rowChecks().filter(c => c.checked);
          if (selCountEl) selCountEl.textContent = checked.length ? `${checked.length} ${t('selectedCount')}` : '';
          if (bulkDeleteBtn) bulkDeleteBtn.classList.toggle('hidden', checked.length === 0);
        };

        if (selectAll) {
          selectAll.onchange = () => {
            rowChecks().forEach(c => { c.checked = selectAll.checked; });
            updateBulkUi();
          };
        }
        rowChecks().forEach(c => { c.onchange = updateBulkUi; });
        updateBulkUi();

        // Recompute the currently displayed rows using the same filter logic as the view render.
        const currentRows = () => {
          const accessibleToolIds = state.tools
            .filter(tool => state.user.role === 'admin' || (state.userAccess[state.user.id] || []).includes(tool.id))
            .map(tool => tool.id);
          const filterTool = state.reportsFilterTool || 'all';
          return state.scans
            .filter(s => accessibleToolIds.includes(s.toolId))
            .filter(s => filterTool === 'all' || s.toolId === filterTool);
        };

        const exportCsvBtn = document.getElementById('reports-export-csv');
        if (exportCsvBtn) {
          exportCsvBtn.onclick = () => {
            const checked = rowChecks().filter(c => c.checked).map(c => c.getAttribute('data-id'));
            const rows = checked.length ? currentRows().filter(s => checked.includes(s.id)) : currentRows();
            if (!rows.length) { Toast.show(t('noReportsYet'), 'danger'); return; }
            this.exportReportsCsv(rows);
          };
        }

        const exportPdfBtn = document.getElementById('reports-export-pdf');
        if (exportPdfBtn) {
          exportPdfBtn.onclick = () => {
            const checked = rowChecks().filter(c => c.checked).map(c => c.getAttribute('data-id'));
            const rows = checked.length ? currentRows().filter(s => checked.includes(s.id)) : currentRows();
            if (!rows.length) { Toast.show(t('noReportsYet'), 'danger'); return; }
            this.printReports(rows);
          };
        }

        if (bulkDeleteBtn) {
          bulkDeleteBtn.onclick = () => {
            if (!confirm(t('confirmBulkDelete'))) return;
            const checked = rowChecks().filter(c => c.checked).map(c => c.getAttribute('data-id'));
            state.scans = state.scans.filter(s => !checked.includes(s.id));
            AuditLog.log('Reports deleted', `${checked.length} report(s)`);
            Toast.show('Deleted', 'success');
            Router.navigate('reports');
          };
        }
      },

      viewReport(id) {
        const s = state.scans.find(x => x.id === id);
        if (!s) return;
        const tool = state.tools.find(x => x.id === s.toolId);
        let body = `
          <p><strong>${s.title}</strong></p>
          <p class="muted" style="margin-bottom:1rem;">${tool ? tool.name : s.toolId} · ${t('submittedBy')}: ${s.submittedBy || '—'} · ${s.date}</p>
        `;
        if (s.breakdown) {
          body += `
            <h4 style="font-size:0.9rem; font-weight:600; margin-bottom:0.5rem;">${t('matchBreakdown')}</h4>
            <table class="table" style="margin-bottom:1rem;">
              <tbody>
                <tr><td>${t('internetSources')}</td><td>${s.breakdown.internet}%</td></tr>
                <tr><td>${t('publications')}</td><td>${s.breakdown.publications}%</td></tr>
                <tr><td>${t('studentPapers')}</td><td>${s.breakdown.student}%</td></tr>
              </tbody>
            </table>
            <p class="muted">${s.matches || 0} ${t('matchesFound')}</p>
          `;
        } else if (typeof s.aiScoreBefore === 'number') {
          body += `
            <table class="table">
              <tbody>
                <tr><td>${t('aiScoreBefore')}</td><td>${s.aiScoreBefore}%</td></tr>
                <tr><td>${t('aiScoreAfter')}</td><td>${s.aiScoreAfter}%</td></tr>
                <tr><td>${t('humanLikeScore')}</td><td>${s.humanLike}%</td></tr>
              </tbody>
            </table>
          `;
        }
        Modal.open(t('reportDetail'), body, () => true, t('close'));
      },

      downloadReport(id) {
        const s = state.scans.find(x => x.id === id);
        if (!s) return;
        this.printReports([s]);
      },

      exportReportsCsv(rows) {
        const header = ['Title', 'Tool', 'Submitted By', 'Score', 'Date'];
        const lines = [header.join(',')];
        rows.forEach(s => {
          const tool = state.tools.find(x => x.id === s.toolId);
          const cells = [s.title, tool ? tool.name : s.toolId, s.submittedBy || '', s.score, s.date]
            .map(v => `"${String(v).replace(/"/g, '""')}"`);
          lines.push(cells.join(','));
        });
        const blob = new Blob([lines.join('\n')], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `scanser-reports-${todayStr()}.csv`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
        AuditLog.log('Reports exported (CSV)', `${rows.length} report(s)`);
        Toast.show(t('exportCsv'), 'success');
      },

      printReports(rows) {
        const rowsHtml = rows.map(s => {
          const tool = state.tools.find(x => x.id === s.toolId);
          return `<tr>
            <td>${s.title}</td>
            <td>${tool ? tool.name : s.toolId}</td>
            <td>${s.submittedBy || '—'}</td>
            <td>${s.score}</td>
            <td>${s.date}</td>
          </tr>`;
        }).join('');
        const html = `
          <html>
          <head>
            <title>Scanser Reports</title>
            <style>
              body { font-family: Arial, Helvetica, sans-serif; padding: 2rem; color: #111; }
              h1 { font-size: 1.3rem; margin-bottom: 0.25rem; }
              p { color: #555; font-size: 0.85rem; margin-bottom: 1.25rem; }
              table { width: 100%; border-collapse: collapse; }
              th, td { border: 1px solid #ddd; padding: 8px 10px; text-align: left; font-size: 0.85rem; }
              th { background: #f5f5f5; }
            </style>
          </head>
          <body>
            <h1>Scanser Report Export</h1>
            <p>Generated ${new Date().toLocaleString()}</p>
            <table>
              <thead><tr><th>Title</th><th>Tool</th><th>Submitted By</th><th>Score</th><th>Date</th></tr></thead>
              <tbody>${rowsHtml}</tbody>
            </table>
            <script>window.onload = function() { window.print(); };<\/script>
          </body>
          </html>
        `;
        const win = window.open('', '_blank');
        if (!win) { Toast.show(t('genericError'), 'danger'); return; }
        win.document.open();
        win.document.write(html);
        win.document.close();
        AuditLog.log('Reports exported (PDF)', `${rows.length} report(s)`);
      },

      showOutOfCreditsModal(tool) {
        Modal.open(
          t('toolCreditsExhausted'),
          `<p class="muted">${t('upgradeToContinue')}</p>`,
          () => { Router.navigate('settings'); return true; },
          t('subscribeNow')
        );
      },

      bindToolEvents(tool) {
        if (tool.type === 'upload') {
          const form = document.getElementById('tool-upload-form');
          if (!form) return;
          form.onsubmit = async (e) => {
            e.preventDefault();
            const titleEl = document.getElementById('doc-title');
            const wordsEl = document.getElementById('doc-words');
            const title = titleEl.value.trim();
            if (!title) return;
            if (!canUseTool(tool.id)) { this.showOutOfCreditsModal(tool); return; }
            try {
              const result = await ToolAPI.process(tool, { title, wordCount: wordsEl.value || null });
              const newScan = {
                id: 'sc_' + Date.now(),
                title: title.includes('.') ? title : title + '.pdf',
                toolId: tool.id,
                userId: state.user.id,
                submittedBy: state.user.name,
                wordCount: wordsEl.value || 0,
                score: result.score,
                matches: result.matches || 0,
                breakdown: result.breakdown || null,
                status: 'completed',
                date: todayStr()
              };
              state.scans.unshift(newScan);
              const savedScan = await DataLayer.saveScan(newScan); // no-op until Supabase + Auth are set up
              spendCredit(savedScan && savedScan.id, tool.id);
              AuditLog.log('Scan submitted', `${tool.name} — "${title}" (${result.score})`);
              Notify.push(`"${title}" scan complete — score ${result.score}`, 'success', tool.id);
              Toast.show(t('docQueued'), 'success');
              Router.navigate(tool.id);
            } catch (err) {
              if (err.message === 'NOT_CONNECTED') Toast.show(t('notConnectedToast'), 'danger');
              else Toast.show(t('genericError'), 'danger');
            }
          };
          return;
        }

        // text type
        const input = document.getElementById('tool-text-input');
        const output = document.getElementById('tool-text-output');
        const processBtn = document.getElementById('tool-text-process');
        const clearBtn = document.getElementById('tool-text-clear');
        const copyBtn = document.getElementById('tool-text-copy');
        const badge = document.getElementById('tool-text-badge');
        if (!processBtn) return;

        processBtn.onclick = async () => {
          if (!input.value.trim()) return;
          if (!canUseTool(tool.id)) { this.showOutOfCreditsModal(tool); return; }
          try {
            const result = await ToolAPI.process(tool, { text: input.value });
            output.value = result.output;
            badge.classList.remove('hidden');
            const newScan = {
              id: 'sc_' + Date.now(),
              title: `${tool.name} rewrite — ${new Date().toLocaleString()}`,
              toolId: tool.id,
              userId: state.user.id,
              submittedBy: state.user.name,
              score: result.aiScoreAfter + '%',
              aiScoreBefore: result.aiScoreBefore,
              aiScoreAfter: result.aiScoreAfter,
              humanLike: result.humanLike,
              status: 'completed',
              date: todayStr()
            };
            state.scans.unshift(newScan);
            const savedScan = await DataLayer.saveScan(newScan); // no-op until Supabase + Auth are set up
            spendCredit(savedScan && savedScan.id, tool.id);
            AuditLog.log('Text processed', `${tool.name} — AI score ${result.aiScoreBefore}% → ${result.aiScoreAfter}%`);
            Notify.push(`${tool.name} complete — AI score ${result.aiScoreBefore}% → ${result.aiScoreAfter}%`, 'success', tool.id);
            Toast.show(t('textProcessed'), 'success');
          } catch (err) {
            if (err.message === 'NOT_CONNECTED') Toast.show(t('notConnectedToast'), 'danger');
            else Toast.show(t('genericError'), 'danger');
          }
        };

        clearBtn.onclick = () => {
          input.value = '';
          output.value = '';
          badge.classList.add('hidden');
        };

        copyBtn.onclick = () => {
          if (!output.value) return;
          navigator.clipboard.writeText(output.value);
          Toast.show(t('copied'), 'success');
        };
      },

      openAddUserModal() {
        if (isSupabaseConfigured()) {
          // Creating a real auth.users account requires the Supabase Admin
          // API (service_role key) — that key must never ship to the
          // browser, so admins can't create accounts from this client-side
          // form once real Auth is wired up. New users sign themselves up
          // (Sign up link on the login screen); admins then set their role
          // and tool access here once the account exists.
          Modal.open(
            t('addUser'),
            `<p class="muted">${t('addUser')} isn't available from here anymore — real accounts are created by the person signing up themselves from the login screen. Once they've signed up, find them in this list to set their role and tool access.</p>`,
            () => true,
            'Got it'
          );
          return;
        }
        const toolOptions = state.tools.filter(tool => tool.enabled);
        Modal.open(
          t('addUser'),
          `
            <div class="form-group">
              <label class="form-label">${t('name')}</label>
              <input type="text" id="modal-user-name" class="form-input" required />
            </div>
            <div class="form-group">
              <label class="form-label">${t('identifierLabel')}</label>
              <input type="text" id="modal-user-identifier" class="form-input" placeholder="${t('identifierPlaceholder')}" />
            </div>
            <div class="form-group">
              <label class="form-label">${t('role')}</label>
              <select id="modal-user-role" class="form-select">
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div id="modal-user-access-section" class="form-group">
              <label class="form-label">${t('allowedTools')}</label>
              <p class="muted" style="margin-bottom:0.5rem;">${t('assignAccessDesc')}</p>
              ${toolOptions.map(tool => `
                <label class="checkbox-row">
                  <input type="checkbox" class="modal-user-access-check" value="${tool.id}">
                  <span>${tool.name}</span>
                </label>
              `).join('')}
            </div>
          `,
          () => {
            const name = document.getElementById('modal-user-name').value.trim();
            const externalId = document.getElementById('modal-user-identifier').value.trim();
            const role = document.getElementById('modal-user-role').value;
            if (!name) return false;

            const id = String(Date.now());
            const uniqueId = generateUniqueId16();
            state.users.push({ id, name, uniqueId, externalId, role, status: 'active', created: todayStr() });

            if (role === 'user') {
              const checked = Array.from(document.querySelectorAll('.modal-user-access-check:checked')).map(c => c.value);
              state.userAccess[id] = checked;
            }

            AuditLog.log('User added', `${name} (${uniqueId}, ${role})`);
            Toast.show('User added successfully', 'success');
            refreshScreen('access');
            return true;
          }
        );

        const roleSelect = document.getElementById('modal-user-role');
        const accessSection = document.getElementById('modal-user-access-section');
        const syncAccessVisibility = () => {
          accessSection.style.display = roleSelect.value === 'user' ? 'flex' : 'none';
        };
        roleSelect.onchange = syncAccessVisibility;
        syncAccessVisibility();
      },

      // Admin-only: sets the optional free-text identifier (WeChat username,
      // account number, phone, etc.) an admin can attach to a user for extra
      // real-world identification alongside name + unique ID (item 8).
      openIdentifierModal(userId) {
        const user = state.users.find(u => u.id === userId);
        if (!user) return;
        Modal.open(
          `${t('editIdentifier')} — ${user.name}`,
          `
            <div class="form-group">
              <label class="form-label">${t('identifierLabel')}</label>
              <input type="text" id="modal-identifier-input" class="form-input" placeholder="${t('identifierPlaceholder')}" value="${user.externalId || ''}" />
            </div>
          `,
          () => {
            const value = document.getElementById('modal-identifier-input').value.trim();
            user.externalId = value;
            AuditLog.log('Identifier updated', `${user.name} — ${value || t('noneSet')}`);
            if (isSupabaseConfigured()) {
              DataLayer.updateProfile(userId, { external_id: value || null }).then(ok => {
                if (ok === false) Toast.show('Could not save identifier', 'danger');
              });
            }
            Toast.show(t('identifierSaved'), 'success');
            refreshScreen('access');
            return true;
          }
        );
      },

      openAccessModal(userId) {
        const user = state.users.find(u => u.id === userId);
        if (!user) return;
        const currentAccess = state.userAccess[userId] || [];
        const toolOptions = state.tools.filter(tool => tool.enabled);

        Modal.open(
          `${t('manageAccess')} — ${user.name}`,
          `
            <p class="muted">${t('assignAccessDesc')}</p>
            ${toolOptions.length ? toolOptions.map(tool => `
              <label class="checkbox-row">
                <input type="checkbox" class="modal-access-check" value="${tool.id}" ${currentAccess.includes(tool.id) ? 'checked' : ''}>
                <span>${tool.name}</span>
              </label>
            `).join('') : `<p class="muted">${t('noneAssigned')}</p>`}
          `,
          () => {
            const checked = Array.from(document.querySelectorAll('.modal-access-check:checked')).map(c => c.value);
            state.userAccess[userId] = checked;
            AuditLog.log('Access updated', `${user.name} — ${checked.length ? checked.join(', ') : 'no tools'}`);
            if (isSupabaseConfigured()) {
              DataLayer.setUserToolAccess(userId, checked).then(ok => {
                if (ok === false) Toast.show('Could not save access changes', 'danger');
              });
            }
            Toast.show('Access updated', 'success');
            refreshScreen('access');
            return true;
          }
        );
      },

      openCreditModal(userId) {
        const user = state.users.find(u => u.id === userId);
        if (!user) return;
        ensureMockCredits(userId);
        const allowedIds = user.role === 'admin' ? state.tools.map(x => x.id) : (state.userAccess[userId] || state.tools.map(x => x.id));
        const perToolBal = (isSupabaseConfigured() && allToolCreditBalances[userId]) ? allToolCreditBalances[userId] : (mockCredits[userId] || {});

        const balanceFor = (toolId) => perToolBal[toolId] !== undefined ? perToolBal[toolId] : creditSettings.free_credits_per_tool;

        Modal.open(
          `${t('adjustCredits')} — ${user.name}`,
          `
            <p class="muted">${t('adjustCreditsDesc')}</p>
            <div class="form-group">
              <label class="form-label">${t('applyTo')}</label>
              <select id="credit-apply-scope" class="form-input">
                <option value="one">${t('applyToThisTool')}</option>
                <option value="all">${t('applyToAllTools')}</option>
              </select>
            </div>
            <div class="form-group" id="credit-tool-select-group">
              <label class="form-label">${t('selectTool')}</label>
              <select id="credit-tool-select" class="form-input">
                ${state.tools.filter(tool => allowedIds.includes(tool.id)).map(tool =>
                  `<option value="${tool.id}">${tool.name} — ${t('currentBalance')}: ${balanceFor(tool.id)}</option>`
                ).join('')}
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">${t('creditAmount')}</label>
              <input type="number" id="credit-amount-input" class="form-input" placeholder="${t('creditAmountHint')}" step="1">
            </div>
            <div class="form-group">
              <label class="form-label">${t('reasonOptional')}</label>
              <input type="text" id="credit-note-input" class="form-input" maxlength="120">
            </div>
          `,
          () => {
            const scope = document.getElementById('credit-apply-scope').value;
            const raw = document.getElementById('credit-amount-input').value;
            const amount = parseInt(raw, 10);
            if (!amount || isNaN(amount)) { Toast.show(t('enterValidAmount'), 'danger'); return false; }
            const note = document.getElementById('credit-note-input').value.trim();
            const targetToolIds = scope === 'all'
              ? state.tools.filter(tool => allowedIds.includes(tool.id)).map(tool => tool.id)
              : [document.getElementById('credit-tool-select').value];

            targetToolIds.forEach(toolId => {
              const tool = state.tools.find(x => x.id === toolId);

              // Mock/local balance updates immediately either way, so this
              // works fully without a Supabase backend too.
              mockCredits[userId][toolId] = Math.max(0, (mockCredits[userId][toolId] !== undefined ? mockCredits[userId][toolId] : creditSettings.free_credits_per_tool) + amount);
              AuditLog.log(amount > 0 ? 'Credits added' : 'Credits removed', `${user.name} — ${tool ? tool.name : toolId} ${amount > 0 ? '+' : ''}${amount}${note ? ' (' + note + ')' : ''}`);

              if (isSupabaseConfigured()) {
                DataLayer.adjustUserToolCredit(userId, toolId, amount, note).then(newBalance => {
                  if (newBalance === null) { Toast.show(t('creditAdjustFailed'), 'danger'); return; }
                  if (!allToolCreditBalances[userId]) allToolCreditBalances[userId] = {};
                  allToolCreditBalances[userId][toolId] = newBalance;
                });
              }
            });
            persistMockCredits();
            Toast.show(t('creditsUpdated'), 'success');
            refreshScreen('access');
            return true;
          },
          t('saveChanges')
        );

        // Toggle the single-tool picker depending on scope — no need to
        // pick one specific tool when topping up all of them at once.
        const scopeSelect = document.getElementById('credit-apply-scope');
        const toolSelectGroup = document.getElementById('credit-tool-select-group');
        if (scopeSelect && toolSelectGroup) {
          scopeSelect.onchange = () => {
            toolSelectGroup.style.display = scopeSelect.value === 'all' ? 'none' : '';
          };
        }
      },

      async toggleUserStatus(id) {
        const u = state.users.find(x => x.id === id);
        if (!u) return;
        const nextStatus = u.status === 'active' ? 'disabled' : 'active';
        if (isSupabaseConfigured()) {
          const ok = await DataLayer.updateProfile(id, { status: nextStatus });
          if (!ok) { Toast.show('Could not update user status', 'danger'); return; }
        }
        u.status = nextStatus;
        AuditLog.log(nextStatus === 'active' ? 'User enabled' : 'User disabled', u.name);
        refreshScreen('access');
      },

      deleteUser(id) {
        if (isSupabaseConfigured()) {
          // Deleting the underlying auth.users account needs the Supabase
          // Admin API (service_role) which never runs in the browser.
          // Disable the account instead (button above), or remove it from
          // Authentication -> Users in the Supabase dashboard.
          Toast.show('Delete an account from Authentication → Users in the Supabase dashboard. Use "Disable" here instead.', 'danger');
          return;
        }
        if (confirm(t('confirmDelete'))) {
          const u = state.users.find(x => x.id === id);
          state.users = state.users.filter(x => x.id !== id);
          delete state.userAccess[id];
          if (u) AuditLog.log('User deleted', u.name);
          refreshScreen('access');
        }
      },

      toggleToolEnabled(id) {
        const tool = state.tools.find(x => x.id === id);
        if (tool) {
          tool.enabled = !tool.enabled;
          DataLayer.setToolEnabled(id, tool.enabled); // fire-and-forget, no-op until configured
          AuditLog.log(tool.enabled ? 'Tool enabled' : 'Tool disabled', tool.name);
          Router.navigate('settings');
        }
      },

      toggleKeyVisibility(id) {
        const k = state.apiKeys.find(x => x.id === id);
        if (k) {
          k.visible = !k.visible;
          refreshScreen('apikeys');
        }
      },

      copyKey(id) {
        const k = state.apiKeys.find(x => x.id === id);
        if (!k) return;
        navigator.clipboard.writeText(k.key);
        Toast.show(t('copied'), 'success');
      },

      // Real, non-fabricated usage chart drawn from actual scan records
      renderUsageChart() {
        const canvas = document.getElementById('usageChart');
        if (!canvas) return;
        const days = JSON.parse(canvas.dataset.days || '[]');

        const dpr = window.devicePixelRatio || 1;
        const cssWidth = canvas.clientWidth || canvas.parentElement.clientWidth;
        const cssHeight = 160;
        canvas.width = cssWidth * dpr;
        canvas.height = cssHeight * dpr;
        canvas.style.height = cssHeight + 'px';

        const ctx = canvas.getContext('2d');
        ctx.scale(dpr, dpr);
        ctx.clearRect(0, 0, cssWidth, cssHeight);

        const paddingLeft = 30;
        const paddingBottom = 22;
        const chartW = cssWidth - paddingLeft - 10;
        const chartH = cssHeight - paddingBottom - 10;
        const maxVal = Math.max(1, ...days.map(d => d.count));

        const rootStyles = getComputedStyle(document.documentElement);
        const colorBorder = rootStyles.getPropertyValue('--border').trim() || '#E5E7EB';
        const colorPrimary = rootStyles.getPropertyValue('--primary').trim() || '#2563EB';
        const colorMuted = rootStyles.getPropertyValue('--text-muted').trim() || '#6B7280';

        // Gridlines
        ctx.strokeStyle = colorBorder;
        ctx.lineWidth = 1;
        for (let i = 0; i <= 4; i++) {
          const y = 10 + (chartH / 4) * i;
          ctx.beginPath();
          ctx.moveTo(paddingLeft, y);
          ctx.lineTo(paddingLeft + chartW, y);
          ctx.stroke();
        }

        const stepX = chartW / (days.length - 1 || 1);

        // Line
        ctx.beginPath();
        ctx.strokeStyle = colorPrimary;
        ctx.lineWidth = 2.5;
        days.forEach((d, i) => {
          const x = paddingLeft + i * stepX;
          const y = 10 + chartH - (d.count / maxVal) * chartH;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        });
        ctx.stroke();

        // Fill
        ctx.lineTo(paddingLeft + chartW, 10 + chartH);
        ctx.lineTo(paddingLeft, 10 + chartH);
        ctx.closePath();
        ctx.fillStyle = state.theme === 'dark' ? 'rgba(59, 130, 246, 0.14)' : 'rgba(37, 99, 235, 0.08)';
        ctx.fill();

        // Points + day labels
        ctx.fillStyle = colorPrimary;
        ctx.font = '11px Inter, sans-serif';
        days.forEach((d, i) => {
          const x = paddingLeft + i * stepX;
          const y = 10 + chartH - (d.count / maxVal) * chartH;
          ctx.beginPath();
          ctx.arc(x, y, 3, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = colorMuted;
          ctx.textAlign = 'center';
          ctx.fillText(d.label, x, cssHeight - 4);
          ctx.fillStyle = colorPrimary;
        });
      }
    };

    /* ==========================================================================
       SECTION 10: SUPABASE HYDRATION (no-op until configured + Auth is wired up)
       ========================================================================== */
    async function hydrateFromSupabase() {
      // The admin shell (admin.html) has its own AdminPanel.hydrate(), which
      // re-renders through AdminPanel.render() instead of Router.navigate()
      // — see refreshScreen() above for why mixing the two breaks the admin
      // shell. This guard just makes sure this function is never the one
      // that accidentally runs there.
      if (window.SCANSER_ADMIN_MODE) return;
      if (!isSupabaseConfigured()) return; // stay on local in-memory state — expected for now
      if (!state.user) return; // RLS returns nothing useful before a session exists

      // DEMO MODE GUARD: a demo login (see WeChatAuth.completeLogin, taken
      // whenever the wechat-auth Edge Function isn't deployed) sets
      // state.user directly WITHOUT ever creating a real Supabase auth
      // session. If we didn't check for that here, the calls below would
      // still fire, RLS would (silently, not as an error) hand back empty
      // arrays for a "nobody" session, and those empty arrays would then
      // OVERWRITE the local demo grants — e.g. state.userAccess — that
      // ensureFullToolAccess() just set, which is exactly what caused every
      // tool to show "Insufficient permissions" right after a demo login.
      // So: only sync with Supabase when there's a real, signed-in session.
      const { data: { session } } = await supabaseClient.auth.getSession();
      if (!session) return; // demo/local session — nothing real to sync yet

      const [toolSettings, scanRows, auditRows, profileRows, accessRows, notifRows, creditSettingsRow, balanceRows, allBalanceRows] = await Promise.all([
        DataLayer.loadToolSettings(),
        DataLayer.loadScans(),
        DataLayer.loadAuditLog(),
        DataLayer.loadProfiles(),
        DataLayer.loadUserToolAccess(),
        DataLayer.loadNotifications(),
        DataLayer.loadCreditSettings(),
        DataLayer.loadCreditBalance(),       // [{ tool_id, balance }] — current user, every tool
        DataLayer.loadAllToolCreditBalances() // admin gets every user's rows; non-admin just their own (RLS), harmless either way
      ]);

      if (allBalanceRows) {
        allToolCreditBalances = {};
        allBalanceRows.forEach(row => {
          if (!allToolCreditBalances[row.user_id]) allToolCreditBalances[row.user_id] = {};
          allToolCreditBalances[row.user_id][row.tool_id] = row.balance;
        });
      }

      if (toolSettings) {
        toolSettings.forEach(row => {
          const tool = state.tools.find(x => x.id === row.tool_id);
          if (tool) tool.enabled = row.enabled;
        });
      }

      if (scanRows) {
        state.scans = scanRows.map(row => ({
          id: row.id,
          title: row.title,
          toolId: row.tool_id,
          userId: row.user_id,
          wordCount: row.word_count,
          score: row.score,
          status: row.status,
          date: (row.created_at || '').split('T')[0]
        }));
      }

      if (auditRows) {
        state.auditLog = auditRows.map(row => ({
          id: row.id,
          actor: row.actor_label || 'System',
          action: row.action,
          details: row.details || '',
          ts: row.created_at
        }));
      }

      // profiles/user_tool_access: RLS gives a non-admin only their own row,
      // so this quietly stays a 1-item list for regular users — that's
      // expected, not a bug. Admins get everyone.
      if (profileRows) {
        state.users = profileRows.map(row => ({
          id: row.id,
          name: row.name || row.unique_id || row.email || '',
          email: row.email,
          uniqueId: row.unique_id || '',
          externalId: row.external_id || '',
          role: row.role,
          status: row.status,
          created: (row.created_at || '').split('T')[0]
        }));
      }

      if (accessRows) {
        const grouped = {};
        accessRows.forEach(row => {
          if (!grouped[row.user_id]) grouped[row.user_id] = [];
          grouped[row.user_id].push(row.tool_id);
        });
        state.userAccess = grouped;
      }

      // RLS (notifications_select_own) already scopes this to the signed-in
      // user, so this fully replaces the local array — real history now
      // survives a reload instead of resetting every session.
      if (notifRows) {
        state.notifications = notifRows.map(row => ({
          id: row.id,
          message: row.title + (row.body ? ' — ' + row.body : ''),
          type: row.type,
          route: row.route || null,
          read: row.read,
          ts: row.created_at
        }));
      }

      if (creditSettingsRow) { creditSettings = creditSettingsRow; persistCreditSettings(); }
      if (balanceRows) {
        toolCreditBalances = {};
        balanceRows.forEach(row => { toolCreditBalances[row.tool_id] = row.balance; });
      }

      // Re-render whatever screen is currently up so the fetched data shows.
      Router.navigate(state.currentRoute);
    }

    /* ==========================================================================
       SECTION 11: INITIALIZATION ENTRYPOINT
       ========================================================================== */

    // Shown the instant the page loads/reloads, before any real data exists,
    // so we never paint a screen with a fallback/placeholder number (e.g. the
    // old 1000-credit mock) that then flashes to the real one a moment later.
    function renderBootLoader() {
      document.getElementById('app').innerHTML = `
        <div class="boot-loader"><div class="boot-loader-spinner"></div></div>
      `;
    }

    // One realtime channel, subscribed once per signed-in session. Listens to
    // every INSERT on usage_ledger (a scan spend, a signup grant, or an admin
    // adjustment) and updates the on-screen balance immediately — no reload,
    // no polling. RLS on usage_ledger already scopes what each session
    // receives: a normal user only gets rows where user_id = their own id;
    // an admin session receives every user's rows (same policy that powers
    // the User Management credits column), which is what keeps that page
    // live too.
    let realtimeChannel = null;
    function subscribeRealtime() {
      if (!isSupabaseConfigured() || !state.user || realtimeChannel) return;
      realtimeChannel = supabaseClient
        .channel('usage_ledger_changes')
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'usage_ledger' }, (payload) => {
          const row = payload.new;
          if (!row) return;

          if (row.user_id === state.user.id) {
            if (!toolCreditBalances) toolCreditBalances = {};
            if (row.tool_id) toolCreditBalances[row.tool_id] = (toolCreditBalances[row.tool_id] || 0) + row.delta;
          }
          if (state.user.role === 'admin' && row.tool_id) {
            if (!allToolCreditBalances[row.user_id]) allToolCreditBalances[row.user_id] = {};
            allToolCreditBalances[row.user_id][row.tool_id] = (allToolCreditBalances[row.user_id][row.tool_id] || 0) + row.delta;
          }

          // Only re-render if the change is actually visible on the current
          // screen — avoids yanking someone mid-form on an unrelated page.
          if (state.currentRoute === 'access') {
            Router.navigate(state.currentRoute);
          }
        })
        .subscribe();
    }
    function unsubscribeRealtime() {
      if (realtimeChannel) {
        supabaseClient.removeChannel(realtimeChannel);
        realtimeChannel = null;
      }
    }

    /* ==========================================================================
       SECTION 12: ADMIN PANEL (hidden /admin shell — admin.html only)
       ==========================================================================
       Completely separate from the WeChat flow: reached only by opening
       admin.html directly (never linked from the public site or the signed-in
       app). Reuses the same Views.access/usage/apikeys/auditlog + Events
       bindings already defined above — only the shell around them differs.

       Login: when Supabase IS configured (see js/supabaseClient.js), this
       signs in for real via supabaseClient.auth.signInWithPassword — that's
       required for every RLS policy in schema.sql to see this session at
       all (they all gate on public.is_admin(), which reads auth.uid()).
       Without a real session, every DataLayer call below silently returns
       empty because RLS denies-by-default — which is exactly why the admin
       panel used to look empty ("API wagera ni arha uske pas"): it was
       running entirely on the local placeholder state.users/state.apiKeys,
       never on the real database. The email must belong to a real Supabase
       Auth user (create it once in Dashboard -> Authentication -> Users)
       whose matching `profiles` row has role = 'admin'.
       When Supabase is NOT configured, this falls back to the same
       hardcoded local check as before, matching the "keeps working on
       local in-memory state" pattern used everywhere else in this app.
       ========================================================================== */
    const ADMIN_CREDENTIALS = { email: 'admin@scanser.com', password: 'admin@54321' };

    const AdminPanel = {
      loggedIn: false,
      route: 'access',
      navItems: [
        { route: 'access', icon: 'access', labelEn: 'Access Control', labelZh: '访问控制' },
        { route: 'usage', icon: 'usage', labelEn: 'Usage', labelZh: '用量统计' },
        { route: 'apikeys', icon: 'apikeys', labelEn: 'API Keys', labelZh: 'API 密钥' },
        { route: 'auditlog', icon: 'audit', labelEn: 'Audit Log', labelZh: '审计日志' }
      ],

      async init() {
        Theme.apply();
        // Admin panel defaults to Chinese on first visit (no saved language
        // preference yet), same as the user-facing app. The language
        // selector in the admin navbar lets the admin still switch to
        // English if they want to.
        if (!localStorage.getItem('scanser_lang')) state.language = 'zh';
        seedApiKeysFromConfig();

        // Restore an already-signed-in admin session across a page reload
        // (Supabase persists the session in localStorage itself), same as
        // AuthService.init() does for the regular signed-in app — otherwise
        // every reload would force a fresh login even though a valid
        // session already exists.
        if (isSupabaseConfigured()) {
          renderBootLoader();
          const { data: { session } = {} } = await supabaseClient.auth.getSession();
          if (session) {
            const ok = await this.hydrateAdminSession(session);
            if (ok) {
              this.loggedIn = true;
              await this.hydrate();
              return; // hydrate() already rendered the shell
            }
          }
        }
        this.render();
      },

      // Loads the profiles row for a Supabase session and confirms it's an
      // admin — mirrors AuthService.hydrateUserFromSession, but rejects
      // (and signs back out of) any non-admin account instead of accepting
      // it, since this is the admin-only shell.
      async hydrateAdminSession(session) {
        if (!session || !session.user) return false;
        const { data: profile, error } = await supabaseClient
          .from('profiles')
          .select('id, name, email, role, status, unique_id, external_id')
          .eq('id', session.user.id)
          .maybeSingle();
        if (error || !profile || profile.role !== 'admin' || profile.status === 'disabled') {
          await supabaseClient.auth.signOut();
          return false;
        }
        state.user = { id: profile.id, name: profile.name || 'Admin', email: profile.email, role: 'admin', uniqueId: profile.unique_id || '', externalId: profile.external_id || '' };
        return true;
      },

      // Pulls the real data every admin page needs (profiles/users, tool
      // settings, per-user access, scans, audit log, credit settings +
      // balances, API key metadata) — the admin equivalent of the signed-in
      // app's hydrateFromSupabase(), kept separate so it always re-renders
      // through AdminPanel.render() rather than the main Router (see
      // refreshScreen() above for why that distinction matters).
      async hydrate() {
        if (!isSupabaseConfigured() || !state.user) { this.render(); return; }

        const [toolSettings, scanRows, auditRows, profileRows, accessRows, creditSettingsRow, allBalanceRows, apiKeyMetaRows] = await Promise.all([
          DataLayer.loadToolSettings(),
          DataLayer.loadScans(),
          DataLayer.loadAuditLog(),
          DataLayer.loadProfiles(),
          DataLayer.loadUserToolAccess(),
          DataLayer.loadCreditSettings(),
          DataLayer.loadAllToolCreditBalances(),
          DataLayer.loadApiKeysMeta()
        ]);

        if (toolSettings) {
          toolSettings.forEach(row => {
            const tool = state.tools.find(x => x.id === row.tool_id);
            if (tool) tool.enabled = row.enabled;
          });
        }

        if (scanRows) {
          state.scans = scanRows.map(row => ({
            id: row.id, title: row.title, toolId: row.tool_id, userId: row.user_id,
            wordCount: row.word_count, score: row.score, status: row.status,
            date: (row.created_at || '').split('T')[0]
          }));
        }

        if (auditRows) {
          state.auditLog = auditRows.map(row => ({
            id: row.id, actor: row.actor_label || 'System', action: row.action,
            details: row.details || '', ts: row.created_at
          }));
        }

        // Real user list — this is the whole point of the page. Falls back
        // to the local placeholder state.users only if RLS/network returns
        // nothing (e.g. is_admin() somehow false), so the page never goes
        // fully blank.
        if (profileRows && profileRows.length) {
          state.users = profileRows.map(row => ({
            id: row.id, name: row.name || row.unique_id || row.email || '', email: row.email,
            uniqueId: row.unique_id || '', externalId: row.external_id || '',
            role: row.role, status: row.status, created: (row.created_at || '').split('T')[0]
          }));
        }

        if (accessRows) {
          const grouped = {};
          accessRows.forEach(row => {
            if (!grouped[row.user_id]) grouped[row.user_id] = [];
            grouped[row.user_id].push(row.tool_id);
          });
          state.userAccess = grouped;
        }

        if (creditSettingsRow) { creditSettings = creditSettingsRow; persistCreditSettings(); }

        if (allBalanceRows) {
          allToolCreditBalances = {};
          allBalanceRows.forEach(row => {
            if (!allToolCreditBalances[row.user_id]) allToolCreditBalances[row.user_id] = {};
            allToolCreditBalances[row.user_id][row.tool_id] = row.balance;
          });
        }

        // Real API key metadata (provider/last-4/status only — never the
        // actual secret, see api_keys_meta in schema.sql) merged in
        // alongside anything seeded from API_CONFIG. dbSourced rows render
        // without a Show/Copy control since there's no secret client-side
        // to reveal, by design.
        if (apiKeyMetaRows) {
          const dbKeys = apiKeyMetaRows.map(row => ({
            id: 'k_db_' + row.id, provider: row.provider, key: null, last4: row.last4 || '',
            baseUrl: row.base_url || '', created: (row.created_at || '').split('T')[0],
            status: row.status, visible: false, toolId: row.tool_id, dbSourced: true
          }));
          state.apiKeys = [...state.apiKeys.filter(k => !k.dbSourced), ...dbKeys];
        }

        this.render();
      },

      async login(email, password) {
        if (isSupabaseConfigured()) {
          const { data, error } = await supabaseClient.auth.signInWithPassword({
            email: email.trim().toLowerCase(),
            password
          });
          if (error || !data.session) return { ok: false, message: error ? error.message : 'Invalid email or password.' };
          const ok = await this.hydrateAdminSession(data.session);
          if (!ok) return { ok: false, message: 'This account does not have admin access.' };
          this.loggedIn = true;
          this.route = 'access';
          await this.hydrate(); // hydrate() renders the shell
          return { ok: true };
        }
        // Local demo fallback — no Supabase project configured yet.
        if (email.trim().toLowerCase() === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
          state.user = { id: 'admin-hardcoded', name: 'Admin', email: ADMIN_CREDENTIALS.email, role: 'admin' };
          this.loggedIn = true;
          this.route = 'access';
          this.render();
          return { ok: true };
        }
        return { ok: false, message: 'Invalid email or password.' };
      },

      async logout() {
        if (isSupabaseConfigured()) await supabaseClient.auth.signOut();
        state.user = null;
        this.loggedIn = false;
        this.render();
      },

      navigate(route) {
        this.route = route;
        this.render();
      },

      loginScreen(error, message) {
        return `
          <div class="boot-loader" style="flex-direction:column; gap:1.5rem;">
            <div class="card" style="max-width:360px; width:100%; padding:2rem;">
              <div class="wechat-modal-brand" style="justify-content:flex-start; margin-bottom:1.25rem;">
                <div class="auth-brand-logo" style="width:32px; height:32px; font-size:1rem; background:linear-gradient(135deg,#FF4D6D,#4A90E2);">S</div>
                <span style="font-weight:700;">Scanser Admin</span>
              </div>
              <form id="admin-login-form">
                <div class="form-group">
                  <label class="form-label">Email</label>
                  <input type="email" id="admin-email" class="form-input" placeholder="admin@scanser.com" required>
                </div>
                <div class="form-group">
                  <label class="form-label">Password</label>
                  <input type="password" id="admin-password" class="form-input" placeholder="••••••••" required>
                </div>
                ${error ? `<p style="color:var(--danger); font-size:0.82rem; margin-bottom:0.75rem;">${message || 'Invalid email or password.'}</p>` : ''}
                <button type="submit" class="btn btn-primary w-full">Sign in</button>
              </form>
            </div>
          </div>
        `;
      },

      shell(content) {
        const lang = state.language === 'zh' ? 'labelZh' : 'labelEn';
        const unreadCount = state.notifications.filter(n => !n.read).length;
        const notifBellHtml = `
          <div class="dropdown">
            <button class="theme-toggle" id="notif-dropdown-btn" style="position:relative;" title="${t('notifications')}">
              ${Icons.bell}
              <span id="notif-badge" class="notif-badge ${unreadCount > 0 ? '' : 'hidden'}">${unreadCount > 9 ? '9+' : unreadCount}</span>
            </button>
            <div class="dropdown-menu notif-panel" id="notif-menu">
              <div class="flex justify-between items-center" style="padding:0.5rem 1rem 0.25rem;">
                <strong style="font-size:0.85rem;">${t('notifications')}</strong>
                ${state.notifications.length ? `<button class="btn-sm" style="color:var(--primary); font-weight:500;" id="notif-mark-all">${t('markAllRead')}</button>` : ''}
              </div>
              <div style="max-height:320px; overflow-y:auto;">
                ${state.notifications.length ? state.notifications.slice(0, 12).map(n => `
                  <div class="notif-item ${n.read ? '' : 'unread'}" data-route="${n.route || ''}" data-id="${n.id}">
                    <span class="notif-dot notif-dot-${n.type}"></span>
                    <div>
                      <div style="font-size:0.8rem; color:var(--text);">${n.message}</div>
                      <div style="font-size:0.7rem; color:var(--text-light); margin-top:0.15rem;">${Notify.timeAgo(n.ts)}</div>
                    </div>
                  </div>
                `).join('') : `<p class="muted" style="padding:0.75rem 1rem; margin:0;">${t('noNotifications')}</p>`}
              </div>
            </div>
          </div>`;

        return `
          <div id="app-screen">
            <aside class="sidebar" id="sidebar">
              <div class="sidebar-header">
                <div class="sidebar-logo">
                  <div class="auth-brand-logo" style="width:32px; height:32px; font-size:1rem;">S</div>
                  <span>Scanser Admin</span>
                </div>
              </div>
              <nav class="sidebar-menu">
                ${this.navItems.map(item => `
                  <a href="#" class="nav-item ${this.route === item.route ? 'active' : ''}" data-admin-route="${item.route}">
                    ${Icons[item.icon]} <span class="nav-text">${item[lang]}</span>
                  </a>
                `).join('')}
              </nav>
            </aside>
            <div class="main-wrapper">
              <header class="navbar">
                <h1 class="public-navbar-title" style="margin-left:0.5rem;">${(this.navItems.find(n => n.route === this.route) || {})[lang] || ''}</h1>
                <div class="flex items-center gap-4">
                  <button class="theme-toggle" id="theme-toggle-btn" title="Toggle dark mode">${state.theme === 'dark' ? Icons.sun : Icons.moon}</button>
                  <select id="lang-selector" class="form-select" style="padding: 0.35rem 0.5rem; font-size:0.85rem;">
                    <option value="en" ${state.language === 'en' ? 'selected' : ''}>English</option>
                    <option value="zh" ${state.language === 'zh' ? 'selected' : ''}>中文 (Simplified)</option>
                  </select>
                  ${notifBellHtml}
                  <button class="btn btn-secondary btn-sm" id="admin-logout-btn">${t('logout')}</button>
                </div>
              </header>
              <main class="content-container">${content}</main>
            </div>
          </div>
        `;
      },

      render() {
        const app = document.getElementById('app');
        const bindLoginForm = () => {
          const form = document.getElementById('admin-login-form');
          if (!form) return;
          form.onsubmit = async (e) => {
            e.preventDefault();
            const email = document.getElementById('admin-email').value;
            const password = document.getElementById('admin-password').value;
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Signing in…'; }
            const result = await this.login(email, password);
            if (result.ok) return; // login() already re-renders the shell
            app.innerHTML = this.loginScreen(true, result.message);
            bindLoginForm();
          };
        };

        if (!this.loggedIn || !state.user) {
          app.innerHTML = this.loginScreen(false);
          bindLoginForm();
          return;
        }

        const content = Views[this.route] ? Views[this.route]() : '<h1>404</h1>';
        app.innerHTML = this.shell(content);

        // Reuses the same notif-dropdown / mark-all-read bindings the
        // signed-in app uses (bindGlobalEvents also touches '.nav-item'
        // elements, which is why the admin-route rebind below MUST run
        // after it — otherwise it would overwrite these links with the
        // wrong (data-route-based) navigation handler).
        Events.bindGlobalEvents();

        const themeBtn = document.getElementById('theme-toggle-btn');
        if (themeBtn) themeBtn.onclick = () => Theme.toggle();
        const langSel = document.getElementById('lang-selector');
        if (langSel) {
          langSel.onchange = (e) => {
            state.language = e.target.value;
            localStorage.setItem('scanser_lang', state.language);
            this.render();
          };
        }
        const logoutBtn = document.getElementById('admin-logout-btn');
        if (logoutBtn) logoutBtn.onclick = () => this.logout();
        document.querySelectorAll('[data-admin-route]').forEach(el => {
          el.onclick = (e) => {
            e.preventDefault();
            this.navigate(el.getAttribute('data-admin-route'));
          };
        });

        // Reuse the exact same event bindings the normal app uses for
        // these pages (toggle-status buttons, add-user modal, usage chart).
        Events.bindPageEvents(this.route);
      }
    };

    document.addEventListener('DOMContentLoaded', async () => {
      if (window.SCANSER_ADMIN_MODE) {
        AdminPanel.init();
        return;
      }
      renderBootLoader();
      seedApiKeysFromConfig();

      document.addEventListener('keydown', (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
          e.preventDefault();
          if (state.user) CommandPalette.isOpen() ? CommandPalette.close() : CommandPalette.open();
        }
      });

      // Restore an existing Supabase session (or the local mock session if
      // Supabase isn't configured) before the first render, so a page reload
      // doesn't bounce a signed-in user back to the login screen.
      await AuthService.init();
      AuthService.listen();

      if (AuthService.isAuthenticated()) {
        // Wait for the real numbers (credits, scans, notifications, etc.)
        // BEFORE the first paint. This is what kills the "1000 -> flashes to
        // the real balance" bug: the dashboard is never rendered with a
        // fallback value in the first place.
        await hydrateFromSupabase();
        if (state.user) ensureMockCredits(state.user.id);
        Router.navigate(state.currentRoute);
        subscribeRealtime();
      } else {
        // No session — land on the public homepage, not a login wall.
        Router.navigate('home');
      }
    });
