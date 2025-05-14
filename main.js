$(document).ready(function () {
    if (document.cookie.indexOf("accepted_cookies=") < 0) {
        $('.cookie-overlay').removeClass('d-none').addClass('d-block');
    }

    $('.accept-cookies').on('click', function () {
        document.cookie = "accepted_cookies=yes;";
        $('.cookie-overlay').removeClass('d-block').addClass('d-none');
    });

    $('.close-cookies').on('click', function () {
        $('.cookie-overlay').removeClass('d-block').addClass('d-none');
    });

    $('.langs-btn, .currency-btn, .theme-btn').hover(function () {
        $(this).find('.langs-btn-content, .currency-btn-content, .theme-btn-content').toggle();
    });
});

function changeLang(newLang) {
    $.ajax({
        url: '/account/change_lang/',
        data: { lang: newLang },
        type: 'post',
        success: function () {
            location.href = "";
        }
    });
}

var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'violet',
    progressColor: 'purple',
    mediaControls: true
});
wavesurfer.load('');
wavesurfer.on('ready', wavesurfer.play.bind(wavesurfer):
