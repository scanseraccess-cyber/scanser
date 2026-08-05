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

        linkToTool: "Linked Tool",
        unlinked: "Unlinked",
        noApiKeys: "No API keys yet. Add one to connect a tool.",
        noApiKeysCodeOnly: "No API keys",
        apiKeysCodeOnlyNotice: "API keys are configured by a developer directly in the code (API_CONFIG). This page is read-only — you can view and copy keys, but keys cannot be added, edited, or deleted from the app.",
        apiKeyValue: "API Key",
        baseUrlLabel: "Base URL (optional)",
        noneCustom: "-- None / Custom --",
        keyProviderLabel: "Provider / Label",

        connectedVia: "Connected via",
        notConnectedMsg: "Not connected — add an API key in Settings → API Keys and link it here.",
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
        confirmBulkDelete: "Delete the selected reports? This cannot be undone."
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

        linkToTool: "关联工具",
        unlinked: "未关联",
        noApiKeys: "暂无 API 密钥，添加一个以连接工具。",
        noApiKeysCodeOnly: "无 API 密钥",
        apiKeysCodeOnlyNotice: "API 密钥由开发者直接在代码（API_CONFIG）中配置。此页面为只读——您可以查看和复制密钥，但无法在应用内添加、编辑或删除密钥。",
        apiKeyValue: "API 密钥",
        baseUrlLabel: "基础地址（可选）",
        noneCustom: "-- 无 / 自定义 --",
        keyProviderLabel: "服务商 / 标签",

        connectedVia: "已连接：",
        notConnectedMsg: "尚未连接 — 请在设置 → API 密钥中添加并关联密钥。",
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
        confirmBulkDelete: "确定删除所选报告吗？此操作无法撤销。"
      }
    };

    /* ==========================================================================
       SECTION 2: CENTRALIZED APPLICATION STATE
       ========================================================================== */
    const CREDIT_POOL = 1000;
    const CREDIT_COST = 10;

    // Real credit numbers, once loaded from Supabase (see hydrateFromSupabase).
    // Stay null until then, so the dashboard falls back to the old local-mock
    // math (CREDIT_POOL/CREDIT_COST) exactly as before — nothing regresses
    // for anyone not signed in with a real Supabase session yet.
    let creditSettings = null;   // { scan_cost, signup_grant }
    let creditBalance = null;    // number
    let allCreditBalances = {};  // { [userId]: number } — admin-only, for User Management page

    function creditStats() {
      if (creditBalance !== null && creditSettings) {
        const pool = creditSettings.signup_grant || CREDIT_POOL;
        return { remaining: Math.max(0, creditBalance), pool: Math.max(pool, creditBalance) };
      }
      const totalSubs = state.scans.length;
      return { remaining: Math.max(0, CREDIT_POOL - totalSubs * CREDIT_COST), pool: CREDIT_POOL };
    }

    // Called right after a scan is submitted. In mock/local mode (no real
    // Supabase session) this is a no-op — creditStats() already derives the
    // remaining amount from state.scans.length. With a real session, this
    // just persists the spend to usage_ledger; the on-screen balance updates
    // itself a moment later via the usage_ledger realtime subscription (see
    // subscribeRealtime), which is the single source of truth for the
    // displayed number — no optimistic local math here, so it can never
    // drift or double-count against the real row that lands.
    function spendCredit(scanId) {
      if (!isSupabaseConfigured() || !state.user) return;
      const cost = (creditSettings && creditSettings.scan_cost) || 1;
      DataLayer.deductCredit(scanId || null, cost);
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
    const API_CONFIG = {
      turnitin:   { provider: 'Turnitin API',   apiKey: '', baseUrl: 'https://api.turnitin.com' },
      ithenticate:{ provider: 'iThenticate API',apiKey: '', baseUrl: 'https://api.ithenticate.com' },
      stealth:    { provider: 'Stealth API',    apiKey: '', baseUrl: 'https://api.your-provider.com' }
      // Add an entry here for any custom tool you add to state.tools below,
      // using the same id you gave the tool, e.g.:
      // quillbot: { provider: 'Quillbot API', apiKey: 'YOUR_KEY_HERE', baseUrl: 'https://api.quillbot.com' }
    };

    function seedApiKeysFromConfig() {
      Object.entries(API_CONFIG).forEach(([toolId, cfg]) => {
        if (!cfg.apiKey) return; // no key hardcoded for this tool -> managed from the UI only
        const tool = state.tools.find(x => x.id === toolId);
        if (!tool || tool.apiKeyId) return; // tool missing, or already has a key linked (don't override UI changes)
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
          lastTest: null
        };
        state.apiKeys.push(newKey);
        tool.apiKeyId = newKey.id;
      });
    }

    const state = {
      user: JSON.parse(localStorage.getItem('scanser_session')) || null,
      language: localStorage.getItem('scanser_lang') || 'en',
      theme: localStorage.getItem('scanser_theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
      sidebarCollapsed: localStorage.getItem('scanser_sidebar') === 'true',
      currentRoute: 'dashboard',
      authMode: 'login', // 'login' | 'signup' | 'reset' — which form the auth screen shows
      onboardingDismissed: localStorage.getItem('scanser_onboarding_dismissed') === 'true',
      pendingAuth: null, // { userId } set when password is correct but a 2FA code is still required
      twoFactor: JSON.parse(localStorage.getItem('scanser_2fa') || '{}'), // { [userId]: { enabled, codes: [] } }

      // Real accounts used for the demo login screen only.
      users: [
        { id: '1', name: 'Admin Master', email: 'admin@scanser.com', role: 'admin', status: 'active', created: '2026-01-15' },
        { id: '2', name: 'Standard User', email: 'user@scanser.com', role: 'user', status: 'active', created: '2026-01-15' },
        { id: '3', name: 'Guest Reviewer', email: 'viewer@scanser.com', role: 'viewer', status: 'active', created: '2026-01-20' }
      ],

      // Tools available in the app. New tools are added here, in code, only —
      // there is no in-app "Add Tool" form (see the notice on Settings page
      // and the DEVELOPER CONFIG comment above).
      tools: [
        { id: 'turnitin', name: 'Turnitin', icon: 'turnitin', type: 'upload', description: 'Plagiarism detection against academic and web sources.', apiKeyId: null, builtIn: true, enabled: true },
        { id: 'ithenticate', name: 'iThenticate', icon: 'ithenticate', type: 'upload', description: 'Originality check for scholarly manuscripts.', apiKeyId: null, builtIn: true, enabled: true },
        { id: 'stealth', name: 'Stealth', icon: 'stealth', type: 'text', description: 'Rewrite text to reduce AI-detection signals.', apiKeyId: null, builtIn: true, enabled: true }
      ],

      // Per-user tool access. Admins always see every enabled tool.
      userAccess: {
        '2': ['turnitin'],
        '3': ['turnitin', 'ithenticate']
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

    /* ==========================================================================
       SECTION 3: HELPERS
       ========================================================================== */
    function todayStr() {
      return new Date().toISOString().split('T')[0];
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
          .select('id, name, email, role, status')
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
        state.user = { id: profile.id, name: profile.name, email: profile.email, role: profile.role };
        return true;
      },

      // Called once at startup to restore an existing session (Supabase JS
      // persists sessions in localStorage itself — this just reads it back).
      async init() {
        if (!isSupabaseConfigured()) {
          state.user = JSON.parse(localStorage.getItem('scanser_session')) || null;
          return;
        }
        const { data: { session } } = await supabaseClient.auth.getSession();
        await this.hydrateUserFromSession(session);
      },

      // Keeps state.user in sync with auth events firing elsewhere (another
      // tab signing out, a token refresh, etc).
      listen() {
        if (!isSupabaseConfigured()) return;
        supabaseClient.auth.onAuthStateChange(async (event) => {
          if (event === 'SIGNED_OUT') {
            state.user = null;
            Router.navigate('login');
          }
        });
      },

      async signUp(email, password, name) {
        if (!isSupabaseConfigured()) {
          return { success: false, message: 'Supabase is not configured — see js/supabaseClient.js.' };
        }
        const { data, error } = await supabaseClient.auth.signUp({
          email, password,
          options: { data: { name } } // -> raw_user_meta_data->>'name', read by the handle_new_user trigger
        });
        if (error) return { success: false, message: error.message };
        // If "Confirm email" is ON in the Supabase dashboard, data.session is
        // null here and the user must click the emailed link before signing in.
        return { success: true, needsConfirmation: !data.session };
      },

      async login(email, password) {
        if (!isSupabaseConfigured()) {
          // Local/demo fallback — no Supabase project connected.
          const userRecord = state.users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.status === 'active');
          const validPassword = (email === 'admin@scanser.com' && password === 'admin123') ||
                                 (email === 'user@scanser.com' && password === 'user123') ||
                                 (email === 'viewer@scanser.com' && password === 'viewer123');
          if (userRecord && validPassword) {
            const session = { id: userRecord.id, email: userRecord.email, role: userRecord.role, name: userRecord.name };
            localStorage.setItem('scanser_session', JSON.stringify(session));
            state.user = session;
            return { success: true };
          }
          return { success: false, message: t('invalidAuth') };
        }

        const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
        if (error) return { success: false, message: error.message };
        const result = await this.hydrateUserFromSession(data.session);
        if (result === 'disabled') return { success: false, message: t('accountDisabled') };
        if (!result) return { success: false, message: t('profileLoadFailed') };
        return { success: true };
      },

      async resetPassword(email) {
        if (!isSupabaseConfigured()) {
          return { success: false, message: 'Supabase is not configured — see js/supabaseClient.js.' };
        }
        const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
          redirectTo: window.location.origin + window.location.pathname
        });
        // Supabase intentionally doesn't reveal whether the email exists;
        // treat this as a success from the UI's point of view either way.
        if (error) console.warn('[Auth] resetPasswordForEmail:', error.message);
        return { success: true };
      },

      async logout() {
        if (state.user) AuditLog.log('Signed out', state.user.email);
        unsubscribeRealtime();
        if (isSupabaseConfigured()) {
          await supabaseClient.auth.signOut();
        } else {
          localStorage.removeItem('scanser_session');
        }
        state.user = null;
        creditBalance = null;
        allCreditBalances = {};
        Router.navigate('login');
      },

      isAuthenticated() {
        return !!state.user;
      }
    };

    /* ==========================================================================
       SECTION 5: ACCESS CONTROL & PERMISSIONS
       ========================================================================== */
    const Permissions = {
      fixed: {
        dashboard: ['admin', 'user', 'viewer'],
        settings: ['admin', 'user', 'viewer'],
        reports: ['admin', 'user', 'viewer'],
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
      navigate(route) {
        if (!AuthService.isAuthenticated() && route !== 'login') {
          this.renderScreen('login');
          return;
        }
        if (route === 'login' && AuthService.isAuthenticated()) {
          route = 'dashboard';
        }
        if (route !== 'login' && !Permissions.canAccess(route)) {
          Toast.show('Access Denied: Insufficient permissions', 'danger');
          return;
        }
        state.currentRoute = route;
        this.renderScreen(route);
      },

      renderScreen(route) {
        const app = document.getElementById('app');
        if (route === 'login') {
          app.innerHTML = Views.Login();
          Events.bindLoginEvents();
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

    /* ==========================================================================
       SECTION 7: UI COMPONENTS (Icons, Toast, Modals, Mock API layer)
       ========================================================================== */
    const Icons = {
      dashboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
      turnitin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>`,
      ithenticate: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>`,
      stealth: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path><path d="M12 6v6l4 2"></path></svg>`,
      generic: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 2v4M15 2v4M6 8h12l-1 6a5 5 0 0 1-5 4 5 5 0 0 1-5-4L6 8z"></path><path d="M10 20v-2M14 20v-2"></path></svg>`,
      settings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
      access: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
      usage: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
      apikeys: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>`,
      collapse: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>`,
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
        const pageIcon = { dashboard: Icons.dashboard, reports: Icons.reports, settings: Icons.settings, access: Icons.access, usage: Icons.usage, apikeys: Icons.apikeys, auditlog: Icons.audit };
        const pageLabel = { dashboard: 'navDashboard', reports: 'navReports', settings: 'navSettings', access: 'navAccess', usage: 'navUsage', apikeys: 'navApiKeys', auditlog: 'navAuditLog' };
        ['dashboard', 'reports', 'settings', 'access', 'usage', 'apikeys', 'auditlog'].forEach(route => {
          if (Permissions.canAccess(route)) list.push({ label: t(pageLabel[route]), icon: pageIcon[route], route });
        });
        state.tools.filter(tool => tool.enabled && Permissions.canAccess(tool.id)).forEach(tool => {
          list.push({ label: tool.name, icon: iconFor(tool), route: tool.id });
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

      Login() {
        const mode = state.authMode || 'login'; // 'login' | 'signup' | 'reset'
        const linkStyle = 'color:var(--primary); cursor:pointer; font-weight:500;';

        let title, subtitle, body, footer;

        if (mode === 'signup') {
          title = t('signUpTitle');
          subtitle = t('signUpSubtitle');
          body = `
            <form id="signup-form">
              <div class="form-group">
                <label class="form-label">${t('nameLabel')}</label>
                <input type="text" id="signup-name" class="form-input" placeholder="Jane Doe" required />
              </div>
              <div class="form-group">
                <label class="form-label">${t('emailLabel')}</label>
                <input type="email" id="signup-email" class="form-input" placeholder="you@example.com" required />
              </div>
              <div class="form-group">
                <label class="form-label">${t('passwordLabel')}</label>
                <input type="password" id="signup-password" class="form-input" placeholder="••••••••" minlength="6" required />
              </div>
              <div class="form-group">
                <label class="form-label">${t('confirmPasswordLabel')}</label>
                <input type="password" id="signup-password-confirm" class="form-input" placeholder="••••••••" minlength="6" required />
              </div>
              <button type="submit" class="btn btn-primary w-full" style="margin-top:0.5rem;">${t('createAccountBtn')}</button>
            </form>`;
          footer = `<p style="font-size:0.85rem; text-align:center; margin-top:1.25rem; color:var(--text-muted);">${t('haveAccountText')} <span id="auth-switch-login" style="${linkStyle}">${t('signInLink')}</span></p>`;
        } else if (mode === 'reset') {
          title = t('resetPasswordTitle');
          subtitle = t('resetPasswordSubtitle');
          body = `
            <form id="reset-form">
              <div class="form-group">
                <label class="form-label">${t('emailLabel')}</label>
                <input type="email" id="reset-email" class="form-input" placeholder="you@example.com" required />
              </div>
              <button type="submit" class="btn btn-primary w-full" style="margin-top:0.5rem;">${t('sendResetLinkBtn')}</button>
            </form>`;
          footer = `<p style="font-size:0.85rem; text-align:center; margin-top:1.25rem;"><span id="auth-switch-login" style="${linkStyle}">${t('backToLogin')}</span></p>`;
        } else {
          title = t('loginTitle');
          subtitle = t('loginSubtitle');
          body = `
            <form id="login-form">
              <div class="form-group">
                <label class="form-label">${t('emailLabel')}</label>
                <input type="email" id="login-email" class="form-input" placeholder="you@example.com" required />
              </div>
              <div class="form-group">
                <label class="form-label">${t('passwordLabel')}</label>
                <input type="password" id="login-password" class="form-input" placeholder="••••••••" required />
              </div>
              <div style="text-align:right; margin-bottom:0.5rem;">
                <span id="auth-switch-reset" style="${linkStyle} font-size:0.8rem;">${t('forgotPasswordLink')}</span>
              </div>
              <button type="submit" class="btn btn-primary w-full">${t('signInBtn')}</button>
            </form>`;
          footer = `<p style="font-size:0.85rem; text-align:center; margin-top:1.25rem; color:var(--text-muted);">${t('noAccountText')} <span id="auth-switch-signup" style="${linkStyle}">${t('signUpLink')}</span></p>`;
        }

        return `
          <div id="auth-screen">
            <button class="theme-toggle" id="theme-toggle-btn" title="Toggle dark mode" style="position:fixed; top:1.5rem; right:1.5rem;">${state.theme === 'dark' ? Icons.sun : Icons.moon}</button>
            <div class="auth-card">
              <div class="auth-brand">
                <div class="auth-brand-logo">S</div>
                <h1 class="stat-value" style="font-size:1.5rem; font-weight:700;">Scanser</h1>
              </div>
              <h2 style="font-size:1.1rem; font-weight:600; text-align:center; margin-bottom:0.25rem;">${title}</h2>
              <p style="font-size:0.85rem; color:var(--text-muted); text-align:center; margin-bottom:1.5rem;">${subtitle}</p>
              ${body}
              ${footer}
            </div>
          </div>
        `;
      },

      Layout(content) {
        const collapsed = state.sidebarCollapsed ? 'collapsed' : '';
        const visibleTools = state.tools.filter(tool => tool.enabled && (
          state.user.role === 'admin' || (state.userAccess[state.user.id] || []).includes(tool.id)
        ));
        const roleLabel = state.user.role === 'admin' ? t('adminRole') : (state.user.role === 'viewer' ? t('viewerRole') : t('userRole'));
        const unreadCount = state.notifications.filter(n => !n.read).length;

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
                <a href="#" class="nav-item ${state.currentRoute === 'dashboard' ? 'active' : ''}" data-route="dashboard">
                  ${Icons.dashboard} <span class="nav-text">${t('navDashboard')}</span>
                </a>
                <a href="#" class="nav-item ${state.currentRoute === 'reports' ? 'active' : ''}" data-route="reports">
                  ${Icons.reports} <span class="nav-text">${t('navReports')}</span>
                </a>

                ${visibleTools.map(tool => `
                  <a href="#" class="nav-item ${state.currentRoute === tool.id ? 'active' : ''}" data-route="${tool.id}">
                    ${iconFor(tool)} <span class="nav-text">${tool.name}</span>
                  </a>
                `).join('')}

                <a href="#" class="nav-item ${state.currentRoute === 'settings' ? 'active' : ''}" data-route="settings">
                  ${Icons.settings} <span class="nav-text">${t('navSettings')}</span>
                </a>

                ${state.user.role === 'admin' ? `
                  <div class="nav-section-title">${t('adminSection')}</div>
                  <a href="#" class="nav-item ${state.currentRoute === 'access' ? 'active' : ''}" data-route="access">
                    ${Icons.access} <span class="nav-text">${t('navAccess')}</span>
                  </a>
                  <a href="#" class="nav-item ${state.currentRoute === 'usage' ? 'active' : ''}" data-route="usage">
                    ${Icons.usage} <span class="nav-text">${t('navUsage')}</span>
                  </a>
                  <a href="#" class="nav-item ${state.currentRoute === 'apikeys' ? 'active' : ''}" data-route="apikeys">
                    ${Icons.apikeys} <span class="nav-text">${t('navApiKeys')}</span>
                  </a>
                  <a href="#" class="nav-item ${state.currentRoute === 'auditlog' ? 'active' : ''}" data-route="auditlog">
                    ${Icons.audit} <span class="nav-text">${t('navAuditLog')}</span>
                  </a>
                ` : ''}
              </nav>
            </aside>

            <div class="main-wrapper">
              <header class="navbar">
                <button class="navbar-search" id="cmdk-trigger" style="border:none; cursor:pointer; text-align:left;">
                  ${Icons.search}
                  <input type="text" class="form-input" placeholder="${t('searchPlaceholder')}" readonly style="cursor:pointer;">
                  <span class="cmdk-kbd">${navigator.platform && navigator.platform.toUpperCase().includes('MAC') ? '⌘K' : 'Ctrl K'}</span>
                </button>

                <div class="flex items-center gap-4">
                  <button class="theme-toggle" id="theme-toggle-btn" title="Toggle dark mode">${state.theme === 'dark' ? Icons.sun : Icons.moon}</button>

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

                  <select id="lang-selector" class="form-select" style="padding: 0.35rem 0.5rem; font-size:0.85rem;">
                    <option value="en" ${state.language === 'en' ? 'selected' : ''}>English</option>
                    <option value="zh" ${state.language === 'zh' ? 'selected' : ''}>中文 (Simplified)</option>
                  </select>

                  <div class="dropdown">
                    <button class="btn btn-secondary btn-sm" id="profile-dropdown-btn">
                      ${Icons.user}
                      <span>${state.user.name}</span>
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

      dashboard() {
        const totalSubs = state.scans.length;
        const completedScores = state.scans.filter(s => s.status === 'completed' && s.score).map(s => parseInt(s.score));
        const avgScore = completedScores.length ? (completedScores.reduce((a, b) => a + b, 0) / completedScores.length).toFixed(1) + '%' : '—';
        const { remaining: creditsRemaining, pool: creditsPool } = creditStats();
        const activeKeysCount = state.apiKeys.filter(k => k.status === 'active').length;

        const visibleTools = state.tools.filter(tool => tool.enabled && (
          state.user.role === 'admin' || (state.userAccess[state.user.id] || []).includes(tool.id)
        ));

        return `
          <div class="page-header">
            <div>
              <h1 class="page-title">${t('welcomeBack')} ${state.user.name}</h1>
              <p style="color:var(--text-muted); font-size:0.9rem;">${t('welcomeDesc')}</p>
            </div>
          </div>

          <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap:1.25rem; margin-bottom:2rem;">
            <div class="card">
              <div style="color:var(--text-muted); font-size:0.85rem;">${t('statSubmissions')}</div>
              <div class="stat-value" style="font-size:1.75rem; font-weight:700; margin-top:0.25rem;">${totalSubs}</div>
            </div>
            <div class="card">
              <div style="color:var(--text-muted); font-size:0.85rem;">${t('statAvgScore')}</div>
              <div class="stat-value" style="font-size:1.75rem; font-weight:700; margin-top:0.25rem;">${avgScore}</div>
            </div>
            <div class="card">
              <div style="color:var(--text-muted); font-size:0.85rem;">${t('statCredits')}</div>
              <div class="stat-value" style="font-size:1.75rem; font-weight:700; margin-top:0.25rem;">${creditsRemaining} / ${creditsPool}</div>
              <div class="progress-bar-bg" style="margin-top:0.75rem;">
                <div class="progress-bar-fill" style="width:${(creditsRemaining / creditsPool) * 100}%;"></div>
              </div>
            </div>
            <div class="card">
              <div style="color:var(--text-muted); font-size:0.85rem;">${t('statActiveKeys')}</div>
              <div class="stat-value" style="font-size:1.75rem; font-weight:700; margin-top:0.25rem;">${activeKeysCount}</div>
            </div>
          </div>

          <div style="display:grid; grid-template-columns: 2fr 1fr; gap:1.5rem;">
            <div class="card">
              <h3 style="font-size:1.1rem; font-weight:600; margin-bottom:1rem;">${t('recentActivity')}</h3>
              ${state.scans.length ? `
              <div class="table-container">
                <table class="table">
                  <thead><tr><th>Title</th><th>Tool</th><th>Score</th><th>Status</th></tr></thead>
                  <tbody>
                    ${state.scans.slice(0, 5).map(s => {
                      const tool = state.tools.find(x => x.id === s.toolId);
                      return `
                      <tr>
                        <td><strong>${s.title}</strong></td>
                        <td>${tool ? tool.name : s.toolId}</td>
                        <td><span class="badge ${parseInt(s.score) > 15 ? 'badge-danger' : 'badge-success'}">${s.score}</span></td>
                        <td><span class="badge badge-info">${s.status}</span></td>
                      </tr>`;
                    }).join('')}
                  </tbody>
                </table>
              </div>` : `<p class="muted" style="margin-bottom:0;">${t('noScansYet')}</p>`}
            </div>

            <div class="card flex flex-col gap-3">
              <h3 style="font-size:1.1rem; font-weight:600; margin-bottom:0.5rem;">${t('quickActions')}</h3>
              ${visibleTools.length ? visibleTools.map(tool => `
                <button class="btn btn-secondary w-full justify-between" onclick="Router.navigate('${tool.id}')">
                  <span>${tool.name}</span>
                  <span>&rarr;</span>
                </button>
              `).join('') : `<p class="muted" style="margin-bottom:0;">${t('noneAssigned')}</p>`}
            </div>
          </div>
        `;
      },

      toolPage(tool) {
        const key = state.apiKeys.find(k => k.id === tool.apiKeyId);
        const connected = key && key.status === 'active';
        const statusBanner = connected
          ? `<div class="tool-status tool-status-connected">${Icons.statusOk} ${t('connectedVia')} ${key.provider}</div>`
          : `<div class="tool-status tool-status-disconnected">${Icons.statusWarn} ${t('notConnectedMsg')}</div>`;

        if (tool.type === 'upload') {
          const history = state.scans.filter(s => s.toolId === tool.id);
          return `
            <div class="page-header"><h1 class="page-title">${tool.name}</h1></div>
            ${statusBanner}
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1.5rem;">
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
          <div class="page-header"><h1 class="page-title">${tool.name}</h1></div>
          ${statusBanner}
          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1.5rem;">
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
                <input type="text" class="form-input" value="${state.user.name}" required />
              </div>
              <div class="form-group">
                <label class="form-label">${t('emailLabel')}</label>
                <input type="email" class="form-input" value="${state.user.email}" disabled />
              </div>
              <div class="form-group">
                <label class="form-label">${t('passwordLabel')}</label>
                <input type="password" class="form-input" placeholder="••••••••" />
              </div>
              <button type="submit" class="btn btn-primary" style="margin-top:1rem;">${t('saveChanges')}</button>
            </form>
          </div>

          ${state.user.role === 'admin' ? `
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
                    <th>${t('name')}</th><th>Email</th><th>${t('role')}</th><th>${t('status')}</th>
                    <th>${t('allowedTools')}</th><th>${t('credits')}</th><th>${t('actions')}</th>
                  </tr>
                </thead>
                <tbody>
                  ${state.users.map(u => {
                    const allowedIds = state.userAccess[u.id] || [];
                    const allowedLabel = u.role === 'admin'
                      ? t('allToolsAdmin')
                      : (allowedIds.length
                          ? allowedIds.map(id => { const tool = state.tools.find(x => x.id === id); return tool ? tool.name : id; }).join(', ')
                          : t('noneAssigned'));
                    const bal = allCreditBalances[u.id];
                    const balLabel = bal === undefined ? '—' : bal;
                    return `
                    <tr>
                      <td><strong>${u.name}</strong></td>
                      <td>${u.email}</td>
                      <td><span class="badge badge-info">${u.role}</span></td>
                      <td><span class="badge ${u.status === 'active' ? 'badge-success' : 'badge-danger'}">${u.status}</span></td>
                      <td style="max-width:240px; font-size:0.8rem; color:var(--text-muted);">${allowedLabel}</td>
                      <td>
                        <strong>${balLabel}</strong>
                        ${isSupabaseConfigured() ? `<button class="btn btn-secondary btn-sm" style="margin-left:0.4rem;" onclick="Events.openCreditModal('${u.id}')">${t('adjust')}</button>` : ''}
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
                    return `
                    <tr>
                      <td><strong>${k.provider}</strong></td>
                      <td>${tool ? `<span class="badge badge-info">${tool.name}</span>` : `<span class="badge badge-neutral">${t('unlinked')}</span>`}</td>
                      <td style="font-family:monospace;">${k.visible ? k.key : maskKey(k.key)}</td>
                      <td>${k.created}</td>
                      <td><span class="badge ${k.status === 'active' ? 'badge-success' : 'badge-danger'}">${k.status}</span></td>
                      <td>
                        <button class="btn btn-secondary btn-sm" onclick="Events.toggleKeyVisibility('${k.id}')">${k.visible ? 'Hide' : 'Show'}</button>
                        <button class="btn btn-secondary btn-sm" onclick="Events.copyKey('${k.id}')">${t('copy')}</button>
                      </td>
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
      bindLoginEvents() {
        const themeBtn = document.getElementById('theme-toggle-btn');
        if (themeBtn) themeBtn.onclick = () => Theme.toggle();

        const switchMode = (mode) => {
          state.authMode = mode;
          Router.renderScreen('login');
        };
        const toSignup = document.getElementById('auth-switch-signup');
        if (toSignup) toSignup.onclick = () => switchMode('signup');
        const toReset = document.getElementById('auth-switch-reset');
        if (toReset) toReset.onclick = () => switchMode('reset');
        const toLogin = document.getElementById('auth-switch-login');
        if (toLogin) toLogin.onclick = () => switchMode('login');

        const loginForm = document.getElementById('login-form');
        if (loginForm) {
          loginForm.onsubmit = async (e) => {
            e.preventDefault();
            const submitBtn = loginForm.querySelector('button[type="submit"]');
            const email = document.getElementById('login-email').value.trim();
            const pass = document.getElementById('login-password').value;
            if (submitBtn) submitBtn.disabled = true;
            try {
              const res = await AuthService.login(email, pass);
              if (res.success) {
                AuditLog.log('Signed in', state.user.email);
                Toast.show('Logged in successfully', 'success');
                await hydrateFromSupabase();
                Router.navigate('dashboard');
                subscribeRealtime();
              } else {
                Toast.show(res.message, 'danger');
              }
            } finally {
              if (submitBtn) submitBtn.disabled = false;
            }
          };
        }

        const signupForm = document.getElementById('signup-form');
        if (signupForm) {
          signupForm.onsubmit = async (e) => {
            e.preventDefault();
            const submitBtn = signupForm.querySelector('button[type="submit"]');
            const name = document.getElementById('signup-name').value.trim();
            const email = document.getElementById('signup-email').value.trim();
            const pass = document.getElementById('signup-password').value;
            const passConfirm = document.getElementById('signup-password-confirm').value;
            if (pass !== passConfirm) {
              Toast.show(t('passwordMismatch'), 'danger');
              return;
            }
            if (submitBtn) submitBtn.disabled = true;
            try {
              const res = await AuthService.signUp(email, pass, name);
              if (!res.success) {
                Toast.show(res.message || t('signUpFailed'), 'danger');
                return;
              }
              if (res.needsConfirmation) {
                Toast.show(t('checkEmailBody'), 'success');
                switchMode('login');
              } else {
                // "Confirm email" is off — signUp already returned a live session.
                Toast.show('Account created', 'success');
                await hydrateFromSupabase();
                Router.navigate('dashboard');
                subscribeRealtime();
              }
            } finally {
              if (submitBtn) submitBtn.disabled = false;
            }
          };
        }

        const resetForm = document.getElementById('reset-form');
        if (resetForm) {
          resetForm.onsubmit = async (e) => {
            e.preventDefault();
            const submitBtn = resetForm.querySelector('button[type="submit"]');
            const email = document.getElementById('reset-email').value.trim();
            if (submitBtn) submitBtn.disabled = true;
            try {
              await AuthService.resetPassword(email);
              Toast.show(t('resetLinkSent'), 'success');
              switchMode('login');
            } finally {
              if (submitBtn) submitBtn.disabled = false;
            }
          };
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

        document.querySelectorAll('.nav-item').forEach(link => {
          link.onclick = (e) => {
            e.preventDefault();
            Router.navigate(link.getAttribute('data-route'));
          };
        });

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

        const cmdkTrigger = document.getElementById('cmdk-trigger');
        if (cmdkTrigger) {
          cmdkTrigger.onclick = (e) => {
            e.preventDefault();
            CommandPalette.open();
          };
        }

        const logoutBtn = document.getElementById('logout-btn');
        if (logoutBtn) {
          logoutBtn.onclick = (e) => {
            e.preventDefault();
            AuthService.logout();
          };
        }

        const langSel = document.getElementById('lang-selector');
        if (langSel) {
          langSel.onchange = (e) => {
            state.language = e.target.value;
            localStorage.setItem('scanser_lang', state.language);
            Router.navigate(state.currentRoute);
          };
        }
      },

      bindPageEvents(route) {
        if (route === 'settings') {
          const settingsForm = document.getElementById('settings-form');
          if (settingsForm) {
            settingsForm.onsubmit = (e) => {
              e.preventDefault();
              AuditLog.log('Profile updated', state.user.email);
              Toast.show(t('successSave'), 'success');
            };
          }

          // New tools are added only in code (state.tools / API_CONFIG below).
          // There is intentionally no in-app "Add Tool" form — see SECTION 2.
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
              spendCredit(savedScan && savedScan.id);
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
            spendCredit(savedScan && savedScan.id);
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
              <label class="form-label">Email</label>
              <input type="email" id="modal-user-email" class="form-input" required />
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
            const email = document.getElementById('modal-user-email').value.trim();
            const role = document.getElementById('modal-user-role').value;
            if (!name || !email) return false;

            const id = String(Date.now());
            state.users.push({ id, name, email, role, status: 'active', created: todayStr() });

            if (role === 'user') {
              const checked = Array.from(document.querySelectorAll('.modal-user-access-check:checked')).map(c => c.value);
              state.userAccess[id] = checked;
            }

            AuditLog.log('User added', `${name} (${email}, ${role})`);
            Toast.show('User added successfully', 'success');
            Router.navigate('access');
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
            Router.navigate('access');
            return true;
          }
        );
      },

      openCreditModal(userId) {
        const user = state.users.find(u => u.id === userId);
        if (!user) return;
        if (!isSupabaseConfigured()) { Toast.show('Connect Supabase to manage real credits.', 'danger'); return; }
        const currentBal = allCreditBalances[userId];

        Modal.open(
          `${t('adjustCredits')} — ${user.name}`,
          `
            <p class="muted">${t('adjustCreditsDesc')} ${t('currentBalance')}: <strong>${currentBal === undefined ? '—' : currentBal}</strong></p>
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
            const raw = document.getElementById('credit-amount-input').value;
            const amount = parseInt(raw, 10);
            if (!amount || isNaN(amount)) { Toast.show(t('enterValidAmount'), 'danger'); return false; }
            const note = document.getElementById('credit-note-input').value.trim();

            DataLayer.adjustUserCredit(userId, amount, note).then(newBalance => {
              if (newBalance === null) { Toast.show(t('creditAdjustFailed'), 'danger'); return; }
              // Don't set the balance locally here — the usage_ledger INSERT
              // this RPC just made will arrive over the realtime subscription
              // in a moment and update it exactly once. Setting it here too
              // would double-count against that event.
              AuditLog.log(amount > 0 ? 'Credits added' : 'Credits removed', `${user.name} — ${amount > 0 ? '+' : ''}${amount}${note ? ' (' + note + ')' : ''}`);
              Toast.show(t('creditsUpdated'), 'success');
            });
            return true;
          },
          t('saveChanges')
        );
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
        Router.navigate('access');
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
          Router.navigate('access');
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
          Router.navigate('apikeys');
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
      if (!isSupabaseConfigured()) return; // stay on local in-memory state — expected for now
      if (!state.user) return; // RLS returns nothing useful before a session exists

      const [toolSettings, scanRows, auditRows, profileRows, accessRows, notifRows, creditSettingsRow, balance, allBalanceRows] = await Promise.all([
        DataLayer.loadToolSettings(),
        DataLayer.loadScans(),
        DataLayer.loadAuditLog(),
        DataLayer.loadProfiles(),
        DataLayer.loadUserToolAccess(),
        DataLayer.loadNotifications(),
        DataLayer.loadCreditSettings(),
        DataLayer.loadCreditBalance(),
        DataLayer.loadAllCreditBalances() // admin gets every user's row; non-admin just gets their own (RLS), harmless either way
      ]);

      if (allBalanceRows) {
        allCreditBalances = {};
        allBalanceRows.forEach(row => { allCreditBalances[row.user_id] = row.balance; });
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
          name: row.name || row.email,
          email: row.email,
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

      if (creditSettingsRow) creditSettings = creditSettingsRow;
      if (balance !== null) creditBalance = balance;

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
            creditBalance = (creditBalance === null ? 0 : creditBalance) + row.delta;
          }
          if (state.user.role === 'admin') {
            allCreditBalances[row.user_id] = (allCreditBalances[row.user_id] || 0) + row.delta;
          }

          // Only re-render if the change is actually visible on the current
          // screen — avoids yanking someone mid-form on an unrelated page.
          if (state.currentRoute === 'dashboard' || state.currentRoute === 'access') {
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

    document.addEventListener('DOMContentLoaded', async () => {
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
        Router.navigate(state.currentRoute);
        subscribeRealtime();
      } else {
        Router.navigate('login');
      }
    });
