$(document).ready(function() {
    $('#search').on('input', function() {
        const query = $(this).val().toLowerCase();
        $('.build').each(function() {
            const text = $(this).text().toLowerCase();
            $(this).toggle(text.includes(query));
        });
    });

    $('.build').on('click', function() {
        const propertyDetail = $(this).html();
        localStorage.setItem('propertyDetail', propertyDetail);
        window.location.href = '세부사항.html';
    });
});

function goToDetail(propertyId) {
    const propertyDetail = $(`.build[onclick="goToDetail('${propertyId}')"]`).html();
    localStorage.setItem('propertyDetail', propertyDetail);
    window.location.href = 'detail.html';
}