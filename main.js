document.addEventListener('DOMContentLoaded', function () {
    const expandButton = document.querySelector('[data-action="expand-all"]');
    const collapseButton = document.querySelector('[data-action="collapse-all"]');
    const highlightButton = document.querySelector('[data-action="toggle-highlights"]');
    const raceCards = Array.from(document.querySelectorAll('.race-card'));
    const highlightCards = Array.from(document.querySelectorAll('.highlight-card'));
    let highlightOnly = false;

    if (expandButton) {
        expandButton.addEventListener('click', function () {
            raceCards.forEach(function (card) {
                card.open = true;
            });
        });
    }

    if (collapseButton) {
        collapseButton.addEventListener('click', function () {
            raceCards.forEach(function (card) {
                card.open = false;
            });
        });
    }

    if (highlightButton) {
        highlightButton.setAttribute('aria-pressed', 'false');

        highlightButton.addEventListener('click', function () {
            highlightOnly = !highlightOnly;
            highlightButton.classList.toggle('is-active', highlightOnly);
            highlightButton.setAttribute('aria-pressed', String(highlightOnly));
            highlightButton.textContent = highlightOnly ? 'Show all races' : 'Show PR and SR only';

            raceCards.forEach(function (card) {
                const shouldHide = highlightOnly && !highlightCards.includes(card);
                card.classList.toggle('is-hidden', shouldHide);
            });
        });
    }
});
