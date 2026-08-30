document.addEventListener('DOMContentLoaded', () => {
    const tabItems = document.querySelectorAll('.tab-item');
    const tabContents = document.querySelectorAll('.tab-content');

    tabContents.forEach(content => {
        if (!content.classList.contains('active')) {
            content.style.display = 'none';
        }
    });

    tabItems.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.getAttribute('data-target');

            tabItems.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            tabContents.forEach(content => {
                content.style.display = 'none';
                content.classList.remove('active');
            });

            const targetContent = document.getElementById(targetId);
            targetContent.style.display = 'block';
            targetContent.classList.add('active');
        });
    });

    const colorSwatches = document.querySelectorAll('.color-swatch');
    colorSwatches.forEach(swatch => {
        swatch.addEventListener('click', () => {
            colorSwatches.forEach(s => s.classList.remove('selected'));
            swatch.classList.add('selected');
        });
    });

    const sizeOptions = document.querySelectorAll('.size-option');
    sizeOptions.forEach(option => {
        option.addEventListener('click', () => {
            sizeOptions.forEach(o => o.classList.remove('selected'));
            option.classList.add('selected');
        });
    });

    const quantityInput = document.querySelector('.quantity-input');
    document.querySelectorAll('.quantity-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            let val = parseInt(quantityInput.value);
            if (btn.dataset.action === 'plus') {
                quantityInput.value = val + 1;
            } else if (btn.dataset.action === 'minus' && val > 1) {
                quantityInput.value = val - 1;
            }
        });
    });

    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            faqItems.forEach(faq => {
                faq.classList.remove('active');
            });
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    const mainImg = document.querySelector('.main-image img');
    const thumbImages = document.querySelectorAll('.thumbnail-item img');
    const thumbContainers = document.querySelectorAll('.thumbnail-item');

    if (thumbImages.length >= 3) {
        mainImg.src = thumbImages[2].src;
        thumbContainers.forEach(c => c.style.borderColor = 'transparent');
        if (thumbContainers[2]) thumbContainers[2].style.borderColor = '#000';
    }

    thumbImages.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            mainImg.src = thumb.src;
            thumbContainers.forEach(c => c.style.borderColor = 'transparent');
            thumbContainers[index].style.borderColor = '#000';
        });
    });
});