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
        loadingLabel: "Loading...",
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
        navRecharge: "Recharge",
        navRedeemCode: "Redeem Code",
        navMigration: "Migration",
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
        fileTypesHint: "PDF, DOC, DOCX or TXT",
        removeFile: "Remove",
        submitProcess: "Process Document",
        scanHistory: "Scan History",
        detectionModelLabel: "Detection Model",
        chooseModelLabel: "Choose detection model",
        excludeReferencesLabel: "Exclude references / bibliography",
        excludeReferencesHint: "Quotes and the reference list are skipped when scoring.",
        viewFullHistory: "View all in History →",
        recentScans: "Recent",
        citationsAll: "Citations: All",
        citationsIncluded: "Citations included",
        citationsExcluded: "Citations excluded",
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

        // --------------------------------------------------------------
        // RECHARGE / MEMBERSHIP (time-tier plans + demo checkout)
        // --------------------------------------------------------------
        rechargePageTitle: "Enhanced Membership",
        rechargePageSubtitle: "Unlock all premium rewrite models & detection",
        backBtn: "Back",
        selectDuration: "Select Duration",
        hotDealBadge: "Best Value",
        hotRibbon: "Hot",
        bestBadge: "Best",
        orderDetailsTitle: "Order Details",
        orderType: "Type",
        orderTypeValue: "Enhanced Membership",
        orderDuration: "Duration",
        orderDurationUnselected: "Select",
        orderOriginal: "Original",
        orderDiscount: "Discount",
        orderTotal: "Total",
        paymentMethod: "Payment Method",
        payAlipay: "Alipay",
        payWechat: "WeChat",
        demoQrNotice: "Demo QR — Alipay/WeChat not integrated yet",
        waitingForPayment: "Waiting for payment...",
        paymentDetectedHint: "Payment detected — confirming...",
        simulatePaymentBtn: "Simulate payment (demo)",
        gatewayNotConnectedTitle: "Payment gateway not connected yet",
        gatewayNotConnectedBody: "No payment gateway is connected yet — just the API integration is left. Connect Alipay or WeChat Pay to start accepting real payments here.",
        redeemCodeBtn: "Redeem Code",
        membershipPurchaseSuccess: "Membership activated — enjoy!",
        pickAPlanFirst: "Pick a duration first.",
        membershipBenefitsTitle: "Membership Benefits",
        benefitsFeaturesTitle: "Features",
        benefitsFeature1: "File rewriting with format preservation",
        benefitsFeature2: "Auto AI rate, academic & similarity detection",
        benefitsFeature3: "Export comparison view",
        benefitsModelsTitle: "Rewrite Models",
        benefitsDetectionTitle: "Detection Models",
        benefitsDetection1: "CNKI/Weipu/Wanfang/Daya platform detection",
        benefitsDetection2: "Academic level detection",
        benefitsDetection3: "Similarity detection",
        benefitsDetection4: "Grammar detection",
        benefitsDetection5: "Language detection",
        benefitsExclusiveTitle: "Exclusive",
        benefitsExclusive1: "Priority customer support",
        benefitsExclusive2: "Early access to new features",
        comingSoonTitle: "Coming Soon",
        comingSoon1: "Plagiarism report rewriting",
        comingSoon2: "AI report rewriting",
        comingSoon3: "More platforms",
        comingSoon4: "More languages",
        comingSoon5: "Image AI reduction",
        membershipBadgeActive: "Enhanced",
        membershipBadgeUpgrade: "Upgrade",
        membershipExpiredToast: "Your membership has expired.",
        timeUnitDay: "d",
        timeUnitHour: "h",
        timeUnitMin: "m",

        planLabel1h: "1 Hour",
        planLabel3h: "3 Hours",
        planLabel12h: "12 Hours",
        planLabel1d: "1 Day",
        planLabel3d: "3 Days",
        planLabel7d: "7 Days",
        planLabel1mo: "1 Month",
        planLabel1q: "1 Quarter",
        planLabel6mo: "6 Months",
        planLabel1y: "1 Year",

        // --------------------------------------------------------------
        // QUOTA (rolling-window usage tracker — chars processed by the
        // rewrite tools, tracked locally per user; see SECTION 2)
        // --------------------------------------------------------------
        navQuota: "Quota",
        quotaPageTitle: "Quota Usage",
        quotaPageSubtitle: "Rolling usage limits across the last minute, hour, and day. Resets automatically as time passes.",
        quotaDemoNote: "Tracked locally in this browser as you use the rewrite tools — resets if you clear site data.",
        quotaWindow1min: "1 Minute",
        quotaWindow1hr: "1 Hour",
        quotaWindow3hr: "3 Hours",
        quotaWindow12hr: "12 Hours",
        quotaWindow24hr: "24 Hours",
        quotaLeftLabel: "Left",
        quotaRefreshBtn: "Refresh",

        // --------------------------------------------------------------
        // PROMOTION (social-post reward tiers + submissions; see
        // SECTION 2 for PROMOTION_REWARD_TIERS / promotionState)
        // --------------------------------------------------------------
        navPromotion: "Promotion",
        promotionPageTitle: "Promotion Rewards",
        promotionPageSubtitle: "Post about Scanser on social media and earn rewards based on engagement.",
        copyBtn: "Copy",
        copiedToast: "Copied to clipboard",
        promotionTabApply: "Apply",
        promotionTabRecords: "Records",
        promotionRulesTitle: "Activity Rules",
        promotionRule1: "Each account may submit up to 2 applications, using different platforms.",
        promotionRule2: "Applications are reviewed within 2 working days.",
        promotionRule3: "Rewards are not cumulative — only your highest qualifying tier is granted per submission.",
        promotionRule4: "Cash rewards can be claimed any number of times across separate approved submissions.",
        promotionRule5: "Cash rewards are paid out manually — contact customer service with your approved submission to claim.",
        promotionRule6: "Your post review must be at least 30 words, with a screenshot attached as proof.",
        rewardTiersTitle: "Reward Tiers",
        rewardTiersLikesCol: "Likes",
        rewardTiersRewardCol: "Reward",
        promoTierPost: "Post Submitted",
        promoTier30: "30+ Likes",
        promoTier100: "100+ Likes",
        promoTier1000: "1,000+ Likes",
        promoTier5000: "5,000+ Likes",
        promoRewardPost: "1 Hour VIP",
        promoReward30: "8 Hours VIP",
        promoReward100: "24 Hours VIP",
        promoReward1000: "¥100 Cash",
        promoReward5000: "¥300 Cash",
        promotionApplyTitle: "Submit Your Post",
        promotionApplyDesc: "Share Scanser on social media, then submit your post below once it's live.",
        applyPlatformLabel: "Platform",
        applyPostUrlLabel: "Video/Article Link",
        applyPostUrlPlaceholder: "Enter your published video/article link",
        applyLikesLabel: "Current Likes",
        applyCategoryLabel: "Reward Category",
        applyCategoryPlaceholder: "Select a category",
        wechatIdLabel: "WeChat ID",
        wechatIdPlaceholder: "Enter your WeChat ID (for reward distribution)",
        applyDescriptionLabel: "Additional Notes",
        applyDescriptionPlaceholder: "Describe your promotion content (optional)",
        applyScreenshotLabel: "Screenshot Proof",
        applyScreenshotHint: "Upload a screenshot of your post as proof",
        applyScreenshotChoose: "Choose File",
        applyScreenshotNone: "No file chosen",
        wordCountLabel: "words",
        descriptionTooShortError: "Your review needs to be at least 30 words.",
        submitApplicationBtn: "Submit Application",
        applicationSubmittedToast: "Application submitted — we'll review it and get back to you.",
        fillRequiredFields: "Please fill in all required fields.",
        promoPlatformXiaohongshu: "Xiaohongshu",
        promoPlatformWeibo: "Weibo",
        promoPlatformDouyin: "Douyin",
        promoPlatformBilibili: "Bilibili",
        promoPlatformZhihu: "Zhihu",
        promoPlatformOther: "Other",
        recordsEmptyTitle: "No submissions yet",
        recordsEmptyDesc: "Apply on the Apply tab once you've posted about Scanser.",
        recordsPlatformCol: "Platform",
        recordsLikesCol: "Likes",
        recordsTierCol: "Reward Tier",
        recordsStatusCol: "Status",
        recordsDateCol: "Submitted",
        statusPending: "Pending",
        statusApproved: "Approved",
        statusRejected: "Rejected",

        // --------------------------------------------------------------
        // REDEEM CODE (see SECTION 2 for redeemCodesState / redeemCode)
        // --------------------------------------------------------------
        navRedeemCode: "Redeem Code",
        redeemPageTitle: "Redeem Code",
        redeemPageSubtitle: "Have a redeem code? Enter it below to add time to your membership.",
        redeemCodeInputLabel: "Redeem Code",
        redeemCodeInputPlaceholder: "e.g. SCXXXXXX",
        redeemSubmitBtn: "Redeem",
        redeemSuccessToast: "Code redeemed — {n} hours added to your membership!",
        redeemInvalidCodeError: "That code isn't valid.",
        redeemAlreadyUsedError: "You've already used this code.",
        redeemExpiredError: "This code has expired.",
        redeemMaxUsesError: "This code has already reached its usage limit.",
        redeemHowItWorks: "How it works",
        redeemStep1: "Get a redeem code from a promotion, giveaway, or customer support.",
        redeemStep2: "Enter the code above and hit Redeem.",
        redeemStep3: "The membership time is added instantly to your account.",

        // --------------------------------------------------------------
        // MIGRATION (old-account membership transfer; see SECTION 2 for
        // oldAccountsLocal / migrateOldAccount). Surfaced as the "Welcome"
        // popup (Events.openMigrationModal), not its own page.
        navMigration: "Migration",
        migrationWelcomeTitle: "Welcome",
        migrationReturningTitle: "I'm a Returning User",
        migrationReturningSubtitle: "Migrate old membership",
        migrationTabPassword: "Password",
        migrationTabSms: "SMS",
        migrationOldAccountLabel: "Old Account",
        migrationOldAccountPlaceholder: "Phone, account or email",
        migrationOldPasswordLabel: "Old Password",
        migrationOldPasswordPlaceholder: "Legacy password",
        migrationSmsCodeLabel: "SMS Code",
        migrationSmsCodePlaceholder: "6-digit code",
        migrationSendCodeBtn: "Send Code",
        migrationSmsSentToast: "Demo mode — enter any 6-digit code.",
        migrationVerifyBtn: "Verify & Migrate",
        migrationSuccessToast: "Migration successful — {n} hours added to your membership!",
        migrationNotFoundError: "We couldn't find an old account matching those details.",
        migrationBadPasswordError: "Incorrect old-account password.",
        migrationAlreadyMigratedError: "This old account has already been migrated.",
        migrationMissingFieldsError: "Please enter both your old account and password.",
        migrationOrDivider: "OR",
        migrationNewTitle: "I'm New",
        migrationNewSubtitle: "Redeem card or start using",
        migrationRedeemCta: "Redeem a Code",
        migrationStartCta: "Start Using Scanser",

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
        demoInfoPendingItems: "Real WeChat login — needs a WeChat Open Platform AppID + Secret on the backend|Real plagiarism / AI-detection scores — needs Turnitin, iThenticate or a stealth-rewrite API key|Payments — needs Alipay and WeChat Pay merchant credentials connected to a real payment gateway",
        demoInfoCta: "Got it, let's explore",

        // Floating bottom-left "Demo View" status chip + its Read More popup
        // (same content/modal as demoInfo* above, just reachable from
        // anywhere in the app, not only right after login).
        demoStatusChipText: "Demo View for now — real backend is connected, just needs APIs configured",
        demoStatusReadMore: "Read More",

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
        navRedeemCodesAdmin: "Redeem Codes",

        // Admin: Redeem Codes management
        adminRedeemCodesTitle: "Redeem Codes",
        adminGenerateCodeTitle: "Generate New Code",
        adminHoursLabel: "Hours",
        adminMaxUsesLabel: "Max Uses",
        adminExpiresInDaysLabel: "Expires In (days)",
        adminGenerateBtn: "Generate Code",
        adminCodeGeneratedToast: "Code generated",
        adminCodeCol: "Code",
        adminHoursCol: "Hours",
        adminUsesCol: "Uses",
        adminExpiresCol: "Expires",
        adminStatusCol: "Status",
        adminCodeActive: "Active",
        adminCodeExpired: "Expired",
        adminCodeExhausted: "Exhausted",
        adminNoCodesYet: "No codes generated yet.",
        adminCopyCodeBtn: "Copy",
        adminExistingCodesTitle: "Existing Codes",

        // Admin — Promotion Review (Phase 4)
        adminPromoReviewTitle: "Promotion Review",
        adminPromoReviewDesc: "Approve or reject social-post reward submissions. Approving a VIP-hour tier grants membership immediately; cash tiers still need a manual payout confirmation.",
        adminPromoFilterAll: "All",
        adminPromoUserCol: "User",
        adminPromoPlatformCol: "Platform",
        adminPromoLikesCol: "Likes",
        adminPromoTierCol: "Reward Tier",
        adminPromoDescCol: "Review",
        adminPromoScreenshotCol: "WeChat ID",
        adminPromoStatusCol: "Status",
        adminPromoSubmittedCol: "Submitted",
        adminApproveBtn: "Approve",
        adminRejectBtn: "Reject",
        adminMarkPaidBtn: "Mark Paid",
        adminCashPendingBadge: "Cash pending payout",
        adminCashPaidBadge: "Paid",
        adminNoPromoSubmissions: "No submissions yet.",
        adminPromoApprovedToast: "Submission approved",
        adminPromoRejectedToast: "Submission rejected",
        adminPromoPaidToast: "Marked as paid",
        adminViewPostLink: "View Post",

        // Admin — Recharge Plan Settings (Phase 4)
        adminPlanSettingsTitle: "Recharge Plans",
        adminPlanSettingsDesc: "Edit price, original (strike-through) price, and which plan shows the Hot / Best badge. Changes apply immediately to the Recharge page.",
        adminPlanCol: "Plan",
        adminPlanPriceCol: "Price (¥)",
        adminPlanOriginalCol: "Original Price (¥)",
        adminPlanHotCol: "Hot",
        adminPlanBestCol: "Best",
        adminPlanSaveBtn: "Save Plan Settings",
        adminPlanSettingsSaved: "Recharge plan settings saved",
        adminPlanResetBtn: "Reset to Defaults",

        // Admin — Quota Limits (Phase 4)
        adminQuotaLimitsTitle: "Quota Limits",
        adminQuotaLimitsDesc: "Set the character limit for each usage window. Changes apply immediately across the app.",
        adminQuotaWindowCol: "Window",
        adminQuotaLimitCol: "Limit (characters)",
        adminQuotaSaveBtn: "Save Quota Limits",
        adminQuotaLimitsSaved: "Quota limits saved",
        adminQuotaResetBtn: "Reset to Defaults",

        // Admin — Old Accounts / Migration staging (Phase 4)
        adminOldAccountsTitle: "Old Accounts",
        adminOldAccountsDesc: "The migration staging list used by \"I'm a Returning User\". Add old-system accounts here so users can migrate their remaining time onto their new Scanser account.",
        adminAddOldAccountTitle: "Add Old Account",
        adminOldIdentifierLabel: "Old Account (email / phone / username)",
        adminOldPasswordLabel: "Old Password",
        adminOldHoursLabel: "Hours Remaining",
        adminAddOldAccountBtn: "Add",
        adminOldAccountsExistingTitle: "Existing Old Accounts",
        adminOldIdentifierCol: "Identifier",
        adminOldHoursCol: "Hours",
        adminOldMigratedCol: "Migrated",
        adminOldMigratedYes: "Migrated",
        adminOldMigratedNo: "Not yet",
        adminOldAccountAddedToast: "Old account added",
        adminNoOldAccounts: "No old accounts staged yet.",

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
        downloadMenuLabel: "Download",
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
        navStartRewriting: "Start Rewriting",
        publicNavStartRewriting: "Start Rewriting",
        publicNavAiPrediction: "AI Rate Prediction",
        publicNavPaperCheck: "Paper Check",
        publicNavHistory: "History",
        publicNavRanking: "Model Ranking",
        modelRankingSubtitle: "Usage statistics and trend analysis for rewriting models",
        modelRankingDateRange: "Date Range",
        modelRanking1Day: "1 Day",
        modelRanking1Week: "1 Week",
        modelRanking1Month: "1 Month",
        modelRankingLanguage: "Language",
        modelRankingChinese: "Chinese",
        modelRankingEnglish: "English",
        modelRankingPlatform: "Platform",
        modelRankingAllPlatforms: "All",
        statTotalCalls: "Total Calls",
        statTopModels: "Top 3 Models",
        statActiveModels: "Active Models",
        modelUsageTrendTitle: "Model Usage Trend",
        modelUsageTrendSubtitle: "Model call ranking",
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
        detectionModelsLabel: "Models",
        rewriteTextInputTab: "Text Input",
        rewriteFileTab: "File Rewrite",
        rewriteLanguageLabel: "Language",
        rewriteLangChinese: "Chinese",
        rewriteLangEnglish: "English",
        rewritePlatformLabel: "Platform",
        rewriteStrengthLabel: "Strength (1-11)",
        rewriteRecMarker: "Rec",
        rewriteModeLabel: "Rewrite Mode",
        rewriteLockedHint: "Platform, strength, and mode are Enhanced Membership perks.",
        rewriteLockedCta: "Recharge to unlock",
        rewriteSampleBtn: "Sample",
        rewriteStartBtn: "Start Rewriting",
        rewriteResultLabel: "Rewrite Result",
        rewriteResultPlaceholder: "Rewrite result will appear here",
        rewriteFileDropHint: "Drag and drop file here or click to browse",
        rewriteCharsLabel: "chars",
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
        signedInToastWelcome: "Signed in — welcome back!",
        wechatPendingTitle: "WeChat sign-in — coming soon",
        wechatPendingNotice: "WeChat sign-in isn't connected to the real API yet, so this is just a placeholder for now. Once the WeChat API is integrated, this will work perfectly with real QR sign-in. For now, tap the button below to continue with a demo account.",
        wechatDemoLoginBtn: "Continue with Demo Account"
      },
      zh: {
        loadingLabel: "加载中...",
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
        navRecharge: "充值",
        navRedeemCode: "兑换码",
        navMigration: "账号迁移",
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
        fileTypesHint: "支持 PDF、DOC、DOCX 或 TXT",
        removeFile: "移除",
        submitProcess: "提交并开始处理",
        scanHistory: "历史检测记录",
        detectionModelLabel: "检测模型",
        chooseModelLabel: "选择检测模型",
        excludeReferencesLabel: "排除引用/参考文献",
        excludeReferencesHint: "评分时将跳过引用内容和参考文献列表。",
        viewFullHistory: "查看全部历史 →",
        recentScans: "最近记录",
        citationsAll: "引用：全部",
        citationsIncluded: "包含引用",
        citationsExcluded: "排除引用",
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

        // --------------------------------------------------------------
        // 充值 / 会员（时长套餐 + 演示收银台）
        // --------------------------------------------------------------
        rechargePageTitle: "增强会员",
        rechargePageSubtitle: "解锁全部高级改写模型与检测功能",
        backBtn: "返回",
        selectDuration: "选择时长",
        hotDealBadge: "超值优惠",
        hotRibbon: "热门",
        bestBadge: "最划算",
        orderDetailsTitle: "订单详情",
        orderType: "类型",
        orderTypeValue: "增强会员",
        orderDuration: "时长",
        orderDurationUnselected: "请选择",
        orderOriginal: "原价",
        orderDiscount: "优惠",
        orderTotal: "合计",
        paymentMethod: "支付方式",
        payAlipay: "支付宝",
        payWechat: "微信支付",
        demoQrNotice: "演示二维码 — 支付宝/微信支付暂未接入",
        waitingForPayment: "等待支付中...",
        paymentDetectedHint: "已检测到付款，正在确认...",
        simulatePaymentBtn: "模拟支付（演示）",
        gatewayNotConnectedTitle: "支付网关尚未接入",
        gatewayNotConnectedBody: "目前还未连接任何支付网关，仅差 API 对接这一步。接入支付宝或微信支付后，即可在这里开始收款。",
        redeemCodeBtn: "兑换码",
        membershipPurchaseSuccess: "会员已开通，尽情使用吧！",
        pickAPlanFirst: "请先选择一个时长套餐。",
        membershipBenefitsTitle: "会员权益",
        benefitsFeaturesTitle: "功能",
        benefitsFeature1: "文件改写并保留原格式",
        benefitsFeature2: "自动检测AI率、学术查重与相似度",
        benefitsFeature3: "导出对比视图",
        benefitsModelsTitle: "改写模型",
        benefitsDetectionTitle: "检测模型",
        benefitsDetection1: "知网/维普/万方/大雅平台检测",
        benefitsDetection2: "学术等级检测",
        benefitsDetection3: "相似度检测",
        benefitsDetection4: "语法检测",
        benefitsDetection5: "语言检测",
        benefitsExclusiveTitle: "专属权益",
        benefitsExclusive1: "优先客服支持",
        benefitsExclusive2: "新功能优先体验",
        comingSoonTitle: "即将上线",
        comingSoon1: "查重报告改写",
        comingSoon2: "AI报告改写",
        comingSoon3: "更多平台",
        comingSoon4: "更多语言",
        comingSoon5: "图片AI降重",
        membershipBadgeActive: "增强会员",
        membershipBadgeUpgrade: "升级会员",
        membershipExpiredToast: "您的会员已到期。",
        timeUnitDay: "天",
        timeUnitHour: "小时",
        timeUnitMin: "分钟",

        planLabel1h: "1小时卡",
        planLabel3h: "3小时卡",
        planLabel12h: "12小时卡",
        planLabel1d: "1天卡",
        planLabel3d: "3天卡",
        planLabel7d: "7天卡",
        planLabel1mo: "1个月卡",
        planLabel1q: "1季卡",
        planLabel6mo: "半年卡",
        planLabel1y: "1年卡",

        // --------------------------------------------------------------
        // 配额（滚动窗口用量统计 — 使用改写工具时消耗的字符数，本地按用户跟踪；见 SECTION 2）
        // --------------------------------------------------------------
        navQuota: "配额",
        quotaPageTitle: "配额使用情况",
        quotaPageSubtitle: "过去1分钟、1小时、1天等滚动窗口内的用量限制，会随时间自动重置。",
        quotaDemoNote: "在您使用改写工具时于本浏览器本地统计 — 清除网站数据后会重置。",
        quotaWindow1min: "1分钟",
        quotaWindow1hr: "1小时",
        quotaWindow3hr: "3小时",
        quotaWindow12hr: "12小时",
        quotaWindow24hr: "24小时",
        quotaLeftLabel: "剩余",
        quotaRefreshBtn: "刷新",

        // --------------------------------------------------------------
        // 推广（社交媒体发帖奖励档位 + 提交记录；见 SECTION 2 的
        // PROMOTION_REWARD_TIERS / promotionState）
        // --------------------------------------------------------------
        navPromotion: "推广",
        promotionPageTitle: "推广奖励",
        promotionPageSubtitle: "在社交媒体发布关于 Scanser 的帖子，根据点赞数获得奖励。",
        copyBtn: "复制",
        copiedToast: "已复制到剪贴板",
        promotionTabApply: "申请",
        promotionTabRecords: "记录",
        promotionRulesTitle: "活动规则",
        promotionRule1: "每个账号最多可提交 2 次申请，且需使用不同平台。",
        promotionRule2: "申请将在 2 个工作日内完成审核。",
        promotionRule3: "奖励不可叠加 — 每次提交仅按您达到的最高档位发放。",
        promotionRule4: "现金奖励可在不同的已通过申请中不限次数领取。",
        promotionRule5: "现金奖励需人工发放 — 请携带已通过的申请联系客服领取。",
        promotionRule6: "您的点评需不少于 30 字，并需附上截图作为证明。",
        rewardTiersTitle: "奖励档位",
        rewardTiersLikesCol: "点赞数",
        rewardTiersRewardCol: "奖励",
        promoTierPost: "已提交帖子",
        promoTier30: "30+ 点赞",
        promoTier100: "100+ 点赞",
        promoTier1000: "1,000+ 点赞",
        promoTier5000: "5,000+ 点赞",
        promoRewardPost: "1小时会员",
        promoReward30: "8小时会员",
        promoReward100: "24小时会员",
        promoReward1000: "¥100 现金",
        promoReward5000: "¥300 现金",
        promotionApplyTitle: "提交您的帖子",
        promotionApplyDesc: "在社交媒体分享 Scanser，发布后在下方提交您的帖子。",
        applyPlatformLabel: "平台",
        applyPostUrlLabel: "视频/文章链接",
        applyPostUrlPlaceholder: "输入您已发布的视频/文章链接",
        applyLikesLabel: "当前点赞数",
        applyCategoryLabel: "奖励档位",
        applyCategoryPlaceholder: "选择档位",
        wechatIdLabel: "微信号",
        wechatIdPlaceholder: "输入您的微信号（用于发放奖励）",
        applyDescriptionLabel: "补充说明",
        applyDescriptionPlaceholder: "描述您的推广内容（选填）",
        applyScreenshotLabel: "截图证明",
        applyScreenshotHint: "上传您帖子的截图作为证明",
        applyScreenshotChoose: "选择文件",
        applyScreenshotNone: "未选择文件",
        wordCountLabel: "字",
        descriptionTooShortError: "您的点评需不少于30字。",
        submitApplicationBtn: "提交申请",
        applicationSubmittedToast: "申请已提交 — 我们会尽快审核并与您联系。",
        fillRequiredFields: "请填写所有必填字段。",
        promoPlatformXiaohongshu: "小红书",
        promoPlatformWeibo: "微博",
        promoPlatformDouyin: "抖音",
        promoPlatformBilibili: "哔哩哔哩",
        promoPlatformZhihu: "知乎",
        promoPlatformOther: "其他",
        recordsEmptyTitle: "暂无提交记录",
        recordsEmptyDesc: "发布关于 Scanser 的帖子后，请在\"申请\"标签页提交。",
        recordsPlatformCol: "平台",
        recordsLikesCol: "点赞数",
        recordsTierCol: "奖励档位",
        recordsStatusCol: "状态",
        recordsDateCol: "提交时间",
        statusPending: "审核中",
        statusApproved: "已通过",
        statusRejected: "未通过",

        // --------------------------------------------------------------
        // 兑换码（见 SECTION 2 的 redeemCodesState / redeemCode）
        // --------------------------------------------------------------
        navRedeemCode: "兑换码",
        redeemPageTitle: "兑换码",
        redeemPageSubtitle: "有兑换码吗？在下方输入即可为您的会员增加时长。",
        redeemCodeInputLabel: "兑换码",
        redeemCodeInputPlaceholder: "例如：SCXXXXXX",
        redeemSubmitBtn: "立即兑换",
        redeemSuccessToast: "兑换成功 — 已为您的会员增加 {n} 小时！",
        redeemInvalidCodeError: "该兑换码无效。",
        redeemAlreadyUsedError: "您已经使用过该兑换码。",
        redeemExpiredError: "该兑换码已过期。",
        redeemMaxUsesError: "该兑换码已达到使用次数上限。",
        redeemHowItWorks: "使用方法",
        redeemStep1: "通过推广活动、抽奖或客服获取兑换码。",
        redeemStep2: "在上方输入兑换码并点击\"立即兑换\"。",
        redeemStep3: "会员时长将立即添加到您的账户。",

        // --------------------------------------------------------------
        // 账号迁移（旧账号会员迁移；见 SECTION 2 的 oldAccountsLocal /
        // migrateOldAccount）
        // --------------------------------------------------------------
        navMigration: "账号迁移",
        migrationWelcomeTitle: "欢迎",
        migrationReturningTitle: "我是老用户",
        migrationReturningSubtitle: "迁移旧会员",
        migrationTabPassword: "密码",
        migrationTabSms: "短信",
        migrationOldAccountLabel: "旧账号",
        migrationOldAccountPlaceholder: "手机号、账号或邮箱",
        migrationOldPasswordLabel: "旧密码",
        migrationOldPasswordPlaceholder: "原密码",
        migrationSmsCodeLabel: "短信验证码",
        migrationSmsCodePlaceholder: "6位验证码",
        migrationSendCodeBtn: "发送验证码",
        migrationSmsSentToast: "演示模式 — 输入任意6位数字即可。",
        migrationVerifyBtn: "验证并迁移",
        migrationSuccessToast: "迁移成功 — 已为您的会员增加 {n} 小时！",
        migrationNotFoundError: "未找到匹配的旧账号信息。",
        migrationBadPasswordError: "旧账号密码不正确。",
        migrationAlreadyMigratedError: "该旧账号已完成迁移。",
        migrationMissingFieldsError: "请填写旧账号和密码。",
        migrationOrDivider: "或",
        migrationNewTitle: "我是新用户",
        migrationNewSubtitle: "兑换卡密或直接开始使用",
        migrationRedeemCta: "兑换兑换码",
        migrationStartCta: "开始使用 Scanser",

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
        demoInfoPendingItems: "真实微信登录 — 需要在后端配置微信开放平台 AppID 与 Secret|真实查重 / AI 检测分数 — 需要 Turnitin、iThenticate 或降 AI 率 API 密钥|支付功能 — 需要接入支付宝与微信支付的真实商户凭证",
        demoInfoCta: "知道了，开始体验",

        // 左下角悬浮的「演示版」状态徽章 + 其「查看详情」弹窗
        // （内容与上面的 demoInfo* 一致，只是随时随地都能打开，不限于登录后）
        demoStatusChipText: "当前为演示版 · 真实后端已就绪 · 仅待配置 API",
        demoStatusReadMore: "查看详情",

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
        navRedeemCodesAdmin: "兑换码",

        // 管理端：兑换码管理
        adminRedeemCodesTitle: "兑换码",
        adminGenerateCodeTitle: "生成新兑换码",
        adminHoursLabel: "时长（小时）",
        adminMaxUsesLabel: "最大使用次数",
        adminExpiresInDaysLabel: "有效期（天）",
        adminGenerateBtn: "生成兑换码",
        adminCodeGeneratedToast: "兑换码已生成",
        adminCodeCol: "兑换码",
        adminHoursCol: "时长",
        adminUsesCol: "使用次数",
        adminExpiresCol: "过期时间",
        adminStatusCol: "状态",
        adminCodeActive: "有效",
        adminCodeExpired: "已过期",
        adminCodeExhausted: "已用尽",
        adminNoCodesYet: "暂无生成的兑换码。",
        adminCopyCodeBtn: "复制",
        adminExistingCodesTitle: "现有兑换码",

        // 管理员 — 推广审核（第四阶段）
        adminPromoReviewTitle: "推广审核",
        adminPromoReviewDesc: "审核社交媒体推广奖励申请。批准会员时长档位会立即发放会员时长；现金档位仍需人工确认打款。",
        adminPromoFilterAll: "全部",
        adminPromoUserCol: "用户",
        adminPromoPlatformCol: "平台",
        adminPromoLikesCol: "点赞数",
        adminPromoTierCol: "奖励档位",
        adminPromoDescCol: "评价内容",
        adminPromoScreenshotCol: "微信号",
        adminPromoStatusCol: "状态",
        adminPromoSubmittedCol: "提交时间",
        adminApproveBtn: "通过",
        adminRejectBtn: "拒绝",
        adminMarkPaidBtn: "标记已打款",
        adminCashPendingBadge: "待打款",
        adminCashPaidBadge: "已打款",
        adminNoPromoSubmissions: "暂无申请记录。",
        adminPromoApprovedToast: "申请已通过",
        adminPromoRejectedToast: "申请已拒绝",
        adminPromoPaidToast: "已标记为已打款",
        adminViewPostLink: "查看帖子",

        // 管理员 — 充值套餐设置（第四阶段）
        adminPlanSettingsTitle: "充值套餐",
        adminPlanSettingsDesc: "编辑价格、划线原价，以及哪个套餐显示热门/最划算徽章。修改会立即应用到充值页面。",
        adminPlanCol: "套餐",
        adminPlanPriceCol: "价格（¥）",
        adminPlanOriginalCol: "原价（¥）",
        adminPlanHotCol: "热门",
        adminPlanBestCol: "最划算",
        adminPlanSaveBtn: "保存套餐设置",
        adminPlanSettingsSaved: "充值套餐设置已保存",
        adminPlanResetBtn: "恢复默认",

        // 管理员 — 配额限制（第四阶段）
        adminQuotaLimitsTitle: "配额限制",
        adminQuotaLimitsDesc: "设置每个使用时段的字符限额，修改会立即在全站生效。",
        adminQuotaWindowCol: "时段",
        adminQuotaLimitCol: "限额（字符数）",
        adminQuotaSaveBtn: "保存配额限制",
        adminQuotaLimitsSaved: "配额限制已保存",
        adminQuotaResetBtn: "恢复默认",

        // 管理员 — 旧账号迁移库（第四阶段）
        adminOldAccountsTitle: "旧账号迁移",
        adminOldAccountsDesc: "\"我是老用户\"迁移功能使用的旧账号库。在此添加旧系统账号，用户即可将剩余时长迁移到新的 Scanser 账号。",
        adminAddOldAccountTitle: "添加旧账号",
        adminOldIdentifierLabel: "旧账号（邮箱／手机号／用户名）",
        adminOldPasswordLabel: "旧密码",
        adminOldHoursLabel: "剩余小时数",
        adminAddOldAccountBtn: "添加",
        adminOldAccountsExistingTitle: "现有旧账号",
        adminOldIdentifierCol: "账号标识",
        adminOldHoursCol: "小时数",
        adminOldMigratedCol: "迁移状态",
        adminOldMigratedYes: "已迁移",
        adminOldMigratedNo: "尚未迁移",
        adminOldAccountAddedToast: "旧账号已添加",
        adminNoOldAccounts: "尚未添加任何旧账号。",

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
        downloadMenuLabel: "下载",
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
        navStartRewriting: "开始改写",
        publicNavStartRewriting: "开始改写",
        publicNavAiPrediction: "AI 率预测",
        publicNavPaperCheck: "论文查重",
        publicNavHistory: "历史",
        publicNavRanking: "模型排行",
        modelRankingSubtitle: "改写模型的使用统计与趋势分析",
        modelRankingDateRange: "时间范围",
        modelRanking1Day: "1天",
        modelRanking1Week: "1周",
        modelRanking1Month: "1个月",
        modelRankingLanguage: "语言",
        modelRankingChinese: "中文",
        modelRankingEnglish: "英文",
        modelRankingPlatform: "平台",
        modelRankingAllPlatforms: "全部",
        statTotalCalls: "调用总数",
        statTopModels: "热门模型 Top 3",
        statActiveModels: "活跃模型数",
        modelUsageTrendTitle: "模型使用趋势",
        modelUsageTrendSubtitle: "模型调用排行",
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
        detectionModelsLabel: "检测模型",
        rewriteTextInputTab: "文本输入",
        rewriteFileTab: "文件改写",
        rewriteLanguageLabel: "语言",
        rewriteLangChinese: "中文",
        rewriteLangEnglish: "英文",
        rewritePlatformLabel: "平台",
        rewriteStrengthLabel: "改写强度 (1-11)",
        rewriteRecMarker: "推荐",
        rewriteModeLabel: "改写模式",
        rewriteLockedHint: "检测平台、改写强度与改写模式为增强会员专属权益。",
        rewriteLockedCta: "去充值解锁",
        rewriteSampleBtn: "示例",
        rewriteStartBtn: "开始改写",
        rewriteResultLabel: "改写结果",
        rewriteResultPlaceholder: "改写结果将显示在此处",
        rewriteFileDropHint: "拖放文件到此处，或点击浏览上传",
        rewriteCharsLabel: "字",
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
        signedInToastWelcome: "登录成功，欢迎回来！",
        wechatPendingTitle: "微信登录 — 即将上线",
        wechatPendingNotice: "微信登录目前尚未接入官方API，暂时只是一个占位显示。等后续接入API后，这里就会支持真实的微信扫码登录，一切都会完美运行。现在您可以点击下方按钮，使用演示账号继续体验。",
        wechatDemoLoginBtn: "使用演示账号继续"
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

    // --------------------------------------------------------------------
    // MEMBERSHIP / RECHARGE ENGINE (time-tier plans, separate from the
    // per-tool credit system above). Purely a frontend/localStorage demo
    // for now — no real payment gateway is wired up (see RechargeCheckout,
    // SECTION 4C, for the fake Alipay/WeChat QR flow). Swap the demo
    // confirm step for a real webhook/Edge Function later without
    // touching any of the UI in Views.recharge().
    // --------------------------------------------------------------------
    const MEMBERSHIP_PLANS_DEFAULT = [
      { id: '1h',  hours: 1,     labelKey: 'planLabel1h',  price: 9.90,  original: 13.80 },
      { id: '3h',  hours: 3,     labelKey: 'planLabel3h',  price: 17.90, original: 23.00, hot: true },
      { id: '12h', hours: 12,    labelKey: 'planLabel12h', price: 24.90, original: 29.00 },
      { id: '1d',  hours: 24,    labelKey: 'planLabel1d',  price: 29.90, original: 39.00 },
      { id: '3d',  hours: 72,    labelKey: 'planLabel3d',  price: 49.90, original: 59.00 },
      { id: '7d',  hours: 168,   labelKey: 'planLabel7d',  price: 68.00, original: 89.00 },
      { id: '1mo', hours: 720,   labelKey: 'planLabel1mo', price: 138.00, original: 189.00 },
      { id: '1q',  hours: 2160,  labelKey: 'planLabel1q',  price: 399.00, original: 699.00 },
      { id: '6mo', hours: 4320,  labelKey: 'planLabel6mo', price: 699.00, original: 999.00 },
      { id: '1y',  hours: 8760,  labelKey: 'planLabel1y',  price: 999.00, original: 1389.00, best: true }
    ];

    // Admin-editable overrides on top of the defaults above — Phase 4
    // "Recharge Plans" admin page. { [planId]: { price, original, hot, best } }.
    // Local-only (mirrors creditSettings' localStorage-first pattern);
    // MEMBERSHIP_PLANS is recomputed from defaults + overrides so every
    // existing call site (Views.recharge, RechargeCheckout, etc) picks up
    // admin edits automatically without needing to change.
    let planOverrides = JSON.parse(localStorage.getItem('scanser_plan_overrides') || 'null') || {};
    function persistPlanOverrides() {
      localStorage.setItem('scanser_plan_overrides', JSON.stringify(planOverrides));
    }
    function computeMembershipPlans() {
      return MEMBERSHIP_PLANS_DEFAULT.map(p => {
        const o = planOverrides[p.id];
        return o ? { ...p, ...o } : { ...p };
      });
    }
    let MEMBERSHIP_PLANS = computeMembershipPlans();
    function refreshMembershipPlans() {
      MEMBERSHIP_PLANS = computeMembershipPlans();
    }

    // { [userId]: { planId, expiresAt } } — mirrors the mockCredits pattern:
    // local-only for now, ready to be swapped for a real `memberships`
    // table + Supabase row once a payment gateway exists.
    let membershipState = JSON.parse(localStorage.getItem('scanser_membership') || '{}');
    function persistMembershipState() {
      localStorage.setItem('scanser_membership', JSON.stringify(membershipState));
    }

    function getMembership() {
      if (!state.user) return null;
      return membershipState[state.user.id] || null;
    }

    function isMembershipActive() {
      const m = getMembership();
      return !!(m && m.expiresAt && m.expiresAt > Date.now());
    }

    // Platform / strength / mode-version are premium customization controls
    // (per the Enhanced Membership page's own "Unlock all premium rewrite
    // models & detection" copy) — free/expired users can still run a
    // rewrite on the default platform+strength, they just can't change
    // them. Admins always have full access, same as everywhere else.
    function canCustomizeRewrite() {
      if (state.user && state.user.role === 'admin') return true;
      return isMembershipActive();
    }

    // Grants (or extends, if already active) membership for the current
    // user by the given plan's duration. Extending stacks on top of the
    // existing expiry rather than overwriting it, so buying more time
    // before the current plan runs out never wastes the remainder.
    function grantMembership(planId) {
      if (!state.user) return;
      const plan = MEMBERSHIP_PLANS.find(p => p.id === planId);
      if (!plan) return;
      const existing = membershipState[state.user.id];
      const base = (existing && existing.expiresAt > Date.now()) ? existing.expiresAt : Date.now();
      membershipState[state.user.id] = { planId, expiresAt: base + plan.hours * 3600 * 1000 };
      persistMembershipState();
    }

    // Same as grantMembership() but takes a raw hour count instead of a
    // plan id — used by Redeem Code and Migration, neither of which maps
    // to one of the fixed MEMBERSHIP_PLANS durations.
    function grantMembershipHours(hours) {
      if (!state.user || !hours) return;
      grantMembershipHoursTo(state.user.id, hours);
    }

    // Same as grantMembershipHours() but for an arbitrary user id — used
    // by the admin Promotion Review page (Phase 4) to grant a reward
    // membership to whichever user's submission got approved, not the
    // signed-in admin.
    function grantMembershipHoursTo(userId, hours) {
      if (!userId || !hours) return;
      const existing = membershipState[userId];
      const base = (existing && existing.expiresAt > Date.now()) ? existing.expiresAt : Date.now();
      membershipState[userId] = { planId: existing ? existing.planId : null, expiresAt: base + hours * 3600 * 1000 };
      persistMembershipState();
    }

    // Short "1d" / "3h" / "12m" style countdown label for the navbar badge.
    function membershipTimeLeftLabel() {
      const m = getMembership();
      if (!m || !m.expiresAt) return '';
      const msLeft = m.expiresAt - Date.now();
      if (msLeft <= 0) return '';
      const days = Math.floor(msLeft / 86400000);
      if (days >= 1) return days + t('timeUnitDay');
      const hrs = Math.floor(msLeft / 3600000);
      if (hrs >= 1) return hrs + t('timeUnitHour');
      const mins = Math.max(1, Math.floor(msLeft / 60000));
      return mins + t('timeUnitMin');
    }

    // --------------------------------------------------------------------
    // QUOTA ENGINE (rolling-window usage limits — separate from both the
    // per-tool credit system and the time-based membership above). Every
    // successful rewrite/scan appends a { ts, chars } entry to a per-user
    // ledger (localStorage-only for now — swap for a real `usage_events`
    // table + a Postgres window-function query later without touching
    // Views.quota()). Each window's usage is just the sum of chars logged
    // within that many minutes of "now", recomputed fresh on every render
    // — no separate rollup/reset job needed, it just ages out naturally.
    // --------------------------------------------------------------------
    const QUOTA_WINDOWS_DEFAULT = [
      { id: '1min', minutes: 1,    limit: 100000,  labelKey: 'quotaWindow1min' },
      { id: '1hr',  minutes: 60,   limit: 150000,  labelKey: 'quotaWindow1hr' },
      { id: '3hr',  minutes: 180,  limit: 400000,  labelKey: 'quotaWindow3hr' },
      { id: '12hr', minutes: 720,  limit: 1200000, labelKey: 'quotaWindow12hr' },
      { id: '24hr', minutes: 1440, limit: 1500000, labelKey: 'quotaWindow24hr' }
    ];

    // Admin-editable limit overrides — Phase 4 "Quota Limits" admin page.
    // { [windowId]: limit }. Same local-first pattern as planOverrides
    // above; QUOTA_WINDOWS is recomputed so every existing call site
    // (Views.quota, getQuotaUsage's pct math, etc) picks up edits for
    // free without needing to change.
    let quotaLimitOverrides = JSON.parse(localStorage.getItem('scanser_quota_limit_overrides') || 'null') || {};
    function persistQuotaLimitOverrides() {
      localStorage.setItem('scanser_quota_limit_overrides', JSON.stringify(quotaLimitOverrides));
    }
    function computeQuotaWindows() {
      return QUOTA_WINDOWS_DEFAULT.map(w => {
        const override = quotaLimitOverrides[w.id];
        return override ? { ...w, limit: override } : { ...w };
      });
    }
    let QUOTA_WINDOWS = computeQuotaWindows();
    function refreshQuotaWindows() {
      QUOTA_WINDOWS = computeQuotaWindows();
    }
    const QUOTA_MAX_WINDOW_MINUTES = QUOTA_WINDOWS_DEFAULT[QUOTA_WINDOWS_DEFAULT.length - 1].minutes;

    // { [userId]: [{ ts, chars }, ...] }
    let quotaLedger = JSON.parse(localStorage.getItem('scanser_quota_ledger') || '{}');
    function persistQuotaLedger() {
      localStorage.setItem('scanser_quota_ledger', JSON.stringify(quotaLedger));
    }

    // Called right after a tool finishes processing (see bindToolEvents).
    // Trims entries older than the widest window on every write, so the
    // ledger never grows unbounded even in a long-running tab.
    function logQuotaUsage(chars) {
      if (!state.user || !chars || chars <= 0) return;
      const uid = state.user.id;
      if (!quotaLedger[uid]) quotaLedger[uid] = [];
      quotaLedger[uid].push({ ts: Date.now(), chars: Math.round(chars) });
      const cutoff = Date.now() - QUOTA_MAX_WINDOW_MINUTES * 60000;
      quotaLedger[uid] = quotaLedger[uid].filter(e => e.ts >= cutoff);
      persistQuotaLedger();
    }

    // Sum of chars logged for the current user within the last N minutes.
    function getQuotaUsage(windowMinutes) {
      if (!state.user) return 0;
      const entries = quotaLedger[state.user.id] || [];
      const cutoff = Date.now() - windowMinutes * 60000;
      return entries.reduce((sum, e) => sum + (e.ts >= cutoff ? e.chars : 0), 0);
    }

    // "Quota" sidebar item is a hover-only summary (no dedicated page —
    // see quota-hover-trigger below). Trigger markup is shared between the
    // public/home sidebar and the logged-in app sidebar.
    function quotaHoverTriggerHtml() {
      return `
        <div class="nav-item quota-hover-trigger" id="quota-hover-trigger" tabindex="0">
          ${Icons.clock} <span class="nav-text">${t('navQuota')}</span>
        </div>`;
    }

    // Builds the hover card's inner HTML fresh each time it's shown, so the
    // numbers are never stale.
    function buildQuotaHoverCardHtml() {
      refreshQuotaWindows();
      const rows = QUOTA_WINDOWS.map(w => {
        const used = getQuotaUsage(w.minutes);
        const pct = Math.min(100, (used / w.limit) * 100);
        const left = Math.max(0, w.limit - used);
        const nearLimit = pct >= 80;
        return `
          <div class="quota-hover-row">
            <div class="quota-hover-row-top">
              <span class="quota-hover-window">${t(w.labelKey)}</span>
              <span class="quota-hover-used">${formatQty(used)} <span class="quota-card-slash">/</span> ${formatQty(w.limit)}</span>
            </div>
            <div class="progress-bar-bg quota-hover-bar-bg">
              <div class="progress-bar-fill ${nearLimit ? 'quota-bar-danger' : ''}" style="width:${pct}%;"></div>
            </div>
            <div class="quota-hover-row-bottom">
              <span class="${nearLimit ? 'quota-pct-danger' : ''}">${pct.toFixed(1)}%</span>
              <span>${t('quotaLeftLabel')} ${formatQty(left)}</span>
            </div>
          </div>`;
      }).join('');
      return `
        <div class="quota-hover-card-title">${t('quotaPageTitle')}</div>
        ${rows}`;
    }

    // Shows/positions the quota hover card next to whichever trigger fired
    // the event. Appended straight to <body> (not the sidebar) so it's
    // never clipped by the sidebar's own overflow/scroll box.
    function showQuotaHoverCard(trigger) {
      hideQuotaHoverCard();
      const card = document.createElement('div');
      card.className = 'quota-hover-card';
      card.id = 'quota-hover-card-el';
      card.innerHTML = buildQuotaHoverCardHtml();
      document.body.appendChild(card);

      const rect = trigger.getBoundingClientRect();
      const cardWidth = card.offsetWidth || 260;
      let left = rect.right + 10;
      let top = rect.top + rect.height / 2 - card.offsetHeight / 2;
      if (left + cardWidth > window.innerWidth - 8) left = rect.left - cardWidth - 10;
      if (left < 8) left = 8;
      top = Math.max(8, Math.min(top, window.innerHeight - card.offsetHeight - 8));
      card.style.left = left + 'px';
      card.style.top = top + 'px';

      requestAnimationFrame(() => card.classList.add('visible'));
    }
    function hideQuotaHoverCard() {
      const existing = document.getElementById('quota-hover-card-el');
      if (existing) existing.remove();
    }

    // Bound from both bindHomeEvents and bindGlobalEvents so the hover
    // card works identically on the home page and every logged-in page.
    function bindQuotaHoverTrigger() {
      const trigger = document.getElementById('quota-hover-trigger');
      if (!trigger) return;
      trigger.addEventListener('mouseenter', () => showQuotaHoverCard(trigger));
      trigger.addEventListener('mouseleave', hideQuotaHoverCard);
      trigger.addEventListener('focus', () => showQuotaHoverCard(trigger));
      trigger.addEventListener('blur', hideQuotaHoverCard);
    }

    // "10.0万" (zh) or "100.0K" (en) style compact number, matching the
    // reference design's formatting for large quota figures.
    function formatQty(n) {
      n = Math.max(0, n);
      if (state.language === 'zh') {
        if (n >= 10000) return (n / 10000).toFixed(1) + '万';
        return String(n);
      }
      if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
      if (n >= 1000) return (n / 1000).toFixed(1) + 'K';
      return String(n);
    }

    // --------------------------------------------------------------------
    // PROMOTION ENGINE — social-post reward program (replaces the old
    // invite-link referral system). User shares a real post about Scanser
    // on a platform of their choice, submits the post link + like count +
    // a screenshot; reward tier is whichever likes threshold the claimed
    // like-count clears. Local-only for now (mirrors membership/quota
    // pattern) — see supabase/migration_013_promotion.sql for the table
    // this maps to (`promotion_submissions`), reviewed by an admin in
    // Phase 4. `recordReferralSignup` is kept as a harmless no-op stub so
    // the old `#ref=` URL handling / WeChatAuth call site doesn't need to
    // be torn out by hand.
    // --------------------------------------------------------------------
    const PROMOTION_PLATFORMS = ['xiaohongshu', 'weibo', 'douyin', 'bilibili', 'zhihu', 'other'];

    const PROMOTION_REWARD_TIERS = [
      { id: 'post',   minLikes: 0,    labelKey: 'promoTierPost',   rewardKey: 'promoRewardPost',   type: 'membership', hours: 1 },
      { id: 't30',    minLikes: 30,   labelKey: 'promoTier30',     rewardKey: 'promoReward30',      type: 'membership', hours: 8 },
      { id: 't100',   minLikes: 100,  labelKey: 'promoTier100',    rewardKey: 'promoReward100',     type: 'membership', hours: 24 },
      { id: 't1000',  minLikes: 1000, labelKey: 'promoTier1000',   rewardKey: 'promoReward1000',    type: 'cash', amount: 100 },
      { id: 't5000',  minLikes: 5000, labelKey: 'promoTier5000',   rewardKey: 'promoReward5000',    type: 'cash', amount: 300 }
    ];
    const PROMOTION_MAX_SUBMISSIONS = 2;
    const PROMOTION_MIN_DESC_WORDS = 30;

    // { [userId]: { submissions: [{id, platform, postUrl, likes, description, screenshotName, status, tierId, createdAt, reviewedAt}] } }
    let promotionState = JSON.parse(localStorage.getItem('scanser_promotion_v2') || '{}');
    function persistPromotionState() {
      localStorage.setItem('scanser_promotion_v2', JSON.stringify(promotionState));
    }

    function getPromotionRecord() {
      if (!state.user) return null;
      if (!promotionState[state.user.id]) {
        promotionState[state.user.id] = { submissions: [] };
        persistPromotionState();
      }
      return promotionState[state.user.id];
    }

    // Highest tier whose minLikes the given like-count clears.
    function tierForLikes(likes) {
      let best = PROMOTION_REWARD_TIERS[0];
      PROMOTION_REWARD_TIERS.forEach(tier => { if (likes >= tier.minLikes) best = tier; });
      return best;
    }

    // No-op stub — the old invite-link system this used to power was
    // removed. Kept so the `#ref=` URL stash (DOMContentLoaded) and
    // WeChatAuth.completeLogin's call site don't need surgery.
    function recordReferralSignup() {}

    function submitPromotionApplication(data) {
      const rec = getPromotionRecord();
      if (!rec) return null;
      const tier = tierForLikes(Number(data.likes) || 0);
      const submission = {
        id: 'promo_' + Date.now(),
        platform: data.platform,
        postUrl: data.postUrl,
        wechatId: data.wechatId || '',
        likes: Number(data.likes) || 0,
        description: data.description || '',
        status: 'pending', // pending | approved | rejected — set by an admin in Phase 4
        tierId: tier.id,
        createdAt: Date.now(),
        reviewedAt: null
      };
      rec.submissions.push(submission);
      persistPromotionState();
      if (isSupabaseConfigured()) DataLayer.submitPromotionApplication(submission).catch(() => {});
      return submission;
    }

    // Admin-only: flattens every user's local promotion submissions into
    // one list with the owner attached, newest first — powers the admin
    // Promotion Review page (Phase 4). Local-only data source (mirrors
    // the local-first pattern used by redeemCodesState/oldAccountsLocal);
    // when Supabase is configured the admin page prefers
    // DataLayer.adminLoadPromotionApplications() instead (see that call
    // site) and only falls back to this.
    function getAllPromotionSubmissionsLocal() {
      const out = [];
      state.users.forEach(u => {
        const rec = promotionState[u.id];
        if (!rec) return;
        rec.submissions.forEach(s => out.push({ ...s, userId: u.id, userName: u.name || u.email || u.id }));
      });
      return out.sort((a, b) => b.createdAt - a.createdAt);
    }

    // Admin-only: sets a submission's status (approved/rejected) and, on
    // first approval, grants the reward — membership hours immediately,
    // or flips a `cashPending` flag for the cash tiers (¥100/¥300) which
    // still need a manual customer-service payout per the spec, tracked
    // by a separate "Mark Paid" action. Local-store version; the
    // Supabase-backed version is DataLayer.adminReviewPromotionApplication.
    function reviewPromotionSubmissionLocal(submissionId, status) {
      for (const u of state.users) {
        const rec = promotionState[u.id];
        if (!rec) continue;
        const sub = rec.submissions.find(s => s.id === submissionId);
        if (!sub) continue;
        const wasApproved = sub.status === 'approved';
        sub.status = status;
        sub.reviewedAt = Date.now();
        if (status === 'approved' && !wasApproved) {
          const tier = PROMOTION_REWARD_TIERS.find(t => t.id === sub.tierId);
          if (tier && tier.type === 'membership') {
            grantMembershipHoursTo(u.id, tier.hours);
          } else if (tier && tier.type === 'cash') {
            sub.cashPending = true;
          }
        }
        persistPromotionState();
        return { ok: true, submission: sub, userId: u.id };
      }
      return { ok: false };
    }

    function markPromotionCashPaidLocal(submissionId) {
      for (const u of state.users) {
        const rec = promotionState[u.id];
        if (!rec) continue;
        const sub = rec.submissions.find(s => s.id === submissionId);
        if (!sub) continue;
        sub.cashPending = false;
        sub.cashPaidAt = Date.now();
        persistPromotionState();
        return true;
      }
      return false;
    }

    // Admin action wrappers — always update the local store immediately
    // (so the admin UI reflects the change without waiting on a round
    // trip), and best-effort mirror the same change to Supabase in the
    // background when configured. Same fire-and-forget shape used by
    // generateRedeemCode's call site in bindPageEvents.
    function reviewPromotionSubmission(submissionId, status) {
      const result = reviewPromotionSubmissionLocal(submissionId, status);
      if (result.ok && isSupabaseConfigured()) {
        DataLayer.adminReviewPromotionApplication(submissionId, status).catch(() => {});
      }
      return result;
    }

    function markPromotionCashPaid(submissionId) {
      const ok = markPromotionCashPaidLocal(submissionId);
      if (ok && isSupabaseConfigured()) {
        DataLayer.adminMarkPromotionPaid(submissionId).catch(() => {});
      }
      return ok;
    }

    // Runtime-only UI state for the Promotion page (Apply vs Records tab)
    // and the Migration page (Returning-user vs New-user path, and the
    // Password vs SMS-code auth tab within it). Not persisted — resets to
    // sensible defaults each session, same pattern as rewriteUiState above.
    const promotionUiState = { tab: 'apply', platform: null };
    // Model Ranking page filters — date range window, which language's
    // model names to display, and an optional single-platform filter.
    // Defaults to 'zh' at declaration time (this runs before `state` is
    // constructed further down the file) — synced to the app's actual
    // language the first time the ranking page renders, see ranking().
    const rankingUiState = { dateRange: '1w', language: 'zh', platform: 'all', languageSynced: false };

    // Small deterministic string hash -> [0,1) float, so the mock call
    // counts on the Model Ranking page stay stable across re-renders for
    // the same filter combination instead of jumping around on every
    // click (a plain Math.random() would look broken/flickery there).
    function seededRandom(seed) {
      let h = 0;
      for (let i = 0; i < seed.length; i++) { h = (Math.imul(31, h) + seed.charCodeAt(i)) | 0; }
      h = (h ^ (h >>> 16)) >>> 0;
      return (h % 10000) / 10000;
    }
    // Auth-tab (password vs SMS) selected inside the "Returning User" side
    // of the Welcome modal — see Events.openMigrationModal. The modal is
    // rebuilt on every tab switch, so this needs to live outside it.
    const migrationUiState = { authTab: 'password' };

    // Whether the "Start Rewriting" sidebar group is expanded. Was a dead
    // header before (cursor:default, no click handler at all — the reason
    // it looked like a dropdown but never actually opened/closed). Starts
    // expanded so the 3 sub-tools stay visible by default; persisted only
    // for the session, same as the other lightweight UI-state objects here.
    let sidebarRewriteExpanded = false;
    // Runtime-only filter state for the admin Promotion Review page
    // (Phase 4) — same not-persisted pattern as the two above.
    const adminPromoUiState = { filter: 'all' };

    // --------------------------------------------------------------------
    // REDEEM CODE ENGINE. Local-only demo store (mirrors the membership
    // pattern) that mimics what supabase/migration_011_redeem_codes.sql's
    // `redeem_code(code)` RPC does for real once Supabase is configured —
    // see DataLayer.redeemCode(). Two demo codes are seeded so the flow
    // is testable out of the box.
    // --------------------------------------------------------------------
    let redeemCodesState = JSON.parse(localStorage.getItem('scanser_redeem_codes') || 'null') || {
      'WELCOME24':  { hours: 24,  createdAt: Date.now(), expiresAt: null, maxUses: 9999, usedBy: [] },
      'SCANSER7D':  { hours: 168, createdAt: Date.now(), expiresAt: null, maxUses: 50,   usedBy: [] }
    };
    function persistRedeemCodes() {
      localStorage.setItem('scanser_redeem_codes', JSON.stringify(redeemCodesState));
    }

    function generateRedeemCode(hours, maxUses, expiresInDays) {
      let code;
      do { code = 'SC' + Math.random().toString(36).slice(2, 8).toUpperCase(); } while (redeemCodesState[code]);
      redeemCodesState[code] = {
        hours: Number(hours) || 24,
        createdAt: Date.now(),
        expiresAt: expiresInDays ? Date.now() + Number(expiresInDays) * 86400000 : null,
        maxUses: Math.max(1, Number(maxUses) || 1),
        usedBy: []
      };
      persistRedeemCodes();
      return code;
    }

    function setRedeemCodeStatus(code, disabled) {
      const entry = redeemCodesState[code];
      if (!entry) return;
      entry.disabled = !!disabled;
      persistRedeemCodes();
    }

    // Redeems locally (localStorage codes) — used as the fallback when
    // Supabase isn't configured, and as the actual demo-mode engine.
    function redeemCodeLocal(codeRaw) {
      const code = (codeRaw || '').trim().toUpperCase();
      if (!code) return { ok: false, reason: 'empty' };
      const entry = redeemCodesState[code];
      if (!entry || entry.disabled) return { ok: false, reason: 'invalid' };
      if (entry.expiresAt && entry.expiresAt < Date.now()) return { ok: false, reason: 'expired' };
      if (entry.usedBy.length >= entry.maxUses) return { ok: false, reason: 'exhausted' };
      if (state.user && entry.usedBy.includes(state.user.id)) return { ok: false, reason: 'already_used' };
      entry.usedBy.push(state.user ? state.user.id : 'anon');
      persistRedeemCodes();
      grantMembershipHours(entry.hours);
      return { ok: true, hours: entry.hours };
    }

    // Tries the real `redeem_code` RPC first (see DataLayer.redeemCode),
    // falls back to the local demo store — same fallback shape used
    // everywhere else in this file (WeChatAuth, RechargeCheckout, etc).
    async function redeemCode(codeRaw) {
      if (isSupabaseConfigured() && state.user) {
        try {
          const res = await DataLayer.redeemCode(codeRaw);
          if (res) {
            if (res.ok && res.hours) grantMembershipHours(res.hours);
            return res;
          }
        } catch (err) {
          console.warn('[redeemCode] RPC unavailable, falling back to local demo store:', err && err.message);
        }
      }
      return redeemCodeLocal(codeRaw);
    }

    // --------------------------------------------------------------------
    // MIGRATION ENGINE ("I'm a Returning User" — moves an old pre-Scanser
    // account's remaining membership time onto the signed-in account).
    // `oldAccountsLocal` is a small demo dataset standing in for the real
    // `old_accounts_staging` table (see supabase/migration_012_old_accounts.sql
    // + DataLayer.migrateOldAccount, which calls the `migrate_old_account`
    // Postgres RPC — a real server-side lookup, not just a local mock,
    // per your call to build this one for real).
    // --------------------------------------------------------------------
    let oldAccountsLocal = JSON.parse(localStorage.getItem('scanser_old_accounts') || 'null') || [
      { identifier: 'olduser@example.com', password: 'demo123', hoursRemaining: 72, migrated: false },
      { identifier: '13800001111',         password: 'demo123', hoursRemaining: 24, migrated: false },
      { identifier: 'vip@ycjg.top',        password: 'demo123', hoursRemaining: 720, migrated: false }
    ];
    function persistOldAccountsLocal() {
      localStorage.setItem('scanser_old_accounts', JSON.stringify(oldAccountsLocal));
    }

    // Admin-only: adds a new staged old account (Phase 4 "Old Accounts"
    // admin page) — local store immediately, best-effort mirrored to
    // Supabase's old_accounts_staging via admin_create_old_account() RPC
    // (migration_014) when configured, same fire-and-forget shape as
    // generateRedeemCode's call site in bindPageEvents.
    function addOldAccountLocal(identifier, password, hoursRemaining) {
      const id = (identifier || '').trim();
      if (!id || !password) return null;
      const entry = { identifier: id, password, hoursRemaining: Number(hoursRemaining) || 0, migrated: false };
      oldAccountsLocal.push(entry);
      persistOldAccountsLocal();
      if (isSupabaseConfigured()) {
        DataLayer.adminCreateOldAccount({ identifier: id, password, hoursRemaining: entry.hoursRemaining }).catch(() => {});
      }
      return entry;
    }

    function migrateOldAccountLocal(identifier, password) {
      const id = (identifier || '').trim().toLowerCase();
      if (!id || !password) return { ok: false, reason: 'missing_fields' };
      const acc = oldAccountsLocal.find(a => a.identifier.toLowerCase() === id);
      if (!acc) return { ok: false, reason: 'not_found' };
      if (acc.password !== password) return { ok: false, reason: 'bad_password' };
      if (acc.migrated) return { ok: false, reason: 'already_migrated' };
      acc.migrated = true;
      persistOldAccountsLocal();
      grantMembershipHours(acc.hoursRemaining);
      return { ok: true, hours: acc.hoursRemaining };
    }

    // Tries the real `migrate_old_account` RPC first, falls back to the
    // local demo dataset above — identical fallback shape to redeemCode().
    async function migrateOldAccount(identifier, password) {
      if (isSupabaseConfigured() && state.user) {
        try {
          const res = await DataLayer.migrateOldAccount(identifier, password);
          if (res) {
            if (res.ok && res.hours) grantMembershipHours(res.hours);
            return res;
          }
        } catch (err) {
          console.warn('[migrateOldAccount] RPC unavailable, falling back to local demo dataset:', err && err.message);
        }
      }
      return migrateOldAccountLocal(identifier, password);
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
      'ai-report':          { provider: 'Turnitin API',   apiKey: DEMO_PLACEHOLDER_KEY, baseUrl: 'https://api.turnitin.com' },
      'plagiarism-report':  { provider: 'iThenticate API',apiKey: DEMO_PLACEHOLDER_KEY, baseUrl: 'https://api.ithenticate.com' },
      'reduce-ai-rate':     { provider: 'Stealth API',    apiKey: DEMO_PLACEHOLDER_KEY, baseUrl: 'https://api.your-provider.com' },
      'reduce-plagiarism':  { provider: 'Stealth API',    apiKey: DEMO_PLACEHOLDER_KEY, baseUrl: 'https://api.your-provider.com' },
      'dual-mode':          { provider: 'Stealth API',    apiKey: DEMO_PLACEHOLDER_KEY, baseUrl: 'https://api.your-provider.com' }
      // Add an entry here for any custom tool you add to state.tools below,
      // using the same id you gave the tool, e.g.:
      // quillbot: { provider: 'Quillbot API', apiKey: 'YOUR_KEY_HERE', baseUrl: 'https://api.quillbot.com' }
    };

    // Detection-platform chips shown on every Start Rewriting sub-mode page
    // (Lower AI Rate / Lower Plagiarism / Dual Mode). Chinese academic
    // checkers first (primary market), Western AI detectors after —
    // matches the reference product's platform row.
    const PLATFORMS = [
      { id: 'cnki',        zh: '知网',      en: 'CNKI' },
      { id: 'weipu',       zh: '维普',      en: 'Weipu' },
      { id: 'geda_school', zh: '格达学校版', en: 'Geda (School)' },
      { id: 'geda_personal', zh: '格达个人版', en: 'Geda (Personal)' },
      { id: 'wanfang',     zh: '万方',      en: 'Wanfang' },
      { id: 'daya',        zh: '大雅',      en: 'Daya' },
      { id: 'zhuque',      zh: '朱雀',      en: 'Zhuque' },
      { id: 'huachen',     zh: '华宸',      en: 'Huachen' },
      { id: 'bigan',       zh: '笔杆网',    en: 'Bigan' },
      { id: 'paperpass',   zh: 'PaperPass', en: 'PaperPass' },
      { id: 'paperyy',     zh: 'PaperYY',   en: 'PaperYY' },
      { id: 'turnitin',    zh: 'Turnitin',    en: 'Turnitin' },
      { id: 'zerogpt',     zh: 'ZeroGPT',     en: 'ZeroGPT' },
      { id: 'gptzero',     zh: 'GPTZero',     en: 'GPTZero' },
      { id: 'originality', zh: 'Originality.ai', en: 'Originality.ai' },
      { id: 'winston',     zh: 'Winston AI',  en: 'Winston AI' },
      { id: 'copyleaks',   zh: 'Copyleaks',   en: 'Copyleaks' }
    ];

    // Dated/named rewrite-model versions for the Mode dropdown (Lower
    // Plagiarism + Dual Mode). One is flagged `rec` and pre-selected —
    // mirrors the reference product's versioned internal models.
    const REWRITE_MODE_VERSIONS = [
      { id: 'v0325-2', zh: '降重测试模式0325-2', en: 'Reduction Test Mode 0325-2', rec: true },
      { id: 'v509',    zh: '5.09 通用降重/双模式', en: '5.09 Universal Reduction / Dual Mode', rec: false },
      { id: 'v1015',   zh: '10.15 高学术低改动降AI', en: '10.15 High-Academic Low-Modification AI Reduction', rec: false },
      { id: 'v1208',   zh: '12.08 万方降重', en: '12.08 Wanfang Reduction', rec: false },
      { id: 'v1101',   zh: '11.01 Turnitin 降AI', en: '11.01 Turnitin AI Reduction', rec: false },
      { id: 'v1024',   zh: '10.24 朱雀降AI', en: '10.24 Zhuque AI Reduction', rec: false }
    ];

    // Sample text dropped into the input box by the "Sample" button, so a
    // visitor can try a mode with one click. Kept short on purpose.
    const REWRITE_SAMPLE_TEXT = {
      zh: '随着人工智能技术的快速发展，越来越多的学术写作开始借助智能工具完成初稿。这种趋势虽然提高了写作效率，但也给传统的查重与AI检测系统带来了新的挑战。',
      en: 'With the rapid development of artificial intelligence, more academic writing now begins with AI-assisted drafts. While this improves efficiency, it also creates new challenges for traditional plagiarism and AI-detection systems.'
    };

    // Runtime-only UI state for the Start Rewriting sub-mode pages (platform,
    // strength, mode version, input tab, input language). Not persisted to
    // localStorage — resets to sensible defaults each session, same as any
    // other in-progress form.
    const rewriteUiState = {};
    function getRewriteUi(toolId) {
      if (!rewriteUiState[toolId]) {
        rewriteUiState[toolId] = {
          platform: PLATFORMS[0].id,
          strength: 6,
          modeVersion: (REWRITE_MODE_VERSIONS.find(v => v.rec) || REWRITE_MODE_VERSIONS[0]).id,
          inputTab: 'text', // 'text' | 'file'
          inputLang: 'zh'   // 'zh' | 'en' — language of the pasted-in text
        };
      }
      return rewriteUiState[toolId];
    }

    // Same idea as rewriteUiState, but for the upload tools (See AI
    // Report / See Plagiarism Report) — remembers which detection model
    // and the exclude-references toggle per tool for this session.
    const uploadUiState = {};
    function getUploadUi(toolId) {
      if (!uploadUiState[toolId]) {
        const tool = state.tools.find(x => x.id === toolId);
        const defaultModel = (tool && tool.detectionModels && tool.detectionModels[0]) || 'turnitin';
        // lang here is the language of the report/document being scanned —
        // independent of state.language (the app's own UI language).
        // Defaults to Chinese regardless of what the app UI is set to.
        uploadUiState[toolId] = { model: defaultModel, excludeReferences: true, lang: 'zh' };
      }
      return uploadUiState[toolId];
    }

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
        // The 3 Start Rewriting sub-modes share `group: 'start-rewriting'` so
        // the sidebar renders them as one collapsible parent item with 3
        // children (see getSidebarNavItems / Views.Layout sidebar render).
        { id: 'reduce-ai-rate', kind: 'rewrite', icon: 'stealth', tone: 'red', type: 'text', articleId: 3, group: 'start-rewriting',
          hasStrength: true, hasModeDropdown: false,
          name: 'Lower AI Rate', description: 'Lower AI-detector scores while keeping your meaning.',
          titleEn: 'Lower AI Rate', titleZh: '降低AI率', descEn: 'Rewrite your text so AI-detection tools score it as human-written.', descZh: '改写文本，让AI检测工具将其判定为人工撰写。',
          chips: ['Turnitin AI', 'GPTZero', 'Originality.ai'], apiKeyId: null, builtIn: true, enabled: true },
        { id: 'reduce-plagiarism', kind: 'rewrite', icon: 'reports', tone: 'blue', type: 'text', articleId: 5, group: 'start-rewriting',
          hasStrength: false, hasModeDropdown: true,
          name: 'Lower Plagiarism', description: 'Rephrase flagged passages to lower a similarity score.',
          titleEn: 'Lower Plagiarism', titleZh: '降低查重率', descEn: 'Rephrase flagged passages so your similarity score drops before you submit.', descZh: '改写被标红的段落，在提交前降低查重相似度。',
          chips: ['CNKI', 'Turnitin', 'Weipu'], apiKeyId: null, builtIn: true, enabled: true },
        { id: 'dual-mode', kind: 'rewrite', icon: 'stealth', tone: 'orange', type: 'text', articleId: 1, group: 'start-rewriting',
          hasStrength: true, hasModeDropdown: true,
          name: 'Dual Mode', description: 'Lower AI rate and plagiarism together in a single rewrite pass.',
          titleEn: 'Dual Mode', titleZh: '双模式', descEn: 'Lower your AI-detection score and similarity score together, in a single rewrite pass.', descZh: '一次改写，同时降低AI率与查重率。',
          chips: ['AI Rate + Plagiarism'], apiKeyId: null, builtIn: true, enabled: true },
        { id: 'ai-report', kind: 'report', icon: 'usage', tone: 'purple', type: 'upload', articleId: 7,
          name: 'See AI Report', description: 'Upload a document and get a full AI-detection report (plagiarism rate included).',
          titleEn: 'See AI Report', titleZh: '查看AI检测报告', descEn: 'Upload a document to get a section-by-section AI-detection report — plagiarism rate included.', descZh: '上传文档，获取分段AI检测报告（含查重率）。',
          chips: ['Turnitin', 'iThenticate'], apiKeyId: null, builtIn: true, enabled: true },
        { id: 'plagiarism-report', kind: 'upload', icon: 'shield', tone: 'green', type: 'upload', articleId: 8,
          name: 'See Plagiarism Report', description: 'Upload a document and get a full similarity report.',
          titleEn: 'See Plagiarism Report', titleZh: '查看查重报告', descEn: 'Upload a document to get a full similarity report with matched sources.', descZh: '上传文档，获取带匹配来源的完整查重报告。',
          chips: ['Turnitin', 'iThenticate'], apiKeyId: null, builtIn: true, enabled: true }
      ],

      // Per-user tool access. Admins always see every enabled tool. Regular
      // signups get every tool by default now (see ensureFullToolAccess /
      // migration_009) — credits are what actually gate usage, not this
      // list, so it starts open rather than needing an admin to check boxes
      // one by one. '2' is the local demo login account; '3' is left as a
      // partial-access example row for the Access Control page.
      userAccess: {
        '2': ['reduce-ai-rate', 'reduce-plagiarism', 'dual-mode', 'ai-report', 'plagiarism-report'],
        '3': ['reduce-ai-rate', 'reduce-plagiarism', 'dual-mode', 'ai-report', 'plagiarism-report']
      },

      apiKeys: [],
      scans: [],
      notifications: [],
      auditLog: [],
      reportsFilterTool: 'all',
      reportsFilterCitations: 'all'
    };

    function t(key) {
      return (translations[state.language] && translations[state.language][key]) || key;
    }

    // Same lookup as t(), but for an explicit language rather than the
    // app's current state.language — used for report content whose
    // language was chosen independently (e.g. the AI/plagiarism report
    // language picker), so it doesn't flip the whole app's UI language.
    function tLang(lang, key) {
      return (translations[lang] && translations[lang][key]) || key;
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
        if (document.getElementById('modelRankingChart')) Events.renderModelRankingChart();
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
      timer: null,
      countdownTimer: null,
      pollTimer: null,

      open(pendingRoute) {
        this.pendingRoute = pendingRoute || null;
        this.render();
        document.getElementById('modal-container').classList.add('active');
        this.bindEvents();
      },

      close() {
        document.getElementById('modal-container').classList.remove('active');
        document.getElementById('modal-container').innerHTML = '';
        clearTimeout(this.timer);
        clearInterval(this.countdownTimer);
        clearInterval(this.pollTimer);
      },

      // TEMPORARY: the real WeChat QR sign-in flow (SDK/Edge Function code
      // is still intact further down — see completeLogin()'s tokenHash
      // branch, and supabase/functions/wechat-auth/) is switched off until
      // the WeChat Open Platform AppID + Secret are actually configured on
      // the backend. Showing a half-working QR code in the meantime is
      // worse than being upfront about it, so this renders a plain notice
      // instead and signs the visitor in with the demo account so the rest
      // of the app stays fully testable. Once the API is live, swap this
      // render()/bindEvents() pair back for the QR version (kept in git
      // history) — completeLogin() itself doesn't need to change.
      render() {
        document.getElementById('modal-container').innerHTML = `
          <div class="modal wechat-modal">
            <button class="wechat-modal-close" id="wechat-modal-close" aria-label="Close">&times;</button>
            <div class="wechat-modal-brand">
              <div class="auth-brand-logo" style="width:36px;height:36px;font-size:1.05rem;">${(t('brandName') || 'S').charAt(0)}</div>
              <span>${t('brandName')}</span>
            </div>
            <h3 class="wechat-modal-title">${t('wechatPendingTitle')}</h3>
            <p class="wechat-modal-subtitle" style="margin-bottom:1.25rem;">${t('wechatPendingNotice')}</p>

            <button class="btn btn-primary" id="wechat-demo-login-btn" style="width:100%; justify-content:center;">${t('wechatDemoLoginBtn')}</button>

            <div class="wechat-modal-divider"><span>${t('brandName')}</span></div>
          </div>
        `;
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

          // Credit whoever's referral link brought this session in, if any
          // (demo mode reuses a fixed pool of users, so this only actually
          // grants once per browser thanks to the recordReferralSignup
          // referredUserIds de-dupe).
          const pendingRef = sessionStorage.getItem('scanser_pending_ref');
          if (pendingRef) {
            recordReferralSignup(pendingRef, session.id);
            sessionStorage.removeItem('scanser_pending_ref');
          }
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

      bindEvents() {
        const closeBtn = document.getElementById('wechat-modal-close');
        if (closeBtn) closeBtn.onclick = () => this.close();
        const demoBtn = document.getElementById('wechat-demo-login-btn');
        if (demoBtn) demoBtn.onclick = () => this.completeLogin();
      }
    };

    /* ==========================================================================
       SECTION 4C: RECHARGE CHECKOUT (fake Alipay/WeChat QR — DEMO ONLY)
       ==========================================================================
       No real payment gateway is wired up yet. This draws a QR code (same
       `qrcode` lib as WeChatAuth) that encodes a harmless placeholder
       string, shows a "Demo QR" badge so nobody mistakes it for a working
       checkout, and auto-confirms itself after a few seconds — exactly
       like WeChatAuth's demo-mode fallback (SECTION 4B). Swap `confirm()`
       for a real webhook/polling call against your payment provider later
       and nothing else in Views.recharge() needs to change.
       ========================================================================== */
    const RechargeCheckout = {
      selectedPlanId: MEMBERSHIP_PLANS.find(p => p.hot) ? MEMBERSHIP_PLANS.find(p => p.hot).id : MEMBERSHIP_PLANS[0].id,
      method: 'alipay', // 'alipay' | 'wechat'
      timer: null,
      countdownTimer: null,
      confirmed: false,
      orderId: null,
      orderCreatedAt: null,
      orderExpiresAt: null,

      selectPlan(planId) {
        this.selectedPlanId = planId;
        this.resetPaymentState();
        Router.navigate('recharge');
      },

      selectMethod(method) {
        this.method = method;
        this.resetPaymentState();
        Router.navigate('recharge');
      },

      resetPaymentState() {
        clearTimeout(this.timer);
        clearInterval(this.countdownTimer);
        this.confirmed = false;
        this.orderId = null;
        this.orderCreatedAt = null;
        this.orderExpiresAt = null;
      },

      currentPlan() {
        return MEMBERSHIP_PLANS.find(p => p.id === this.selectedPlanId) || MEMBERSHIP_PLANS[0];
      },

      // "SC" + timestamp-in-base36 + a short random tail — just needs to
      // look like a real order id for the demo checkout, see file header.
      generateOrderId() {
        return 'SC' + Date.now().toString(36).toUpperCase() + Math.random().toString(36).slice(2, 6).toUpperCase();
      },

      // mm:ss left on the current (demo) order — used by the countdown
      // label next to the QR box, purely cosmetic in demo mode.
      orderTimeLeftLabel() {
        if (!this.orderExpiresAt) return '';
        const msLeft = Math.max(0, this.orderExpiresAt - Date.now());
        const mins = Math.floor(msLeft / 60000);
        const secs = Math.floor((msLeft % 60000) / 1000);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
      },

      // Called once the DOM for the QR box exists (after Views.recharge()
      // renders) — draws the code, mints a fake order id + 15-min expiry
      // window, and starts the demo auto-confirm timer.
      mountDemoQr() {
        const canvas = document.getElementById('recharge-qr-canvas');
        if (!canvas) return;
        if (!this.orderId) {
          this.orderId = this.generateOrderId();
          this.orderCreatedAt = Date.now();
          this.orderExpiresAt = Date.now() + 15 * 60 * 1000;
        }
        const plan = this.currentPlan();
        const payload = `demo://recharge?order=${this.orderId}&plan=${plan.id}&method=${this.method}&amount=${plan.price}`;
        if (window.QRCode && typeof QRCode.toCanvas === 'function') {
          QRCode.toCanvas(canvas, payload, { width: 176, margin: 1, color: { dark: '#1F2937', light: '#FFFFFF' } });
        }
        const countdownEl = document.getElementById('recharge-order-countdown');
        clearInterval(this.countdownTimer);
        this.countdownTimer = setInterval(() => {
          const el = document.getElementById('recharge-order-countdown');
          if (!el) { clearInterval(this.countdownTimer); return; }
          if (Date.now() >= this.orderExpiresAt) {
            clearInterval(this.countdownTimer);
            el.textContent = t('waitingForPayment');
            return;
          }
          el.textContent = this.orderTimeLeftLabel();
        }, 1000);
        if (countdownEl) countdownEl.textContent = this.orderTimeLeftLabel();
        clearTimeout(this.timer);
        this.timer = setTimeout(() => this.confirm(), 4000 + Math.random() * 1500);
      },

      // DEMO confirm — grants the selected plan's membership locally. A
      // real integration would instead be triggered by a payment webhook
      // (see supabase/functions/wechat-webhook/index.ts for the equivalent
      // pattern already used for WeChat login).
      confirm() {
        if (this.confirmed) return;
        this.confirmed = true;
        clearTimeout(this.timer);
        clearInterval(this.countdownTimer);
        const plan = this.currentPlan();
        grantMembership(plan.id);
        AuditLog.log('Membership purchased (demo)', `${plan.labelKey} · ¥${plan.price.toFixed(2)} · ${this.method} · ${this.orderId || ''}`);
        Toast.show(t('membershipPurchaseSuccess'), 'success');
        Router.navigate('recharge');
      }
    };

    /* ==========================================================================
       SECTION 5: ACCESS CONTROL & PERMISSIONS
       ========================================================================== */
    const Permissions = {
      fixed: {
        recharge: ['admin', 'user', 'viewer'],
        quota: ['admin', 'user', 'viewer'],
        promotion: ['admin', 'user', 'viewer'],
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
        renderStatusChip();
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
      card: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line><line x1="6" y1="15" x2="10" y2="15"></line></svg>`,
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
      clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3.5 2"></path></svg>`,
      shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z"></path><path d="M9 12l2 2 4-4"></path></svg>`,
      upload: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>`,
      download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`,
      upload: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>`,
      trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path><path d="M10 11v6M14 11v6M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"></path></svg>`,
      gift: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>`,
      migrate: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 2l4 4-4 4"></path><path d="M21 6H8a4 4 0 0 0-4 4v1"></path><path d="M7 22l-4-4 4-4"></path><path d="M3 18h13a4 4 0 0 0 4-4v-1"></path></svg>`,
      megaphone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 11l18-7v16L3 13v-2z"></path><path d="M7 13v6a2 2 0 0 0 2 2h1v-7"></path></svg>`,
      chevronDown: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>`,
      lock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
      star: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2.5l2.9 6.6 7.1.7-5.4 4.7 1.7 7-6.3-3.9-6.3 3.9 1.7-7-5.4-4.7 7.1-.7z"></path></svg>`
    };

    function iconFor(tool) {
      return Icons[tool.icon] || Icons.generic;
    }

    // Maps a route to its display title, used by the shared app navbar
    // (Views.Layout) to show the current page name where the search bar
    // used to be.
    function pageTitleForRoute(route) {
      if (route === 'home') return t('publicNavHome');
      if (route === 'recharge') return t('rechargePageTitle');
      if (route === 'promotion') return t('promotionPageTitle');
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
      // The 3 rewrite sub-modes (tool.group === 'start-rewriting') render as
      // one collapsible "Start Rewriting" parent with 3 children, matching
      // the reference product. Any tool without a group stays a flat item.
      const rewriteTools = state.tools.filter(tool => tool.group === 'start-rewriting');
      if (rewriteTools.length) {
        items.push({
          type: 'group',
          key: 'start-rewriting',
          icon: Icons.stealth || iconFor(rewriteTools[0]),
          label: t('navStartRewriting'),
          gated: true,
          children: rewriteTools.map(tool => ({ route: tool.id, icon: iconFor(tool), label: svcTitle(tool), gated: true }))
        });
      }
      state.tools.filter(tool => !tool.group).forEach(tool => {
        items.push({ route: tool.id, icon: iconFor(tool), label: svcTitle(tool), gated: true });
      });
      items.push({ route: 'reports', icon: Icons.audit, label: t('publicNavHistory'), gated: true });
      items.push({ route: 'ranking', icon: Icons.access, label: t('publicNavRanking'), gated: true });
      return items;
    }

    // Shared markup for both the logged-out public sidebar (Views.Home) and
    // the logged-in app sidebar (Views.Layout) — handles plain items AND the
    // "Start Rewriting" group (a header row + 3 always-visible sub-items,
    // indented, matching the reference product's sidebar).
    function renderSidebarNavItems(navItems, opts) {
      opts = opts || {};
      const gatedAttr = (g) => opts.omitGated ? '' : `data-gated="${g}"`;
      return navItems.map(item => {
        if (item.type === 'group') {
          const childActive = item.children.some(c => c.route === state.currentRoute);
          // Expanded if the user has it open, or (regardless of that flag)
          // whenever one of its children is the active page — collapsing
          // your own current section would be confusing.
          const expanded = sidebarRewriteExpanded || childActive;
          return `
            <div class="nav-group ${expanded ? 'expanded' : ''}">
              <button type="button" class="nav-item nav-group-header ${childActive ? 'nav-group-header-active' : ''}" data-nav-group-toggle="${item.key}" aria-expanded="${expanded}">
                ${item.icon} <span class="nav-text">${item.label}</span>
                <span class="nav-group-chevron">${Icons.chevronDown}</span>
              </button>
              <div class="nav-group-children">
                ${item.children.map(child => `
                  <a href="#" class="nav-item nav-subitem ${state.currentRoute === child.route ? 'active' : ''}" data-route="${child.route}" ${gatedAttr(child.gated)}>
                    ${child.icon} <span class="nav-text">${child.label}</span>
                  </a>
                `).join('')}
              </div>
            </div>`;
        }
        return `
          <a href="#" class="nav-item ${state.currentRoute === item.route ? 'active' : ''}" data-route="${item.route}" ${gatedAttr(item.gated)}>
            ${item.icon} <span class="nav-text">${item.label}</span>
          </a>`;
      }).join('');
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
        const pageIcon = { reports: Icons.audit, ranking: Icons.access };
        const pageLabel = { reports: 'publicNavHistory', ranking: 'publicNavRanking' };
        ['reports', 'ranking'].forEach(route => {
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
    // Shared renderer for the "what's real vs demo" info modal — used both
    // right after login (maybeShowDemoInfoModal, gated to non-admin users)
    // and from the floating "Demo View" chip's Read More button
    // (Events.openDemoInfoModal, open to anyone, anytime). `onClose` is
    // optional and only used by the login-flow chain.
    function renderDemoInfoModal(onClose) {
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
      document.getElementById('demo-info-ok').onclick = () => { Modal.close(); if (onClose) onClose(); };
    }

    function maybeShowDemoInfoModal(onDone) {
      if (!state.user || state.user.role === 'admin') { if (onDone) onDone(); return; }
      renderDemoInfoModal(onDone);
    }

    // Floating "Demo View" chip pinned to the bottom-left of the viewport
    // (see index.html's #demo-status-chip) — a persistent, always-visible
    // disclosure that this is a demo build, independent of route/login
    // state. Re-rendered on every screen change (Router.renderScreen) so
    // its text follows state.language like the rest of the UI.
    function renderStatusChip() {
      const el = document.getElementById('demo-status-chip');
      if (!el) return;
      el.innerHTML = `
        <span class="demo-status-chip-dot"></span>
        <span class="demo-status-chip-text">${t('demoStatusChipText')}</span>
        <button type="button" class="demo-status-chip-link" id="demo-status-chip-readmore">${t('demoStatusReadMore')}</button>
      `;
      const btn = document.getElementById('demo-status-chip-readmore');
      if (btn) btn.onclick = () => renderDemoInfoModal();
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
          let total = Math.floor(Math.random() * 24);
          // Excluding quotes/bibliography from scoring drops the reported
          // similarity a bit, same effect real detectors have.
          if (payload && payload.excludeReferences) total = Math.max(0, Math.round(total * 0.7));
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
          { badge: t('heroSlide2Eyebrow'), title: t('heroSlide2Title'), sub: t('heroSlide2Subtitle'), cta: t('heroSlide2Cta'), route: 'dual-mode', grad: 'linear-gradient(120deg,#4A90E2 0%,#7C3AED 100%)' },
          { badge: t('heroSlide3Eyebrow'), title: t('heroSlide3Title'), sub: t('heroSlide3Subtitle'), cta: t('heroSlide3Cta'), route: 'ai-report', grad: 'linear-gradient(120deg,#10B981 0%,#0EA5E9 100%)' }
        ];

        // Quick-nav cards = the exact same SERVICES as the sidebar, just
        // rendered as a grid. One array, two presentations — never drifts.
        const quickCards = state.tools.map(tool => ({
          route: tool.id, icon: iconFor(tool), tone: tool.tone,
          tag: tool.id === 'reduce-ai-rate' ? t('tagPopular') : (tool.id === 'dual-mode' ? t('tagBest') : ''),
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
                ${renderSidebarNavItems(navItems)}
                ${loggedIn ? `
                  <div class="nav-section-title">${t('rechargePageTitle')}</div>
                  <a href="#" class="nav-item ${state.currentRoute === 'recharge' ? 'active' : ''}" data-route="recharge">
                    ${Icons.card} <span class="nav-text">${t('navRecharge')}</span>
                  </a>
                  <a href="#" class="nav-item ${state.currentRoute === 'redeem' ? 'active' : ''}" data-route="redeem">
                    ${Icons.gift} <span class="nav-text">${t('navRedeemCode')}</span>
                  </a>
                  <a href="#" class="nav-item ${state.currentRoute === 'promotion' ? 'active' : ''}" data-route="promotion">
                    ${Icons.megaphone} <span class="nav-text">${t('navPromotion')}</span>
                  </a>
                  <a href="#" class="nav-item" data-route="migration">
                    ${Icons.migrate} <span class="nav-text">${t('navMigration')}</span>
                  </a>
                  ${quotaHoverTriggerHtml()}
                ` : ''}
                <a href="#" class="nav-item" id="home-join-group-link">
                  ${Icons.access} <span class="nav-text">${t('publicNavJoinGroup')}</span>
                </a>
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
                  ${loggedIn ? `<a href="#" class="membership-badge ${isMembershipActive() ? 'active' : 'inactive'}" id="membership-badge-btn">${Icons.usage}<span>${isMembershipActive() ? `${t('membershipBadgeActive')}: ${membershipTimeLeftLabel()}` : t('membershipBadgeUpgrade')}</span></a>` : ''}
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
                ${renderSidebarNavItems(navItems, { omitGated: true })}

                <div class="nav-section-title">${t('rechargePageTitle')}</div>
                <a href="#" class="nav-item ${state.currentRoute === 'recharge' ? 'active' : ''}" data-route="recharge">
                  ${Icons.card} <span class="nav-text">${t('navRecharge')}</span>
                </a>
                <a href="#" class="nav-item ${state.currentRoute === 'redeem' ? 'active' : ''}" data-route="redeem">
                  ${Icons.gift} <span class="nav-text">${t('navRedeemCode')}</span>
                </a>
                <a href="#" class="nav-item ${state.currentRoute === 'promotion' ? 'active' : ''}" data-route="promotion">
                  ${Icons.megaphone} <span class="nav-text">${t('navPromotion')}</span>
                </a>
                <a href="#" class="nav-item" data-route="migration">
                  ${Icons.migrate} <span class="nav-text">${t('navMigration')}</span>
                </a>
                ${quotaHoverTriggerHtml()}

                <a href="#" class="nav-item" id="app-join-group-link">
                  ${Icons.access} <span class="nav-text">${t('publicNavJoinGroup')}</span>
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
                  <a href="#" class="membership-badge ${isMembershipActive() ? 'active' : 'inactive'}" id="membership-badge-btn">
                    ${Icons.usage}
                    <span>${isMembershipActive() ? `${t('membershipBadgeActive')}: ${membershipTimeLeftLabel()}` : t('membershipBadgeUpgrade')}</span>
                  </a>

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
        const ui = rankingUiState;
        if (!ui.languageSynced) { ui.language = state.language; ui.languageSynced = true; }
        const isZh = ui.language === 'zh';

        // Combined "model" pool: the 6 named rewrite-mode versions plus
        // every detection platform — real config from PLATFORMS /
        // REWRITE_MODE_VERSIONS, not hardcoded fake rows, so this stays in
        // sync automatically if either list is edited.
        let pool = [
          ...REWRITE_MODE_VERSIONS.map(v => ({ id: v.id, zh: v.zh, en: v.en, kind: 'rewrite' })),
          ...PLATFORMS.map(p => ({ id: p.id, zh: p.zh, en: p.en, kind: 'platform' }))
        ];
        if (ui.platform !== 'all') {
          pool = pool.filter(m => m.kind === 'rewrite' || m.id === ui.platform);
        }

        // Date-range multiplier scales the mock call volume up for wider
        // windows (a week has ~7x a day's calls, a month ~30x) — same
        // base per-model magnitude, just summed over more days.
        const rangeMultiplier = { '1d': 1, '1w': 7, '1m': 30 }[ui.dateRange] || 7;
        const models = pool.map(m => {
          const base = Math.floor(seededRandom(m.id + '|base') * 900000) + 5000;
          const calls = Math.round(base * rangeMultiplier * (0.85 + seededRandom(m.id + ui.dateRange) * 0.3));
          return { ...m, calls };
        }).sort((a, b) => b.calls - a.calls);

        const totalCalls = models.reduce((sum, m) => sum + m.calls, 0);
        const top3 = models.slice(0, 3);
        const activeModels = models.filter(m => m.calls > 0).length;
        const nameOf = (m) => isZh ? m.zh : m.en;
        const fmt = (n) => n.toLocaleString(isZh ? 'zh-CN' : 'en-US');

        return `
          <div class="page-header">
            <div>
              <h1 class="page-title">${t('publicNavRanking')}</h1>
              <p style="color:var(--text-muted); font-size:0.9rem;">${t('modelRankingSubtitle')}</p>
            </div>
          </div>

          <div class="card" style="margin-bottom:1.25rem;">
            <div class="ranking-filter-row">
              <div class="ranking-filter-group">
                <span class="ranking-filter-label">${t('modelRankingDateRange')}</span>
                <div class="ranking-pill-row" data-ranking-filter="dateRange">
                  <button type="button" class="ranking-pill ${ui.dateRange === '1d' ? 'active' : ''}" data-value="1d">${t('modelRanking1Day')}</button>
                  <button type="button" class="ranking-pill ${ui.dateRange === '1w' ? 'active' : ''}" data-value="1w">${t('modelRanking1Week')}</button>
                  <button type="button" class="ranking-pill ${ui.dateRange === '1m' ? 'active' : ''}" data-value="1m">${t('modelRanking1Month')}</button>
                </div>
              </div>
              <div class="ranking-filter-group">
                <span class="ranking-filter-label">${t('modelRankingLanguage')}</span>
                <div class="ranking-pill-row" data-ranking-filter="language">
                  <button type="button" class="ranking-pill ${ui.language === 'zh' ? 'active' : ''}" data-value="zh">${t('modelRankingChinese')}</button>
                  <button type="button" class="ranking-pill ${ui.language === 'en' ? 'active' : ''}" data-value="en">${t('modelRankingEnglish')}</button>
                </div>
              </div>
              <div class="ranking-filter-group">
                <span class="ranking-filter-label">${t('modelRankingPlatform')}</span>
                <select class="form-select" id="ranking-platform-select" style="width:auto;">
                  <option value="all" ${ui.platform === 'all' ? 'selected' : ''}>${t('modelRankingAllPlatforms')}</option>
                  ${PLATFORMS.map(p => `<option value="${p.id}" ${ui.platform === p.id ? 'selected' : ''}>${isZh ? p.zh : p.en}</option>`).join('')}
                </select>
              </div>
            </div>
          </div>

          <div class="ranking-stats-row">
            <div class="card ranking-stat-card">
              <div class="ranking-stat-icon tone-red">${Icons.access}</div>
              <div>
                <div class="ranking-stat-label">${t('statTotalCalls')}</div>
                <div class="ranking-stat-value">${fmt(totalCalls)}</div>
              </div>
            </div>
            <div class="card ranking-stat-card" style="align-items:flex-start;">
              <div class="ranking-stat-icon tone-orange">★</div>
              <div style="flex:1; min-width:0;">
                <div class="ranking-stat-label" style="margin-bottom:0.5rem;">${t('statTopModels')}</div>
                <div class="ranking-top3-list">
                  ${top3.map((m, i) => `
                    <div class="ranking-top3-row">
                      <span class="ranking-top3-rank rank-${i + 1}">${i + 1}</span>
                      <span class="ranking-top3-name">${nameOf(m)}</span>
                      <span class="ranking-top3-calls">${fmt(m.calls)}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
            <div class="card ranking-stat-card">
              <div class="ranking-stat-icon tone-blue">${Icons.usage}</div>
              <div>
                <div class="ranking-stat-label">${t('statActiveModels')}</div>
                <div class="ranking-stat-value">${activeModels}</div>
              </div>
            </div>
          </div>

          <div class="card">
            <div style="margin-bottom:0.75rem;">
              <h3 style="font-size:1rem; font-weight:600; margin:0;">${t('modelUsageTrendTitle')}</h3>
              <p class="muted" style="font-size:0.8rem; margin:0.15rem 0 0;">${t('modelUsageTrendSubtitle')}</p>
            </div>
            <canvas id="modelRankingChart" height="220" style="width:100%;" data-models='${JSON.stringify(models.map(m => ({ name: nameOf(m), calls: m.calls })))}'></canvas>
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
          </div>
          ${(tool.chips && tool.chips.length && tool.type !== 'upload') ? `
          <div class="tool-model-chips" style="margin:0.75rem 0 0.25rem; display:flex; gap:0.5rem; flex-wrap:wrap;">
            <span style="font-size:0.8rem; color:var(--text-muted);">${t('detectionModelsLabel')}:</span>
            ${tool.chips.map(c => `<span class="badge badge-neutral">${c}</span>`).join('')}
          </div>` : ''}`;

        if (tool.type === 'upload') {
          // Which detection engines this specific tool can scan against —
          // both current upload tools (ai-report/plagiarism-report) support
          // both, but this stays data-driven so a future upload tool can
          // narrow it via tool.detectionModels.
          const modelOptions = tool.detectionModels || ['turnitin', 'ithenticate'];
          const modelLabels = { turnitin: 'Turnitin', ithenticate: 'iThenticate' };
          const modelIcons = { turnitin: Icons.turnitin, ithenticate: Icons.ithenticate };
          const ui = getUploadUi(tool.id);
          return `
            ${header}
            ${statusBanner}
            ${creditBadge}
            <div class="upload-tool-card card">
              <div class="upload-select-row">
                <div class="model-select-row">
                  <span class="model-select-label">${t('rewriteLanguageLabel')}</span>
                  <div class="rewrite-pill-group" id="upload-lang-group">
                    <button type="button" class="rewrite-pill ${ui.lang === 'zh' ? 'active' : ''}" data-upload-lang="zh">${t('rewriteLangChinese')}</button>
                    <button type="button" class="rewrite-pill ${ui.lang !== 'zh' ? 'active' : ''}" data-upload-lang="en">${t('rewriteLangEnglish')}</button>
                  </div>
                </div>
                <div class="model-select-row">
                  <span class="model-select-label">${t('chooseModelLabel')}</span>
                  <div class="model-chip-group" id="doc-model-group" role="group">
                    ${modelOptions.map(m => `<button type="button" class="report-filter-chip ${ui.model === m ? 'active' : ''}" data-value="${m}">${modelIcons[m] || Icons.generic} <span>${modelLabels[m] || m}</span></button>`).join('')}
                  </div>
                </div>
              </div>

              <form id="tool-upload-form">
                <label class="upload-dropzone" id="upload-dropzone" for="doc-file">
                  <input type="file" id="doc-file" accept=".pdf,.doc,.docx,.txt" hidden>
                  <div class="upload-dropzone-icon">${Icons.upload}</div>
                  <p class="upload-dropzone-text" id="upload-dropzone-text">${t('dragDrop')}</p>
                  <p class="upload-dropzone-hint">${t('fileTypesHint')}</p>
                </label>

                <label class="checkbox-row">
                  <input type="checkbox" id="doc-exclude-refs" ${ui.excludeReferences ? 'checked' : ''}>
                  <span>
                    <span class="checkbox-row-title">${t('excludeReferencesLabel')}</span>
                    <span class="checkbox-row-hint">${t('excludeReferencesHint')}</span>
                  </span>
                </label>

                <button type="submit" class="btn btn-primary w-full" id="upload-submit-btn">${t('submitProcess')}</button>
              </form>
            </div>
          `;
        }

        // type === 'text' — the 3 "Start Rewriting" sub-modes (Lower AI
        // Rate / Lower Plagiarism / Dual Mode). Tabs, language toggle,
        // platform chips, strength slider and/or mode dropdown are all
        // config-driven off `tool.hasStrength` / `tool.hasModeDropdown` so
        // this one template serves all 3 without branching per-tool.
        const ui = getRewriteUi(tool.id);
        const activePlatform = PLATFORMS.find(p => p.id === ui.platform) || PLATFORMS[0];
        const activeMode = REWRITE_MODE_VERSIONS.find(m => m.id === ui.modeVersion) || REWRITE_MODE_VERSIONS[0];
        const isZh = state.language === 'zh';
        // Free / expired users can still run a rewrite, they just can't
        // touch the customization controls below — see canCustomizeRewrite().
        const rewriteLocked = !canCustomizeRewrite();

        const tabsHtml = `
          <div class="rewrite-tabbar">
            <button type="button" class="rewrite-tab ${ui.inputTab === 'text' ? 'active' : ''}" data-rewrite-tab="text">${t('rewriteTextInputTab')}</button>
            <button type="button" class="rewrite-tab ${ui.inputTab === 'file' ? 'active' : ''}" data-rewrite-tab="file">${t('rewriteFileTab')}</button>
          </div>`;

        const controlsHtml = `
          ${rewriteLocked ? `
          <div class="rewrite-locked-hint">
            ${Icons.lock}
            <span>${t('rewriteLockedHint')}</span>
            <a href="#" class="rewrite-locked-cta" data-route="recharge">${t('rewriteLockedCta')} →</a>
          </div>` : ''}
          <div class="rewrite-controls-row ${rewriteLocked ? 'rewrite-controls-locked' : ''}">
            <div class="rewrite-control-group">
              <span class="rewrite-control-label">${t('rewriteLanguageLabel')}</span>
              <div class="rewrite-pill-group" data-rewrite-lang-group>
                <button type="button" class="rewrite-pill ${ui.inputLang === 'zh' ? 'active' : ''}" data-rewrite-lang="zh">${t('rewriteLangChinese')}</button>
                <button type="button" class="rewrite-pill ${ui.inputLang === 'en' ? 'active' : ''}" data-rewrite-lang="en">${t('rewriteLangEnglish')}</button>
              </div>
            </div>
            <div class="rewrite-control-group rewrite-platform-group">
              <span class="rewrite-control-label">${t('rewritePlatformLabel')}</span>
              <div class="rewrite-platform-scroll" data-rewrite-platform-group aria-disabled="${rewriteLocked}">
                ${PLATFORMS.map(p => `<button type="button" class="rewrite-chip ${p.id === ui.platform ? 'active' : ''}" data-rewrite-platform="${p.id}" ${rewriteLocked ? 'disabled' : ''}>${isZh ? p.zh : p.en}</button>`).join('')}
              </div>
            </div>
          </div>
          ${tool.hasStrength ? `
          <div class="rewrite-strength-row">
            <span class="rewrite-control-label">${t('rewriteStrengthLabel')}:</span>
            <input type="range" min="1" max="11" step="1" value="${ui.strength}" id="rewrite-strength-slider" class="rewrite-slider" ${rewriteLocked ? 'disabled' : ''}>
            <span class="badge badge-danger" id="rewrite-strength-value">${ui.strength}</span>
            <span class="rewrite-rec-marker">${t('rewriteRecMarker')}</span>
            ${rewriteLocked ? `<span class="rewrite-lock-badge">${Icons.lock}</span>` : ''}
          </div>` : ''}
          ${tool.hasModeDropdown ? `
          <div class="rewrite-mode-row">
            <span class="rewrite-control-label">${t('rewriteModeLabel')}:</span>
            <select id="rewrite-mode-select" class="form-select rewrite-mode-select" ${rewriteLocked ? 'disabled' : ''}>
              ${REWRITE_MODE_VERSIONS.map(m => `<option value="${m.id}" ${m.id === ui.modeVersion ? 'selected' : ''}>${isZh ? m.zh : m.en}${m.rec ? ' (' + t('rewriteRecMarker') + ')' : ''}</option>`).join('')}
            </select>
            ${rewriteLocked ? `<span class="rewrite-lock-badge">${Icons.lock}</span>` : ''}
          </div>` : ''}`;

        // One continuous workspace card now instead of a separate controls
        // card + two gapped panel cards: tabs/controls on top, input/result
        // panels split by a divider, and a single shared footer bar with
        // the char counter, Sample/Clear and the Start button — whichever
        // of the text- or file-tab actions applies is toggled by the
        // data-rewrite-tab handler below, same as the panels themselves.
        const textPanel = `
          <div class="rewrite-workspace-panel" id="rewrite-text-panel" style="${ui.inputTab === 'file' ? 'display:none;' : ''}">
            <textarea id="tool-text-input" class="rewrite-workspace-textarea" placeholder="${isZh ? '在此粘贴或输入中文文本…' : 'Paste or type your text here...'}"></textarea>
          </div>
          <div class="rewrite-workspace-panel" id="rewrite-file-panel" style="${ui.inputTab === 'file' ? '' : 'display:none;'}">
            <div class="rewrite-file-drop">
              <p style="font-size:0.875rem; color:var(--text-muted); margin:0;">${t('rewriteFileDropHint')}</p>
            </div>
          </div>`;

        const resultPanel = `
          <div class="rewrite-workspace-panel">
            <div class="rewrite-workspace-panel-label">
              <span>${t('rewriteResultLabel')}</span>
              <div class="flex items-center gap-2">
                <span class="badge badge-success hidden" id="tool-text-badge">Done</span>
                <button type="button" class="rewrite-workspace-copy-btn" id="tool-text-copy">${t('copy')}</button>
              </div>
            </div>
            <textarea id="tool-text-output" class="rewrite-workspace-textarea" readonly placeholder="${t('rewriteResultPlaceholder')}"></textarea>
          </div>`;

        return `
          ${statusBanner}
          ${creditBadge}
          <div class="rewrite-workspace">
            <div class="rewrite-workspace-controls">
              <div class="flex justify-between items-center" style="flex-wrap:wrap; gap:0.75rem; margin-bottom:1rem;">
                ${tabsHtml}
              </div>
              ${controlsHtml}
            </div>
            <div class="rewrite-workspace-body">
              ${textPanel}
              ${resultPanel}
            </div>
            <div class="rewrite-workspace-footer">
              <span class="muted" style="font-size:0.8rem;" id="rewrite-char-counter">0 ${t('rewriteCharsLabel')}</span>
              <div class="rewrite-workspace-footer-actions" id="rewrite-footer-text-actions" style="${ui.inputTab === 'file' ? 'display:none;' : ''}">
                <button type="button" class="btn btn-secondary btn-sm" id="rewrite-sample-btn">${t('rewriteSampleBtn')}</button>
                <button class="btn btn-secondary btn-sm" id="tool-text-clear">${t('clear')}</button>
                <button class="btn btn-primary" id="tool-text-process">${t('rewriteStartBtn')}</button>
              </div>
              <div class="rewrite-workspace-footer-actions" id="rewrite-footer-file-actions" style="${ui.inputTab === 'file' ? '' : 'display:none;'}">
                <button class="btn btn-primary" id="tool-file-process">${t('rewriteStartBtn')}</button>
              </div>
            </div>
          </div>
        `;
      },

      recharge() {
        const plan = RechargeCheckout.currentPlan();
        const discount = plan.original - plan.price;
        const active = isMembershipActive();
        const membership = getMembership();

        const planCard = (p) => {
          const savePct = p.original > 0 ? Math.round((1 - p.price / p.original) * 100) : 0;
          return `
          <div class="plan-card ${p.id === RechargeCheckout.selectedPlanId ? 'selected' : ''}" data-plan-id="${p.id}">
            ${p.hot ? `<span class="plan-badge plan-badge-hot">${t('hotRibbon')}</span>` : ''}
            ${p.best ? `<span class="plan-badge plan-badge-best">${t('bestBadge')}</span>` : ''}
            <div class="plan-card-label">${t(p.labelKey)}</div>
            <div class="plan-card-price">¥${p.price.toFixed(2)}</div>
            <div class="plan-card-original">¥${p.original.toFixed(2)}</div>
            ${savePct > 0 ? `<div class="plan-card-tag">${state.language === 'zh' ? `省${savePct}%` : `Save ${savePct}%`}</div>` : ''}
          </div>
        `;
        };

        return `
          <div class="page-header">
            <div>
              <h1 class="page-title">${t('rechargePageTitle')}</h1>
              <p style="color:var(--text-muted); font-size:0.9rem;">${t('rechargePageSubtitle')}</p>
            </div>
            <button class="btn btn-secondary btn-sm" id="recharge-back-btn">← ${t('backBtn')}</button>
          </div>

          ${active ? `
          <div class="card" style="margin-bottom:1.5rem; display:flex; align-items:center; gap:0.75rem; background:var(--success-light); border-color:rgba(16,185,129,0.25);">
            ${Icons.statusOk}
            <span style="font-size:0.9rem; color:var(--success); font-weight:600;">
              ${t('membershipBadgeActive')}: ${membershipTimeLeftLabel()} ${state.language === 'zh' ? '剩余' : 'remaining'}
            </span>
          </div>
          ` : ''}

          <div class="grid-main-side" style="align-items:flex-start;">
            <div style="display:flex; flex-direction:column; gap:1.5rem;">
              <div class="card">
                <h3 style="font-size:1rem; font-weight:600; margin-bottom:1rem; display:flex; align-items:center; gap:0.5rem;">
                  ${Icons.usage} ${t('selectDuration')}
                </h3>
                <div class="plan-grid">
                  ${MEMBERSHIP_PLANS.map(planCard).join('')}
                </div>
              </div>

              <div class="card">
                <h3 style="font-size:1.05rem; font-weight:600; margin-bottom:1rem;">${t('membershipBenefitsTitle')}</h3>
                <div class="grid-2col">
                  <div>
                    <h4 class="benefits-subhead">${Icons.statusOk} ${t('benefitsFeaturesTitle')}</h4>
                    <ul class="benefits-list">
                      <li>${Icons.statusOk} ${t('benefitsFeature1')}</li>
                      <li>${Icons.statusOk} ${t('benefitsFeature2')}</li>
                      <li>${Icons.statusOk} ${t('benefitsFeature3')}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 class="benefits-subhead">${Icons.stealth} ${t('benefitsModelsTitle')}</h4>
                    <ul class="benefits-list">
                      ${state.tools.filter(x => x.kind === 'rewrite').map(x => `<li>${Icons.statusOk} ${svcTitle(x)}</li>`).join('')}
                    </ul>
                  </div>
                  <div>
                    <h4 class="benefits-subhead">${Icons.reports} ${t('benefitsDetectionTitle')}</h4>
                    <ul class="benefits-list">
                      <li>${Icons.statusOk} ${t('benefitsDetection1')}</li>
                      <li>${Icons.statusOk} ${t('benefitsDetection2')}</li>
                      <li>${Icons.statusOk} ${t('benefitsDetection3')}</li>
                      <li>${Icons.statusOk} ${t('benefitsDetection4')}</li>
                      <li>${Icons.statusOk} ${t('benefitsDetection5')}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 class="benefits-subhead">${Icons.shield} ${t('benefitsExclusiveTitle')}</h4>
                    <ul class="benefits-list">
                      <li>${Icons.statusOk} ${t('benefitsExclusive1')}</li>
                      <li>${Icons.statusOk} ${t('benefitsExclusive2')}</li>
                    </ul>
                  </div>
                </div>
                <div class="coming-soon-box">
                  <div class="benefits-subhead" style="color:var(--warning);">${Icons.statusWarn} ${t('comingSoonTitle')}</div>
                  <div class="coming-soon-chips">
                    <span>${t('comingSoon1')}</span><span>${t('comingSoon2')}</span><span>${t('comingSoon3')}</span>
                    <span>${t('comingSoon4')}</span><span>${t('comingSoon5')}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="card" style="position:sticky; top:1.5rem;">
              <div class="flex justify-between items-center" style="margin-bottom:1rem;">
                <h3 style="font-size:1rem; font-weight:600; margin:0;">${t('orderDetailsTitle')}</h3>
                <a href="#" class="btn-sm" data-route="redeem" style="display:flex; align-items:center; gap:0.3rem; color:var(--primary); font-weight:600;">${Icons.gift} ${t('redeemCodeBtn')}</a>
              </div>
              <div class="order-row"><span>${t('orderType')}</span><strong>${t('orderTypeValue')}</strong></div>
              <div class="order-row"><span>${t('orderDuration')}</span><strong>${t(plan.labelKey)}</strong></div>
              <div class="order-row"><span>${t('orderOriginal')}</span><strong>¥${plan.original.toFixed(2)}</strong></div>
              <div class="order-row"><span>${t('orderDiscount')}</span><strong style="color:var(--success);">-¥${discount.toFixed(2)}</strong></div>
              <div class="order-row order-total-row"><span>${t('orderTotal')}</span><strong>¥${plan.price.toFixed(2)}</strong></div>

              <div class="pay-method-label">${t('paymentMethod')}</div>
              <div class="pay-method-row">
                <button type="button" class="pay-method-btn ${RechargeCheckout.method === 'alipay' ? 'selected' : ''}" data-method="alipay">
                  ${Icons.statusOk} ${t('payAlipay')}
                </button>
                <button type="button" class="pay-method-btn ${RechargeCheckout.method === 'wechat' ? 'selected' : ''}" data-method="wechat">
                  ${Icons.statusOk} ${t('payWechat')}
                </button>
              </div>

              ${isPaymentGatewayConfigured() ? `
              ${RechargeCheckout.orderId ? `
              <div class="order-id-row">
                <span>${state.language === 'zh' ? '订单号' : 'Order ID'}</span>
                <strong style="font-family:monospace;">${RechargeCheckout.orderId}</strong>
              </div>
              ` : ''}
              <div class="wechat-demo-badge" style="margin:0.9rem 0 0.75rem;">${Icons.statusWarn}<span>${t('demoQrNotice')}</span></div>
              <div class="wechat-qr-box" id="recharge-qr-box">
                <canvas id="recharge-qr-canvas" width="176" height="176"></canvas>
                <div class="wechat-qr-overlay" id="recharge-qr-overlay">
                  ${RechargeCheckout.confirmed ? `<div class="wechat-scanned-check">${Icons.statusOk}</div>` : ''}
                </div>
              </div>
              ${!RechargeCheckout.confirmed ? `
              <p class="qr-countdown-label">
                ${Icons.clock}<span id="recharge-order-countdown">${RechargeCheckout.orderTimeLeftLabel()}</span>
              </p>
              ` : ''}
              <p class="wechat-qr-status" style="color:${RechargeCheckout.confirmed ? 'var(--success)' : 'var(--text-muted)'};">
                <span>${RechargeCheckout.confirmed ? t('membershipPurchaseSuccess') : t('waitingForPayment')}</span>
              </p>
              ${!RechargeCheckout.confirmed ? `<button type="button" class="btn btn-secondary w-full" id="recharge-simulate-btn" style="margin-bottom:0.75rem;">${t('simulatePaymentBtn')}</button>` : ''}
              ` : `
              <div class="gateway-empty-state">
                <div class="gateway-empty-icon">${Icons.lock}</div>
                <h4>${t('gatewayNotConnectedTitle')}</h4>
                <p>${t('gatewayNotConnectedBody')}</p>
              </div>
              `}
            </div>
          </div>
        `;
      },

      promotion() {
        const rec = getPromotionRecord();
        const submissions = rec ? rec.submissions.slice().reverse() : [];
        const tab = promotionUiState.tab;
        const uiPlatform = promotionUiState.platform || PROMOTION_PLATFORMS[0];

        const platformLabel = (p) => t('promoPlatform' + p.charAt(0).toUpperCase() + p.slice(1));
        const statusBadgeClass = (status) => status === 'approved' ? 'badge-success' : status === 'rejected' ? 'badge-danger' : 'badge-neutral';
        const statusLabel = (status) => t('status' + status.charAt(0).toUpperCase() + status.slice(1));
        const tierReward = (tierId) => {
          const tier = PROMOTION_REWARD_TIERS.find(x => x.id === tierId);
          return tier ? t(tier.rewardKey) : '';
        };

        // Reward Rules — a small grid of tier cards (label + reward,
        // reward colored to match its type: membership hours in the brand
        // color, cash amounts in the warning/amber color) instead of a
        // plain table, matching the reference design.
        const tierCard = (tier) => `
          <div class="promo-tier-card">
            <div class="promo-tier-label">${t(tier.labelKey)}</div>
            <div class="promo-tier-reward" style="color:${tier.type === 'cash' ? 'var(--warning)' : 'var(--primary)'};">${t(tier.rewardKey)}</div>
          </div>
        `;

        const recordRow = (sub) => `
          <tr>
            <td>${platformLabel(sub.platform)}</td>
            <td>${tierReward(sub.tierId)}</td>
            <td><span class="badge ${statusBadgeClass(sub.status)}">${statusLabel(sub.status)}</span></td>
            <td>${new Date(sub.createdAt).toLocaleDateString(state.language === 'zh' ? 'zh-CN' : 'en-US')}</td>
          </tr>
        `;

        return `
          <div class="page-header">
            <div>
              <h1 class="page-title">${t('promotionPageTitle')}</h1>
              <p style="color:var(--text-muted); font-size:0.9rem;">${t('promotionPageSubtitle')}</p>
            </div>
            <div class="flex gap-2">
              <button type="button" class="btn btn-primary btn-sm" data-promo-tab="apply">+ ${t('promotionTabApply')}</button>
              <button type="button" class="btn btn-secondary btn-sm" data-promo-tab="records">${Icons.reports} ${t('promotionTabRecords')}</button>
            </div>
          </div>

          ${tab === 'apply' ? `
          <div class="card" style="margin-bottom:1.25rem;">
            <h3 style="font-size:1rem; font-weight:600; margin-bottom:1rem; display:flex; align-items:center; gap:0.5rem;">
              ${Icons.shield} ${t('promotionRulesTitle')}
            </h3>
            <ul class="benefits-list">
              <li>${Icons.statusOk} ${t('promotionRule1')}</li>
              <li>${Icons.statusOk} ${t('promotionRule2')}</li>
              <li>${Icons.statusOk} ${t('promotionRule3')}</li>
              <li>${Icons.statusOk} ${t('promotionRule4')}</li>
              <li>${Icons.statusOk} ${t('promotionRule5')}</li>
              <li>${Icons.statusOk} ${t('promotionRule6')}</li>
            </ul>
          </div>

          <div class="card" style="margin-bottom:1.25rem;">
            <h3 style="font-size:1rem; font-weight:600; margin-bottom:1rem;">${t('rewardTiersTitle')}</h3>
            <div class="promo-tier-grid">
              ${PROMOTION_REWARD_TIERS.map(tierCard).join('')}
            </div>
          </div>

          <div class="card">
            <h3 style="font-size:1.05rem; font-weight:600; margin-bottom:0.35rem;">${t('promotionApplyTitle')}</h3>
            <p style="color:var(--text-muted); font-size:0.85rem; margin-bottom:1.25rem;">${t('promotionApplyDesc')}</p>

            <form id="promotion-apply-form" class="form-grid">
              <div class="form-group" style="grid-column: 1 / -1;">
                <label class="form-label">${t('applyPlatformLabel')} <span style="color:var(--danger);">*</span></label>
                <div class="rewrite-platform-scroll" data-apply-platform-group>
                  ${PROMOTION_PLATFORMS.map(p => `<button type="button" class="rewrite-chip ${p === uiPlatform ? 'active' : ''}" data-apply-platform="${p}">${platformLabel(p)}</button>`).join('')}
                </div>
              </div>
              <div class="form-group" style="grid-column: 1 / -1;">
                <label class="form-label">${t('applyCategoryLabel')} <span style="color:var(--danger);">*</span></label>
                <select class="form-select" id="apply-category-input" required>
                  <option value="" selected disabled>${t('applyCategoryPlaceholder')}</option>
                  ${PROMOTION_REWARD_TIERS.map(tier => `<option value="${tier.id}">${t(tier.labelKey)} — ${t(tier.rewardKey)}</option>`).join('')}
                </select>
              </div>
              <div class="form-group" style="grid-column: 1 / -1;">
                <label class="form-label">${t('applyPostUrlLabel')} <span style="color:var(--danger);">*</span></label>
                <input type="text" class="form-input" id="apply-posturl-input" placeholder="${t('applyPostUrlPlaceholder')}" required />
              </div>
              <div class="form-group" style="grid-column: 1 / -1;">
                <label class="form-label">${t('wechatIdLabel')} <span style="color:var(--danger);">*</span></label>
                <input type="text" class="form-input" id="apply-wechatid-input" placeholder="${t('wechatIdPlaceholder')}" required />
              </div>
              <div class="form-group" style="grid-column: 1 / -1;">
                <label class="form-label">${t('applyDescriptionLabel')}</label>
                <textarea class="form-input" id="apply-description-input" rows="3" placeholder="${t('applyDescriptionPlaceholder')}"></textarea>
              </div>
              <div style="grid-column: 1 / -1;">
                <button type="submit" class="btn btn-primary w-full">${t('submitApplicationBtn')}</button>
              </div>
            </form>
          </div>
          ` : `
          <div class="card">
            ${submissions.length ? `
            <div class="table-container">
              <table class="table">
                <thead>
                  <tr>
                    <th>${t('recordsPlatformCol')}</th>
                    <th>${t('recordsTierCol')}</th>
                    <th>${t('recordsStatusCol')}</th>
                    <th>${t('recordsDateCol')}</th>
                  </tr>
                </thead>
                <tbody>
                  ${submissions.map(recordRow).join('')}
                </tbody>
              </table>
            </div>
            ` : `
            <div style="text-align:center; padding:2.5rem 1rem;">
              ${Icons.megaphone}
              <h3 style="font-size:1rem; font-weight:600; margin:0.75rem 0 0.35rem;">${t('recordsEmptyTitle')}</h3>
              <p class="muted" style="max-width:360px; margin:0 auto;">${t('recordsEmptyDesc')}</p>
            </div>
            `}
          </div>
          `}
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

      redeemcodes() {
        const codes = Object.keys(redeemCodesState);
        const statusOf = (entry) => {
          if (entry.disabled) return 'disabled';
          if (entry.expiresAt && entry.expiresAt < Date.now()) return 'expired';
          if (entry.usedBy.length >= entry.maxUses) return 'exhausted';
          return 'active';
        };
        const statusBadge = (status) => {
          if (status === 'active') return `<span class="badge badge-success">${t('adminCodeActive')}</span>`;
          if (status === 'expired') return `<span class="badge badge-danger">${t('adminCodeExpired')}</span>`;
          if (status === 'exhausted') return `<span class="badge badge-neutral">${t('adminCodeExhausted')}</span>`;
          return `<span class="badge badge-danger">${status}</span>`;
        };

        return `
          <div class="page-header">
            <h1 class="page-title">${t('adminRedeemCodesTitle')}</h1>
          </div>

          <div class="grid-2col" style="align-items:flex-start; margin-bottom:1.5rem;">
            <div class="card">
              <h3 style="font-size:1rem; font-weight:600; margin-bottom:1rem;">${t('adminGenerateCodeTitle')}</h3>
              <form id="admin-generate-code-form" class="form-grid">
                <div class="form-group">
                  <label class="form-label">${t('adminHoursLabel')}</label>
                  <input type="number" min="1" step="1" class="form-input" id="admin-code-hours-input" value="24" required />
                </div>
                <div class="form-group">
                  <label class="form-label">${t('adminMaxUsesLabel')}</label>
                  <input type="number" min="1" step="1" class="form-input" id="admin-code-maxuses-input" value="1" required />
                </div>
                <div class="form-group" style="grid-column: 1 / -1;">
                  <label class="form-label">${t('adminExpiresInDaysLabel')}</label>
                  <input type="number" min="0" step="1" class="form-input" id="admin-code-expiresdays-input" placeholder="0 = never" />
                </div>
                <div style="grid-column: 1 / -1;">
                  <button type="submit" class="btn btn-primary">${t('adminGenerateBtn')}</button>
                </div>
              </form>
            </div>
          </div>

          <div class="card">
            <h3 style="font-size:1rem; font-weight:600; margin-bottom:1rem;">${t('adminExistingCodesTitle')}</h3>
            <div class="table-container">
              <table class="table">
                <thead>
                  <tr>
                    <th>${t('adminCodeCol')}</th>
                    <th>${t('adminHoursCol')}</th>
                    <th>${t('adminUsesCol')}</th>
                    <th>${t('adminExpiresCol')}</th>
                    <th>${t('adminStatusCol')}</th>
                    <th>${t('actions')}</th>
                  </tr>
                </thead>
                <tbody>
                  ${codes.length ? codes.map(code => {
                    const entry = redeemCodesState[code];
                    const status = statusOf(entry);
                    return `
                    <tr>
                      <td style="font-family:monospace; font-weight:600;">${code}</td>
                      <td>${entry.hours}</td>
                      <td>${entry.usedBy.length} / ${entry.maxUses}</td>
                      <td>${entry.expiresAt ? new Date(entry.expiresAt).toLocaleDateString() : '—'}</td>
                      <td>${statusBadge(status)}</td>
                      <td><button class="btn btn-secondary btn-sm" data-copy-code="${code}">${t('adminCopyCodeBtn')}</button></td>
                    </tr>`;
                  }).join('') : `<tr><td colspan="6" style="text-align:center; color:var(--text-muted); padding:2rem;">${t('adminNoCodesYet')}</td></tr>`}
                </tbody>
              </table>
            </div>
          </div>
        `;
      },

      promotionreview() {
        const filter = adminPromoUiState.filter;
        const all = getAllPromotionSubmissionsLocal();
        const submissions = filter === 'all' ? all : all.filter(s => s.status === filter);

        const platformLabel = (p) => t('promoPlatform' + p.charAt(0).toUpperCase() + p.slice(1));
        const statusBadgeClass = (status) => status === 'approved' ? 'badge-success' : status === 'rejected' ? 'badge-danger' : 'badge-neutral';
        const statusLabel = (status) => t('status' + status.charAt(0).toUpperCase() + status.slice(1));
        const tierOf = (tierId) => PROMOTION_REWARD_TIERS.find(x => x.id === tierId);

        const filterTabs = [
          { id: 'all', key: 'adminPromoFilterAll' },
          { id: 'pending', key: 'statusPending' },
          { id: 'approved', key: 'statusApproved' },
          { id: 'rejected', key: 'statusRejected' }
        ];

        const row = (sub) => {
          const tier = tierOf(sub.tierId);
          const rewardLabel = tier ? t(tier.rewardKey) : sub.tierId;
          const actions = [];
          if (sub.status === 'pending') {
            actions.push(`<button class="btn btn-secondary btn-sm" data-promo-approve="${sub.id}">${t('adminApproveBtn')}</button>`);
            actions.push(`<button class="btn btn-danger btn-sm" data-promo-reject="${sub.id}">${t('adminRejectBtn')}</button>`);
          } else if (sub.status === 'approved' && tier && tier.type === 'cash') {
            actions.push(sub.cashPending
              ? `<button class="btn btn-primary btn-sm" data-promo-markpaid="${sub.id}">${t('adminMarkPaidBtn')}</button><span class="badge badge-warning" style="margin-left:0.4rem;">${t('adminCashPendingBadge')}</span>`
              : `<span class="badge badge-success">${t('adminCashPaidBadge')}</span>`);
          }
          return `
            <tr>
              <td>${sub.userName}</td>
              <td>${platformLabel(sub.platform)} ${sub.postUrl ? `<a href="${sub.postUrl}" target="_blank" rel="noopener" style="font-size:0.78rem; color:var(--primary); margin-left:0.3rem;">${t('adminViewPostLink')}</a>` : ''}</td>
              <td>${sub.likes}</td>
              <td><strong style="color:${tier && tier.type === 'cash' ? 'var(--warning)' : 'var(--primary)'};">${rewardLabel}</strong></td>
              <td style="max-width:260px; font-size:0.82rem; color:var(--text-muted);">${(sub.description || '').slice(0, 140)}${(sub.description || '').length > 140 ? '…' : ''}</td>
              <td style="font-size:0.8rem; color:var(--text-muted); font-family:monospace;">${sub.wechatId || '—'}</td>
              <td><span class="badge ${statusBadgeClass(sub.status)}">${statusLabel(sub.status)}</span></td>
              <td style="font-size:0.8rem; color:var(--text-muted);">${new Date(sub.createdAt).toLocaleDateString(state.language === 'zh' ? 'zh-CN' : 'en-US')}</td>
              <td style="white-space:nowrap;">${actions.join(' ') || '—'}</td>
            </tr>`;
        };

        return `
          <div class="page-header">
            <div>
              <h1 class="page-title">${t('adminPromoReviewTitle')}</h1>
              <p style="color:var(--text-muted); font-size:0.9rem; max-width:640px;">${t('adminPromoReviewDesc')}</p>
            </div>
          </div>

          <div class="rewrite-tabbar" style="margin-bottom:1.25rem;">
            ${filterTabs.map(f => `<button type="button" class="rewrite-tab ${filter === f.id ? 'active' : ''}" data-promo-filter="${f.id}">${t(f.key)}</button>`).join('')}
          </div>

          <div class="card">
            <div class="table-container">
              <table class="table">
                <thead>
                  <tr>
                    <th>${t('adminPromoUserCol')}</th>
                    <th>${t('adminPromoPlatformCol')}</th>
                    <th>${t('adminPromoLikesCol')}</th>
                    <th>${t('adminPromoTierCol')}</th>
                    <th>${t('adminPromoDescCol')}</th>
                    <th>${t('adminPromoScreenshotCol')}</th>
                    <th>${t('adminPromoStatusCol')}</th>
                    <th>${t('adminPromoSubmittedCol')}</th>
                    <th>${t('actions')}</th>
                  </tr>
                </thead>
                <tbody>
                  ${submissions.length ? submissions.map(row).join('') : `<tr><td colspan="9" style="text-align:center; color:var(--text-muted); padding:2rem;">${t('adminNoPromoSubmissions')}</td></tr>`}
                </tbody>
              </table>
            </div>
          </div>
        `;
      },

      plansettings() {
        const plans = MEMBERSHIP_PLANS;
        return `
          <div class="page-header">
            <div>
              <h1 class="page-title">${t('adminPlanSettingsTitle')}</h1>
              <p style="color:var(--text-muted); font-size:0.9rem; max-width:640px;">${t('adminPlanSettingsDesc')}</p>
            </div>
          </div>

          <div class="card">
            <form id="admin-plan-settings-form">
              <div class="table-container">
                <table class="table">
                  <thead>
                    <tr>
                      <th>${t('adminPlanCol')}</th>
                      <th>${t('adminPlanPriceCol')}</th>
                      <th>${t('adminPlanOriginalCol')}</th>
                      <th>${t('adminPlanHotCol')}</th>
                      <th>${t('adminPlanBestCol')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${plans.map(p => `
                      <tr>
                        <td><strong>${t(p.labelKey)}</strong></td>
                        <td><input type="number" step="0.01" min="0" class="form-input" style="width:110px;" data-plan-price="${p.id}" value="${p.price}" /></td>
                        <td><input type="number" step="0.01" min="0" class="form-input" style="width:110px;" data-plan-original="${p.id}" value="${p.original}" /></td>
                        <td><input type="checkbox" data-plan-hot="${p.id}" ${p.hot ? 'checked' : ''} /></td>
                        <td><input type="checkbox" data-plan-best="${p.id}" ${p.best ? 'checked' : ''} /></td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
              <div style="display:flex; gap:0.75rem; margin-top:1.25rem;">
                <button type="submit" class="btn btn-primary">${t('adminPlanSaveBtn')}</button>
                <button type="button" class="btn btn-secondary" id="admin-plan-reset-btn">${t('adminPlanResetBtn')}</button>
              </div>
            </form>
          </div>
        `;
      },

      quotalimits() {
        const windows = QUOTA_WINDOWS;
        return `
          <div class="page-header">
            <div>
              <h1 class="page-title">${t('adminQuotaLimitsTitle')}</h1>
              <p style="color:var(--text-muted); font-size:0.9rem; max-width:640px;">${t('adminQuotaLimitsDesc')}</p>
            </div>
          </div>

          <div class="card" style="max-width:560px;">
            <form id="admin-quota-limits-form">
              <div class="table-container">
                <table class="table">
                  <thead>
                    <tr><th>${t('adminQuotaWindowCol')}</th><th>${t('adminQuotaLimitCol')}</th></tr>
                  </thead>
                  <tbody>
                    ${windows.map(w => `
                      <tr>
                        <td><strong>${t(w.labelKey)}</strong></td>
                        <td><input type="number" min="1" step="1000" class="form-input" data-quota-limit="${w.id}" value="${w.limit}" /></td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
              <div style="display:flex; gap:0.75rem; margin-top:1.25rem;">
                <button type="submit" class="btn btn-primary">${t('adminQuotaSaveBtn')}</button>
                <button type="button" class="btn btn-secondary" id="admin-quota-reset-btn">${t('adminQuotaResetBtn')}</button>
              </div>
            </form>
          </div>
        `;
      },

      oldaccounts() {
        const accounts = oldAccountsLocal;
        return `
          <div class="page-header">
            <div>
              <h1 class="page-title">${t('adminOldAccountsTitle')}</h1>
              <p style="color:var(--text-muted); font-size:0.9rem; max-width:640px;">${t('adminOldAccountsDesc')}</p>
            </div>
          </div>

          <div class="grid-2col" style="align-items:flex-start; margin-bottom:1.5rem;">
            <div class="card">
              <h3 style="font-size:1rem; font-weight:600; margin-bottom:1rem;">${t('adminAddOldAccountTitle')}</h3>
              <form id="admin-add-old-account-form" class="form-grid">
                <div class="form-group" style="grid-column: 1 / -1;">
                  <label class="form-label">${t('adminOldIdentifierLabel')}</label>
                  <input type="text" class="form-input" id="admin-old-identifier-input" required />
                </div>
                <div class="form-group">
                  <label class="form-label">${t('adminOldPasswordLabel')}</label>
                  <input type="text" class="form-input" id="admin-old-password-input" required />
                </div>
                <div class="form-group">
                  <label class="form-label">${t('adminOldHoursLabel')}</label>
                  <input type="number" min="0" step="1" class="form-input" id="admin-old-hours-input" value="24" required />
                </div>
                <div style="grid-column: 1 / -1;">
                  <button type="submit" class="btn btn-primary">${t('adminAddOldAccountBtn')}</button>
                </div>
              </form>
            </div>
          </div>

          <div class="card">
            <h3 style="font-size:1rem; font-weight:600; margin-bottom:1rem;">${t('adminOldAccountsExistingTitle')}</h3>
            <div class="table-container">
              <table class="table">
                <thead>
                  <tr>
                    <th>${t('adminOldIdentifierCol')}</th>
                    <th>${t('adminOldHoursCol')}</th>
                    <th>${t('adminOldMigratedCol')}</th>
                  </tr>
                </thead>
                <tbody>
                  ${accounts.length ? accounts.map(a => `
                    <tr>
                      <td style="font-family:monospace;">${a.identifier}</td>
                      <td>${a.hoursRemaining}</td>
                      <td><span class="badge ${a.migrated ? 'badge-success' : 'badge-neutral'}">${a.migrated ? t('adminOldMigratedYes') : t('adminOldMigratedNo')}</span></td>
                    </tr>
                  `).join('') : `<tr><td colspan="3" style="text-align:center; color:var(--text-muted); padding:2rem;">${t('adminNoOldAccounts')}</td></tr>`}
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
        // 'all' | 'included' | 'excluded' — filters rows by whether
        // references/bibliography were excluded from scoring. Only
        // meaningful for scans that came from an upload tool (ai-report /
        // plagiarism-report); rewrite-tool scans just have `excludeReferences
        // === undefined` and always pass this filter.
        const filterCitations = state.reportsFilterCitations || 'all';
        const rows = state.scans
          .filter(s => accessibleToolIds.includes(s.toolId))
          .filter(s => filterTool === 'all' || s.toolId === filterTool)
          .filter(s => {
            if (filterCitations === 'all' || s.excludeReferences === undefined) return true;
            return filterCitations === 'excluded' ? s.excludeReferences === true : s.excludeReferences === false;
          });

        const toolOptions = state.tools.filter(tool => accessibleToolIds.includes(tool.id));

        return `
          <div class="page-header">
            <div>
              <h1 class="page-title">${t('reportsTitle')}</h1>
              <p style="color:var(--text-muted); font-size:0.9rem;">${t('reportsDesc')}</p>
            </div>
          </div>

          <div class="reports-toolbar">
            <div class="reports-filter-row" id="reports-tool-filter" role="group">
              <button type="button" class="report-filter-chip ${filterTool === 'all' ? 'active' : ''}" data-value="all">${Icons.dashboard} <span>${t('allTools')}</span></button>
              ${toolOptions.map(tool => `<button type="button" class="report-filter-chip ${filterTool === tool.id ? 'active' : ''}" data-value="${tool.id}">${iconFor(tool)} <span>${tool.name}</span></button>`).join('')}
            </div>
            <div class="reports-controls-row">
              <select id="reports-citations-filter" class="form-select">
                <option value="all" ${filterCitations === 'all' ? 'selected' : ''}>${t('citationsAll')}</option>
                <option value="included" ${filterCitations === 'included' ? 'selected' : ''}>${t('citationsIncluded')}</option>
                <option value="excluded" ${filterCitations === 'excluded' ? 'selected' : ''}>${t('citationsExcluded')}</option>
              </select>
              <div class="dropdown">
                <button class="btn btn-secondary" id="reports-download-btn">
                  ${Icons.download} <span>${t('downloadMenuLabel')}</span> ${Icons.chevronDown}
                </button>
                <div class="dropdown-menu" id="reports-download-menu">
                  <a href="#" class="dropdown-item" id="reports-export-pdf">${Icons.reports} ${t('exportPdf')}</a>
                  <a href="#" class="dropdown-item" id="reports-export-csv">${Icons.download} ${t('exportCsv')}</a>
                </div>
              </div>
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
        // the WeChat overlay instead of a dead click. "redeem" and
        // "migration" are special — both are popups now, not pages (see
        // Events.openRedeemCodeModal / Events.openMigrationModal).
        document.querySelectorAll('[data-route]').forEach(el => {
          el.onclick = (e) => {
            e.preventDefault();
            closeMobileSidebar();
            const route = el.getAttribute('data-route');
            if (route === 'redeem') {
              Events.openRedeemCodeModal();
            } else if (route === 'migration') {
              Events.openMigrationModal();
            } else if (el.getAttribute('data-gated') === 'true') {
              Router.requireAuth(route);
            } else {
              Router.navigate(route);
            }
          };
        });

        // "Start Rewriting" sidebar dropdown — was missing on the home
        // screen (only bound in bindGlobalEvents for the logged-in app
        // shell), so the header did nothing when clicked here. Toggles the
        // DOM directly (no full re-render) so the rest of the home page
        // (hero carousel, guide articles, etc.) doesn't flash/reload.
        document.querySelectorAll('[data-nav-group-toggle]').forEach(header => {
          header.onclick = (e) => {
            e.preventDefault();
            sidebarRewriteExpanded = !sidebarRewriteExpanded;
            const group = header.closest('.nav-group');
            if (group) group.classList.toggle('expanded', sidebarRewriteExpanded);
            header.setAttribute('aria-expanded', String(sidebarRewriteExpanded));
          };
        });


        // Quota hover card (see bindQuotaHoverTrigger for the shared logic).
        bindQuotaHoverTrigger();

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
          document.querySelectorAll('.dropdown-menu.show').forEach(m => m.classList.remove('show'));
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

        const membershipBadgeBtn = document.getElementById('membership-badge-btn');
        if (membershipBadgeBtn) {
          membershipBadgeBtn.onclick = (e) => {
            e.preventDefault();
            Router.requireAuth('recharge');
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
            const route = link.getAttribute('data-route');
            if (route === 'redeem') {
              Events.openRedeemCodeModal();
            } else if (route === 'migration') {
              Events.openMigrationModal();
            } else {
              Router.navigate(route);
            }
          };
        });

        // "Start Rewriting" sidebar dropdown — previously a dead header
        // (cursor:default, no handler) that never expanded/collapsed.
        // Toggles the DOM directly (no full re-render) so the rest of the
        // page content doesn't flash/reload on every open/close.
        document.querySelectorAll('[data-nav-group-toggle]').forEach(header => {
          header.onclick = (e) => {
            e.preventDefault();
            sidebarRewriteExpanded = !sidebarRewriteExpanded;
            const group = header.closest('.nav-group');
            if (group) group.classList.toggle('expanded', sidebarRewriteExpanded);
            header.setAttribute('aria-expanded', String(sidebarRewriteExpanded));
          };
        });

        // Quota hover card (see bindQuotaHoverTrigger for the shared logic).
        bindQuotaHoverTrigger();

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
          // Generic: closes ANY open .dropdown-menu (profile, notifications,
          // reports "Download" menu, etc.) on an outside click.
          document.querySelectorAll('.dropdown-menu.show').forEach(m => m.classList.remove('show'));
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

        const membershipBadgeBtn = document.getElementById('membership-badge-btn');
        if (membershipBadgeBtn) {
          membershipBadgeBtn.onclick = (e) => {
            e.preventDefault();
            closeMobileSidebar();
            Router.navigate('recharge');
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
        if (route === 'access') {
          const addBtn = document.getElementById('add-user-btn');
          if (addBtn) {
            addBtn.onclick = () => this.openAddUserModal();
          }
          return;
        }

        if (route === 'redeemcodes') {
          const form = document.getElementById('admin-generate-code-form');
          if (form) {
            form.onsubmit = (e) => {
              e.preventDefault();
              const hours = document.getElementById('admin-code-hours-input').value;
              const maxUses = document.getElementById('admin-code-maxuses-input').value;
              const expiresInDays = document.getElementById('admin-code-expiresdays-input').value;
              const code = generateRedeemCode(hours, maxUses, expiresInDays || null);
              if (isSupabaseConfigured()) {
                DataLayer.adminCreateRedeemCode({ code, hours: Number(hours), maxUses: Number(maxUses), expiresInDays: expiresInDays || null }).catch(() => {});
              }
              AuditLog.log('Redeem code generated', `${code} · ${hours}h · max ${maxUses} uses`);
              Toast.show(`${t('adminCodeGeneratedToast')}: ${code}`, 'success');
              AdminPanel.navigate('redeemcodes');
            };
          }

          document.querySelectorAll('[data-copy-code]').forEach(btn => {
            btn.onclick = () => {
              navigator.clipboard.writeText(btn.getAttribute('data-copy-code'));
              Toast.show(t('copiedToast'), 'success');
            };
          });
          return;
        }

        if (route === 'promotionreview') {
          document.querySelectorAll('[data-promo-filter]').forEach(btn => {
            btn.onclick = () => {
              adminPromoUiState.filter = btn.getAttribute('data-promo-filter');
              AdminPanel.navigate('promotionreview');
            };
          });
          document.querySelectorAll('[data-promo-approve]').forEach(btn => {
            btn.onclick = () => {
              const id = btn.getAttribute('data-promo-approve');
              const result = reviewPromotionSubmission(id, 'approved');
              if (result.ok) {
                AuditLog.log('Promotion submission approved', id);
                Toast.show(t('adminPromoApprovedToast'), 'success');
              }
              AdminPanel.navigate('promotionreview');
            };
          });
          document.querySelectorAll('[data-promo-reject]').forEach(btn => {
            btn.onclick = () => {
              const id = btn.getAttribute('data-promo-reject');
              const result = reviewPromotionSubmission(id, 'rejected');
              if (result.ok) {
                AuditLog.log('Promotion submission rejected', id);
                Toast.show(t('adminPromoRejectedToast'), 'success');
              }
              AdminPanel.navigate('promotionreview');
            };
          });
          document.querySelectorAll('[data-promo-markpaid]').forEach(btn => {
            btn.onclick = () => {
              const id = btn.getAttribute('data-promo-markpaid');
              if (markPromotionCashPaid(id)) {
                AuditLog.log('Promotion cash reward paid', id);
                Toast.show(t('adminPromoPaidToast'), 'success');
              }
              AdminPanel.navigate('promotionreview');
            };
          });
          return;
        }

        if (route === 'plansettings') {
          const form = document.getElementById('admin-plan-settings-form');
          if (form) {
            form.onsubmit = (e) => {
              e.preventDefault();
              MEMBERSHIP_PLANS_DEFAULT.forEach(p => {
                const priceEl = form.querySelector(`[data-plan-price="${p.id}"]`);
                const originalEl = form.querySelector(`[data-plan-original="${p.id}"]`);
                const hotEl = form.querySelector(`[data-plan-hot="${p.id}"]`);
                const bestEl = form.querySelector(`[data-plan-best="${p.id}"]`);
                planOverrides[p.id] = {
                  price: Number(priceEl.value) || p.price,
                  original: Number(originalEl.value) || p.original,
                  hot: !!hotEl.checked,
                  best: !!bestEl.checked
                };
              });
              persistPlanOverrides();
              refreshMembershipPlans();
              AuditLog.log('Recharge plan settings updated', '');
              Toast.show(t('adminPlanSettingsSaved'), 'success');
              AdminPanel.navigate('plansettings');
            };
          }
          const resetBtn = document.getElementById('admin-plan-reset-btn');
          if (resetBtn) {
            resetBtn.onclick = () => {
              planOverrides = {};
              persistPlanOverrides();
              refreshMembershipPlans();
              Toast.show(t('adminPlanSettingsSaved'), 'success');
              AdminPanel.navigate('plansettings');
            };
          }
          return;
        }

        if (route === 'quotalimits') {
          const form = document.getElementById('admin-quota-limits-form');
          if (form) {
            form.onsubmit = (e) => {
              e.preventDefault();
              QUOTA_WINDOWS_DEFAULT.forEach(w => {
                const input = form.querySelector(`[data-quota-limit="${w.id}"]`);
                const val = Number(input.value);
                if (val > 0) quotaLimitOverrides[w.id] = val;
              });
              persistQuotaLimitOverrides();
              refreshQuotaWindows();
              AuditLog.log('Quota limits updated', '');
              Toast.show(t('adminQuotaLimitsSaved'), 'success');
              AdminPanel.navigate('quotalimits');
            };
          }
          const resetBtn = document.getElementById('admin-quota-reset-btn');
          if (resetBtn) {
            resetBtn.onclick = () => {
              quotaLimitOverrides = {};
              persistQuotaLimitOverrides();
              refreshQuotaWindows();
              Toast.show(t('adminQuotaLimitsSaved'), 'success');
              AdminPanel.navigate('quotalimits');
            };
          }
          return;
        }

        if (route === 'oldaccounts') {
          const form = document.getElementById('admin-add-old-account-form');
          if (form) {
            form.onsubmit = (e) => {
              e.preventDefault();
              const identifier = document.getElementById('admin-old-identifier-input').value;
              const password = document.getElementById('admin-old-password-input').value;
              const hours = document.getElementById('admin-old-hours-input').value;
              const entry = addOldAccountLocal(identifier, password, hours);
              if (entry) {
                AuditLog.log('Old account added', `${entry.identifier} · ${entry.hoursRemaining}h`);
                Toast.show(t('adminOldAccountAddedToast'), 'success');
              }
              AdminPanel.navigate('oldaccounts');
            };
          }
          return;
        }

        if (route === 'promotion') {
          document.querySelectorAll('[data-promo-tab]').forEach(btn => {
            btn.onclick = () => {
              promotionUiState.tab = btn.getAttribute('data-promo-tab');
              Router.navigate('promotion');
            };
          });

          // Platform chip row — same click-to-select pattern as the
          // rewrite-page platform chips, just scoped to this form.
          document.querySelectorAll('[data-apply-platform]').forEach(chip => {
            chip.onclick = () => {
              promotionUiState.platform = chip.getAttribute('data-apply-platform');
              document.querySelectorAll('[data-apply-platform]').forEach(c => c.classList.toggle('active', c === chip));
            };
          });

          const applyForm = document.getElementById('promotion-apply-form');
          if (applyForm) {
            applyForm.onsubmit = (e) => {
              e.preventDefault();
              const platform = promotionUiState.platform || PROMOTION_PLATFORMS[0];
              const categoryId = document.getElementById('apply-category-input').value;
              const postUrl = document.getElementById('apply-posturl-input').value.trim();
              const wechatId = document.getElementById('apply-wechatid-input').value.trim();
              const description = document.getElementById('apply-description-input').value.trim();
              if (!categoryId) {
                Toast.show(t('fillRequiredFields'), 'danger');
                return;
              }
              if (!postUrl || !wechatId) {
                Toast.show(t('fillRequiredFields'), 'danger');
                return;
              }
              const tier = PROMOTION_REWARD_TIERS.find(x => x.id === categoryId) || PROMOTION_REWARD_TIERS[0];
              submitPromotionApplication({ platform, likes: tier.minLikes, postUrl, wechatId, description });
              AuditLog.log('Promotion submission', `${platform} · ${t(tier.labelKey)}`);
              Toast.show(t('applicationSubmittedToast'), 'success');
              promotionUiState.tab = 'records';
              Router.navigate('promotion');
            };
          }
          return;
        }

        if (route === 'recharge') {
          const backBtn = document.getElementById('recharge-back-btn');
          if (backBtn) backBtn.onclick = () => Router.navigate('home');

          // Order Details "Redeem Code" link — same popup as the sidebar
          // nav item (Events.openRedeemCodeModal), but this button isn't a
          // .nav-item so the sidebar's delegated handler never caught it.
          document.querySelectorAll('[data-route="redeem"]').forEach(link => {
            link.onclick = (e) => {
              e.preventDefault();
              Events.openRedeemCodeModal();
            };
          });

          document.querySelectorAll('.plan-card[data-plan-id]').forEach(card => {
            card.onclick = () => RechargeCheckout.selectPlan(card.getAttribute('data-plan-id'));
          });

          document.querySelectorAll('.pay-method-btn[data-method]').forEach(btn => {
            btn.onclick = () => RechargeCheckout.selectMethod(btn.getAttribute('data-method'));
          });

          const simulateBtn = document.getElementById('recharge-simulate-btn');
          if (simulateBtn) simulateBtn.onclick = () => RechargeCheckout.confirm();

          if (isPaymentGatewayConfigured() && !RechargeCheckout.confirmed) RechargeCheckout.mountDemoQr();
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

        if (route === 'ranking') {
          this.bindRankingEvents();
          return;
        }

        const tool = state.tools.find(x => x.id === route);
        if (tool) this.bindToolEvents(tool);
      },

      bindRankingEvents() {
        document.querySelectorAll('[data-ranking-filter]').forEach(group => {
          const key = group.getAttribute('data-ranking-filter');
          group.querySelectorAll('.ranking-pill').forEach(pill => {
            pill.onclick = () => {
              rankingUiState[key] = pill.getAttribute('data-value');
              Router.navigate('ranking');
            };
          });
        });
        const platformSel = document.getElementById('ranking-platform-select');
        if (platformSel) {
          platformSel.onchange = () => {
            rankingUiState.platform = platformSel.value;
            Router.navigate('ranking');
          };
        }
        this.renderModelRankingChart();
      },

      bindReportsEvents() {
        const filterGroup = document.getElementById('reports-tool-filter');
        if (filterGroup) {
          filterGroup.querySelectorAll('.report-filter-chip').forEach(chip => {
            chip.onclick = () => {
              state.reportsFilterTool = chip.getAttribute('data-value');
              Router.navigate('reports');
            };
          });
        }

        const citationsSel = document.getElementById('reports-citations-filter');
        if (citationsSel) {
          citationsSel.onchange = () => {
            state.reportsFilterCitations = citationsSel.value;
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

        // Single "Download" trigger + hover/click dropdown with the two
        // export actions (Download PDF, Export CSV), instead of two
        // separate buttons — the menu closes itself after either action.
        const downloadBtn = document.getElementById('reports-download-btn');
        const downloadMenu = document.getElementById('reports-download-menu');
        if (downloadBtn && downloadMenu) {
          downloadBtn.onclick = (e) => {
            e.stopPropagation();
            document.querySelectorAll('.dropdown-menu.show').forEach(m => { if (m !== downloadMenu) m.classList.remove('show'); });
            downloadMenu.classList.toggle('show');
          };
        }

        const exportCsvBtn = document.getElementById('reports-export-csv');
        if (exportCsvBtn) {
          exportCsvBtn.onclick = (e) => {
            e.preventDefault();
            if (downloadMenu) downloadMenu.classList.remove('show');
            const checked = rowChecks().filter(c => c.checked).map(c => c.getAttribute('data-id'));
            const rows = checked.length ? currentRows().filter(s => checked.includes(s.id)) : currentRows();
            if (!rows.length) { Toast.show(t('noReportsYet'), 'danger'); return; }
            this.exportReportsCsv(rows);
          };
        }

        const exportPdfBtn = document.getElementById('reports-export-pdf');
        if (exportPdfBtn) {
          exportPdfBtn.onclick = (e) => {
            e.preventDefault();
            if (downloadMenu) downloadMenu.classList.remove('show');
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
        // Report body renders in the language the report was generated in
        // (chosen on the upload page), not necessarily the app's own UI
        // language — modal chrome (title/close button) stays in the app's
        // current language since that's just UI, not report content.
        const rl = s.reportLang || state.language;
        let body = `
          <p><strong>${s.title}</strong></p>
          <p class="muted" style="margin-bottom:1rem;">${tool ? tool.name : s.toolId} · ${tLang(rl, 'submittedBy')}: ${s.submittedBy || '—'} · ${s.date}</p>
        `;
        if (s.breakdown) {
          body += `
            <h4 style="font-size:0.9rem; font-weight:600; margin-bottom:0.5rem;">${tLang(rl, 'matchBreakdown')}</h4>
            <table class="table" style="margin-bottom:1rem;">
              <tbody>
                <tr><td>${tLang(rl, 'internetSources')}</td><td>${s.breakdown.internet}%</td></tr>
                <tr><td>${tLang(rl, 'publications')}</td><td>${s.breakdown.publications}%</td></tr>
                <tr><td>${tLang(rl, 'studentPapers')}</td><td>${s.breakdown.student}%</td></tr>
              </tbody>
            </table>
            <p class="muted">${s.matches || 0} ${tLang(rl, 'matchesFound')}</p>
          `;
        } else if (typeof s.aiScoreBefore === 'number') {
          body += `
            <table class="table">
              <tbody>
                <tr><td>${tLang(rl, 'aiScoreBefore')}</td><td>${s.aiScoreBefore}%</td></tr>
                <tr><td>${tLang(rl, 'aiScoreAfter')}</td><td>${s.aiScoreAfter}%</td></tr>
                <tr><td>${tLang(rl, 'humanLikeScore')}</td><td>${s.humanLike}%</td></tr>
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
          () => { Router.navigate('recharge'); return true; },
          t('subscribeNow')
        );
      },

      // Redeem Code is a popup now (not its own page) — see recharge/
      // sidebar/migration buttons carrying data-route="redeem", intercepted
      // in bindGlobalEvents to call this instead of Router.navigate.
      openRedeemCodeModal() {
        Modal.open(
          t('redeemPageTitle'),
          `
            <p class="muted" style="margin-bottom:1rem;">${t('redeemPageSubtitle')}</p>
            <div class="form-group">
              <label class="form-label">${t('redeemCodeInputLabel')}</label>
              <input type="text" id="redeem-code-modal-input" class="form-input" placeholder="${t('redeemCodeInputPlaceholder')}" style="font-family:monospace; text-transform:uppercase;" autocomplete="off">
            </div>
            <p id="redeem-code-modal-feedback" class="muted" style="font-size:0.85rem; margin-top:0.5rem;"></p>
          `,
          () => {
            const input = document.getElementById('redeem-code-modal-input');
            const feedback = document.getElementById('redeem-code-modal-feedback');
            const code = input.value.trim();
            if (!code) { if (feedback) feedback.textContent = t('fillRequiredFields'); return false; }
            const confirmBtn = document.getElementById('modal-confirm-btn');
            if (confirmBtn) confirmBtn.disabled = true;
            redeemCode(code).then(res => {
              if (confirmBtn) confirmBtn.disabled = false;
              if (res && res.ok) {
                AuditLog.log('Redeem code used', `${code} · +${res.hours}h`);
                Toast.show(t('redeemSuccessToast').replace('{n}', res.hours), 'success');
                Modal.close();
                refreshScreen(state.currentRoute);
                return;
              }
              const reasonKey = {
                invalid: 'redeemInvalidCodeError',
                already_used: 'redeemAlreadyUsedError',
                expired: 'redeemExpiredError',
                exhausted: 'redeemMaxUsesError',
                empty: 'fillRequiredFields'
              }[(res && res.reason) || 'invalid'] || 'redeemInvalidCodeError';
              if (feedback) feedback.textContent = t(reasonKey);
              Toast.show(t(reasonKey), 'danger');
            });
            return false; // async — Modal.close() is called explicitly on success above
          },
          t('redeemSubmitBtn')
        );
      },

      // Migration is a "Welcome" popup now (not its own page) — see the
      // sidebar's "Migration" nav item, intercepted in bindHomeEvents /
      // bindPageEvents to call this instead of Router.navigate. Custom
      // two-column layout (not the generic Modal.open footer) since it
      // needs two independent CTAs side by side.
      openMigrationModal() {
        const authTab = migrationUiState.authTab;
        const container = document.getElementById('modal-container');
        container.innerHTML = `
          <div class="modal welcome-migration-modal">
            <div class="modal-header">
              <h3 style="font-weight:600; font-size:1.1rem; display:flex; align-items:center; gap:0.5rem;">
                <span aria-hidden="true">🎉</span> ${t('migrationWelcomeTitle')}
              </h3>
              <button onclick="Modal.close()">&times;</button>
            </div>
            <div class="modal-body">
              <div class="welcome-migration-cols">
                <div class="welcome-migration-col welcome-migration-col-highlight">
                  <div class="welcome-migration-icon welcome-migration-icon-pink">${Icons.migrate}</div>
                  <h4>${t('migrationReturningTitle')}</h4>
                  <p class="welcome-migration-sub">${t('migrationReturningSubtitle')}</p>
                  <div class="welcome-migration-col-body">
                    <div class="rewrite-pill-group" style="display:flex; width:100%; margin-bottom:1rem;">
                      <button type="button" class="rewrite-pill ${authTab === 'password' ? 'active' : ''}" data-migration-auth="password" style="flex:1;">${Icons.lock} ${t('migrationTabPassword')}</button>
                      <button type="button" class="rewrite-pill ${authTab === 'sms' ? 'active' : ''}" data-migration-auth="sms" style="flex:1;">${Icons.megaphone} ${t('migrationTabSms')}</button>
                    </div>
                    <form id="migration-form">
                      <div class="form-group">
                        <label class="form-label">${t('migrationOldAccountLabel')}</label>
                        <input type="text" class="form-input" id="migration-old-account-input" placeholder="${t('migrationOldAccountPlaceholder')}" required />
                      </div>
                      ${authTab === 'password' ? `
                      <div class="form-group">
                        <label class="form-label">${t('migrationOldPasswordLabel')}</label>
                        <input type="password" class="form-input" id="migration-old-password-input" placeholder="${t('migrationOldPasswordPlaceholder')}" required />
                      </div>
                      ` : `
                      <div class="form-group">
                        <label class="form-label">${t('migrationSmsCodeLabel')}</label>
                        <div style="display:flex; gap:0.5rem;">
                          <input type="text" class="form-input" id="migration-sms-code-input" placeholder="${t('migrationSmsCodePlaceholder')}" maxlength="6" required />
                          <button type="button" class="btn btn-secondary btn-sm" id="migration-send-code-btn" style="white-space:nowrap;">${t('migrationSendCodeBtn')}</button>
                        </div>
                      </div>
                      `}
                      <p id="migration-form-feedback" class="muted" style="margin:0.35rem 0 0.85rem; font-size:0.8rem; text-align:left; min-height:1em;"></p>
                      <button type="submit" class="btn btn-primary w-full">${t('migrationVerifyBtn')}</button>
                    </form>
                  </div>
                </div>

                <div class="welcome-migration-divider"><span>${t('migrationOrDivider')}</span></div>

                <div class="welcome-migration-col">
                  <div class="welcome-migration-icon welcome-migration-icon-mint">${Icons.star}</div>
                  <h4>${t('migrationNewTitle')}</h4>
                  <p class="welcome-migration-sub">${t('migrationNewSubtitle')}</p>
                  <div class="welcome-migration-col-body welcome-migration-col-actions">
                    <button type="button" class="btn btn-secondary w-full" id="migration-modal-redeem-btn">${Icons.gift} ${t('migrationRedeemCta')}</button>
                    <button type="button" class="btn btn-primary w-full" id="migration-modal-start-btn">${t('migrationStartCta')}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
        container.classList.add('active');
        Events.bindMigrationModalEvents();
      },

      bindMigrationModalEvents() {
        document.querySelectorAll('[data-migration-auth]').forEach(btn => {
          btn.onclick = () => {
            migrationUiState.authTab = btn.getAttribute('data-migration-auth');
            Events.openMigrationModal();
          };
        });

        const sendCodeBtn = document.getElementById('migration-send-code-btn');
        if (sendCodeBtn) sendCodeBtn.onclick = () => Toast.show(t('migrationSmsSentToast'), 'success');

        const redeemBtn = document.getElementById('migration-modal-redeem-btn');
        if (redeemBtn) redeemBtn.onclick = () => Events.openRedeemCodeModal();

        const startBtn = document.getElementById('migration-modal-start-btn');
        if (startBtn) startBtn.onclick = () => { Modal.close(); Router.navigate('home'); };

        const form = document.getElementById('migration-form');
        const feedback = document.getElementById('migration-form-feedback');
        if (form) {
          form.onsubmit = async (e) => {
            e.preventDefault();
            const oldAccount = document.getElementById('migration-old-account-input').value.trim();
            const authTab = migrationUiState.authTab;
            const secret = authTab === 'password'
              ? (document.getElementById('migration-old-password-input') || {}).value
              : (document.getElementById('migration-sms-code-input') || {}).value;
            if (!oldAccount || !secret) {
              if (feedback) feedback.textContent = t('migrationMissingFieldsError');
              return;
            }
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) submitBtn.disabled = true;
            const res = await migrateOldAccount(oldAccount, secret);
            if (submitBtn) submitBtn.disabled = false;
            if (res && res.ok) {
              AuditLog.log('Account migrated', `${oldAccount} · +${res.hours}h`);
              Toast.show(t('migrationSuccessToast').replace('{n}', res.hours), 'success');
              Modal.close();
              Router.navigate('recharge');
              return;
            }
            const reasonKey = {
              not_found: 'migrationNotFoundError',
              bad_password: 'migrationBadPasswordError',
              already_migrated: 'migrationAlreadyMigratedError',
              missing_fields: 'migrationMissingFieldsError'
            }[(res && res.reason) || 'not_found'] || 'migrationNotFoundError';
            if (feedback) feedback.textContent = t(reasonKey);
            Toast.show(t(reasonKey), 'danger');
          };
        }
      },

      bindToolEvents(tool) {
        if (tool.type === 'upload') {
          const form = document.getElementById('tool-upload-form');
          if (!form) return;
          const ui = getUploadUi(tool.id);
          const excludeRefsEl = document.getElementById('doc-exclude-refs');
          if (excludeRefsEl) excludeRefsEl.onchange = () => { getUploadUi(tool.id).excludeReferences = excludeRefsEl.checked; };

          // Language pill sets the report/document's language only — the
          // app's own UI language (state.language) is untouched, so the
          // sidebar/nav/etc. stay exactly as they were.
          const langGroup = document.getElementById('upload-lang-group');
          if (langGroup) {
            langGroup.querySelectorAll('[data-upload-lang]').forEach(btn => {
              btn.onclick = () => {
                const lang = btn.getAttribute('data-upload-lang');
                if (lang === ui.lang) return;
                ui.lang = lang;
                Router.navigate(state.currentRoute);
              };
            });
          }

          // Model selection is now a chip group (single-select, same pattern
          // as the Reports tool filter) instead of a <select> — clicking a
          // chip sets it active and persists the choice per-tool.
          const modelGroup = document.getElementById('doc-model-group');
          if (modelGroup) {
            modelGroup.querySelectorAll('.report-filter-chip').forEach(chip => {
              chip.onclick = () => {
                modelGroup.querySelectorAll('.report-filter-chip').forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                getUploadUi(tool.id).model = chip.getAttribute('data-value');
              };
            });
          }

          // Dropzone: click-to-browse (native, via the <label for="doc-file">
          // wrapper) plus drag-and-drop, and it reflects the chosen file's
          // name back into the zone so there's a visible confirmation.
          const dropzone = document.getElementById('upload-dropzone');
          const fileInput = document.getElementById('doc-file');
          const dropzoneText = document.getElementById('upload-dropzone-text');
          const showFile = (file) => {
            if (dropzone) dropzone.classList.toggle('has-file', !!file);
            if (dropzoneText) dropzoneText.textContent = file ? file.name : t('dragDrop');
          };
          if (fileInput) fileInput.onchange = () => showFile(fileInput.files[0] || null);
          if (dropzone && fileInput) {
            ['dragenter', 'dragover'].forEach(evt => dropzone.addEventListener(evt, (e) => {
              e.preventDefault(); dropzone.classList.add('drag-active');
            }));
            ['dragleave', 'drop'].forEach(evt => dropzone.addEventListener(evt, (e) => {
              e.preventDefault(); dropzone.classList.remove('drag-active');
            }));
            dropzone.addEventListener('drop', (e) => {
              const file = e.dataTransfer && e.dataTransfer.files[0];
              if (file) { fileInput.files = e.dataTransfer.files; showFile(file); }
            });
          }

          form.onsubmit = async (e) => {
            e.preventDefault();
            const file = fileInput && fileInput.files[0];
            if (!file) { Toast.show(t('dragDrop'), 'danger'); return; }
            const title = file.name;
            if (!canUseTool(tool.id)) { this.showOutOfCreditsModal(tool); return; }
            const freshUi = getUploadUi(tool.id);
            const model = freshUi.model;
            const excludeReferences = excludeRefsEl ? excludeRefsEl.checked : freshUi.excludeReferences;
            try {
              const result = await ToolAPI.process(tool, { title, wordCount: null, model, excludeReferences });
              const newScan = {
                id: 'sc_' + Date.now(),
                title,
                toolId: tool.id,
                userId: state.user.id,
                submittedBy: state.user.name,
                wordCount: 0,
                model,
                excludeReferences,
                reportLang: freshUi.lang || 'zh',
                score: result.score,
                matches: result.matches || 0,
                breakdown: result.breakdown || null,
                status: 'completed',
                date: todayStr()
              };
              state.scans.unshift(newScan);
              const savedScan = await DataLayer.saveScan(newScan); // no-op until Supabase + Auth are set up
              spendCredit(savedScan && savedScan.id, tool.id);
              logQuotaUsage(400 * 5.5); // rough words->chars estimate for uploaded docs, word count no longer collected
              AuditLog.log('Scan submitted', `${tool.name} — "${title}" (${result.score})`);
              Notify.push(`"${title}" scan complete — score ${result.score}`, 'success', tool.id);
              Toast.show(t('docQueued'), 'success');
              // Results live on the History page now — no local "recent
              // scans" preview on this page, so send the person straight
              // there instead of re-rendering the same upload form.
              Router.navigate('reports');
            } catch (err) {
              if (err.message === 'NOT_CONNECTED') Toast.show(t('notConnectedToast'), 'danger');
              else Toast.show(t('genericError'), 'danger');
            }
          };
          return;
        }


        // text type — Start Rewriting sub-modes
        const ui = getRewriteUi(tool.id);
        const input = document.getElementById('tool-text-input');
        const output = document.getElementById('tool-text-output');
        const processBtn = document.getElementById('tool-text-process');
        const fileProcessBtn = document.getElementById('tool-file-process');
        const clearBtn = document.getElementById('tool-text-clear');
        const copyBtn = document.getElementById('tool-text-copy');
        const badge = document.getElementById('tool-text-badge');
        if (!processBtn) return;

        // "Recharge to unlock" CTA inside the locked-controls hint banner —
        // not a plain .nav-item so it isn't covered by the generic
        // [data-route] handler in bindGlobalEvents.
        const lockedCta = document.querySelector('.rewrite-locked-cta[data-route]');
        if (lockedCta) {
          lockedCta.onclick = (e) => {
            e.preventDefault();
            Router.navigate(lockedCta.getAttribute('data-route'));
          };
        }

        const charCounter = document.getElementById('rewrite-char-counter');
        const updateCharCounter = () => {
          if (charCounter) charCounter.textContent = `${input.value.length} ${t('rewriteCharsLabel')}`;
        };
        if (input) input.oninput = updateCharCounter;
        updateCharCounter();

        // Text Input / File Rewrite tabs — pure show/hide, no re-render, so
        // whatever's already typed isn't lost.
        document.querySelectorAll('[data-rewrite-tab]').forEach(btn => {
          btn.onclick = () => {
            const tab = btn.getAttribute('data-rewrite-tab');
            ui.inputTab = tab;
            document.querySelectorAll('[data-rewrite-tab]').forEach(b => b.classList.toggle('active', b === btn));
            document.getElementById('rewrite-text-panel').style.display = tab === 'text' ? '' : 'none';
            document.getElementById('rewrite-file-panel').style.display = tab === 'file' ? '' : 'none';
            const textActions = document.getElementById('rewrite-footer-text-actions');
            const fileActions = document.getElementById('rewrite-footer-file-actions');
            if (textActions) textActions.style.display = tab === 'text' ? '' : 'none';
            if (fileActions) fileActions.style.display = tab === 'file' ? '' : 'none';
          };
        });

        // Chinese / English input-language toggle.
        document.querySelectorAll('[data-rewrite-lang]').forEach(btn => {
          btn.onclick = () => {
            ui.inputLang = btn.getAttribute('data-rewrite-lang');
            document.querySelectorAll('[data-rewrite-lang]').forEach(b => b.classList.toggle('active', b === btn));
            if (input) input.placeholder = ui.inputLang === 'zh' ? '在此粘贴或输入中文文本…' : 'Paste or type your text here...';
          };
        });

        // Detection-platform selection (single-select chip row).
        document.querySelectorAll('[data-rewrite-platform]').forEach(chip => {
          chip.onclick = () => {
            ui.platform = chip.getAttribute('data-rewrite-platform');
            document.querySelectorAll('[data-rewrite-platform]').forEach(c => c.classList.toggle('active', c === chip));
          };
        });

        // Strength slider (Lower AI Rate + Dual Mode).
        const strengthSlider = document.getElementById('rewrite-strength-slider');
        const strengthValue = document.getElementById('rewrite-strength-value');
        if (strengthSlider) {
          strengthSlider.oninput = () => {
            ui.strength = parseInt(strengthSlider.value, 10);
            if (strengthValue) strengthValue.textContent = ui.strength;
          };
        }

        // Rewrite Mode dropdown (Lower Plagiarism + Dual Mode).
        const modeSelect = document.getElementById('rewrite-mode-select');
        if (modeSelect) {
          modeSelect.onchange = () => { ui.modeVersion = modeSelect.value; };
        }

        // Sample button — drops a short sample paragraph into the input so
        // a visitor can try the tool with one click.
        const sampleBtn = document.getElementById('rewrite-sample-btn');
        if (sampleBtn) {
          sampleBtn.onclick = () => {
            input.value = REWRITE_SAMPLE_TEXT[ui.inputLang] || REWRITE_SAMPLE_TEXT.zh;
            updateCharCounter();
          };
        }

        const runRewrite = async () => {
          if (!input.value.trim()) return;
          if (!canUseTool(tool.id)) { this.showOutOfCreditsModal(tool); return; }
          try {
            const result = await ToolAPI.process(tool, { text: input.value, platform: ui.platform, strength: ui.strength, mode: ui.modeVersion });
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
            logQuotaUsage(input.value.length);
            AuditLog.log('Text processed', `${tool.name} — AI score ${result.aiScoreBefore}% → ${result.aiScoreAfter}%`);
            Notify.push(`${tool.name} complete — AI score ${result.aiScoreBefore}% → ${result.aiScoreAfter}%`, 'success', tool.id);
            Toast.show(t('textProcessed'), 'success');
          } catch (err) {
            if (err.message === 'NOT_CONNECTED') Toast.show(t('notConnectedToast'), 'danger');
            else Toast.show(t('genericError'), 'danger');
          }
        };

        processBtn.onclick = runRewrite;
        if (fileProcessBtn) fileProcessBtn.onclick = runRewrite;

        clearBtn.onclick = () => {
          input.value = '';
          output.value = '';
          badge.classList.add('hidden');
          updateCharCounter();
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
      },

      // Model Ranking page's "Model Usage Trend" chart — bars for each
      // model's call volume plus a connecting line over the tops, same
      // shape as the reference design. Bars/labels rotate to fit however
      // many models are in the current filtered set.
      renderModelRankingChart() {
        const canvas = document.getElementById('modelRankingChart');
        if (!canvas) return;
        const models = JSON.parse(canvas.dataset.models || '[]');
        if (!models.length) return;

        const dpr = window.devicePixelRatio || 1;
        const cssWidth = canvas.clientWidth || canvas.parentElement.clientWidth;
        const cssHeight = 260;
        canvas.width = cssWidth * dpr;
        canvas.height = cssHeight * dpr;
        canvas.style.height = cssHeight + 'px';

        const ctx = canvas.getContext('2d');
        ctx.scale(dpr, dpr);
        ctx.clearRect(0, 0, cssWidth, cssHeight);

        const paddingLeft = 46;
        const paddingBottom = 46;
        const paddingTop = 10;
        const chartW = cssWidth - paddingLeft - 10;
        const chartH = cssHeight - paddingBottom - paddingTop;
        const maxVal = Math.max(1, ...models.map(m => m.calls));

        const rootStyles = getComputedStyle(document.documentElement);
        const colorBorder = rootStyles.getPropertyValue('--border').trim() || '#E5E7EB';
        const colorPrimary = rootStyles.getPropertyValue('--primary').trim() || '#EF4476';
        const colorMuted = rootStyles.getPropertyValue('--text-muted').trim() || '#6B7280';
        const barPalette = ['#6366F1', '#22C55E', '#F59E0B', '#EF4444', '#0EA5E9', '#A855F7', '#14B8A6', '#EC4899'];

        // Gridlines + y-axis labels
        ctx.strokeStyle = colorBorder;
        ctx.lineWidth = 1;
        ctx.fillStyle = colorMuted;
        ctx.font = '10px Inter, sans-serif';
        ctx.textAlign = 'right';
        for (let i = 0; i <= 4; i++) {
          const y = paddingTop + (chartH / 4) * i;
          ctx.beginPath();
          ctx.moveTo(paddingLeft, y);
          ctx.lineTo(paddingLeft + chartW, y);
          ctx.stroke();
          const val = Math.round(maxVal * (1 - i / 4));
          const label = val >= 10000 ? (val / 10000).toFixed(1) + 'w' : String(val);
          ctx.fillText(label, paddingLeft - 8, y + 3);
        }

        const n = models.length;
        const stepX = chartW / n;
        const barW = Math.max(2, stepX * 0.6);

        // Bars
        models.forEach((m, i) => {
          const x = paddingLeft + i * stepX + (stepX - barW) / 2;
          const barH = (m.calls / maxVal) * chartH;
          const y = paddingTop + chartH - barH;
          ctx.fillStyle = barPalette[i % barPalette.length];
          ctx.fillRect(x, y, barW, barH);
        });

        // Connecting line over the bar tops
        ctx.beginPath();
        ctx.strokeStyle = colorPrimary;
        ctx.lineWidth = 2;
        models.forEach((m, i) => {
          const x = paddingLeft + i * stepX + stepX / 2;
          const y = paddingTop + chartH - (m.calls / maxVal) * chartH;
          if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        });
        ctx.stroke();
        models.forEach((m, i) => {
          const x = paddingLeft + i * stepX + stepX / 2;
          const y = paddingTop + chartH - (m.calls / maxVal) * chartH;
          ctx.beginPath();
          ctx.arc(x, y, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = colorPrimary;
          ctx.fill();
        });

        // Rotated model-name labels along the x-axis — skip some if the
        // model count is high, so labels don't overlap into mush.
        const labelEvery = Math.max(1, Math.ceil(n / 24));
        ctx.fillStyle = colorMuted;
        ctx.font = '9px Inter, sans-serif';
        models.forEach((m, i) => {
          if (i % labelEvery !== 0) return;
          const x = paddingLeft + i * stepX + stepX / 2;
          const y = paddingTop + chartH + 10;
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(-Math.PI / 4);
          ctx.textAlign = 'right';
          const label = m.name.length > 14 ? m.name.slice(0, 13) + '…' : m.name;
          ctx.fillText(label, 0, 0);
          ctx.restore();
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
        <div class="boot-loader">
          <div class="boot-loader-card">
            <div class="boot-loader-logo">${(t('brandName') || 'Scanser').charAt(0)}</div>
            <div class="boot-loader-spinner"></div>
            <p class="boot-loader-text">${t('loadingLabel') || 'Loading...'}</p>
          </div>
        </div>
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
        { route: 'redeemcodes', icon: 'gift', labelEn: 'Redeem Codes', labelZh: '兑换码' },
        { route: 'plansettings', icon: 'dashboard', labelEn: 'Recharge Plans', labelZh: '充值套餐' },
        { route: 'quotalimits', icon: 'usage', labelEn: 'Quota Limits', labelZh: '配额限制' },
        { route: 'promotionreview', icon: 'megaphone', labelEn: 'Promotion Review', labelZh: '推广审核' },
        { route: 'oldaccounts', icon: 'migrate', labelEn: 'Old Accounts', labelZh: '旧账号迁移' },
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

      // Stash a `#ref=CODE` referral tag from the URL (if any) so it
      // survives the WeChat QR redirect/demo-login round trip — consumed
      // once by WeChatAuth.completeLogin, then cleared.
      const refMatch = location.hash.match(/ref=([A-Za-z0-9]+)/);
      if (refMatch) sessionStorage.setItem('scanser_pending_ref', refMatch[1]);

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
