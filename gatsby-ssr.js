const React = require("react")

exports.onRenderBody = ({
    setHeadComponents,
    setPreBodyComponents,
    setBodyAttributes,
    setPostBodyComponents
}) => {
    setPreBodyComponents([
        <div id="preloader">
            {/* Optional: */}
            <div id="preloader-logo">
                <img src="/images/the.svg" id="the" />
                <img src="/images/testocentro.svg" id="testocentro" />
                <img src="/images/veroneser.svg" id="veroneser" />
            </div>
        </div>
    ])
    setBodyAttributes({
        className: "preloader_active"
    })
}
