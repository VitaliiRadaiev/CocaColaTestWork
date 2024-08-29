@@include('./utils.js')
@@include('./scripts.js')

window.addEventListener("DOMContentLoaded", () => {
    if (isMobile()) {
        document.body.classList.add('mobile');
    }

    if (iOS()) {
        document.body.classList.add('mobile-ios');
    }

    if (isSafari()) {
        document.body.classList.add('safari');
    }


    initHandlerDocumentClick();
    replaceImageToInlineSvg('.img-svg');
    initSmoothScrollByAnchors();
    initAnchorsLinkOffset();
    initResponsiveReload(1024);
    initTabs();
    initInputMask();

    // ==== plugins =====================================================
    @@include('../../plugins/snowflakes/snowflakes.js')
    @@include('../../plugins/select/select.js')
    // ==== // plugins =====================================================

    // ==== components =====================================================
    @@include('../../components/buttons/buttons.js')
    // ==== // components =====================================================


    // ==== sections =====================================================
    @@include('../../sections/header/header.js')
    @@include('../../sections/full-page-screens/full-page-screens.js')
    // ==== // sections =====================================================


    document.body.classList.add('page-loaded');

    setTimeout(() => {
        document.body.classList.add('hide-loader');
    }, 400);
}); 
