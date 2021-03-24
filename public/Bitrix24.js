let bitrix = (w, d, u) => {
    let s = d.createElement('script');
    s.async = true;
    s.src = u + '?' + (Date.now() / 180000 | 0);
    let h = d.getElementsByTagName('script')[0];
    h.parentNode.insertBefore(s, h);
}
bitrix(window, document, 'https://cdn-ru.bitrix24.ru/b4706443/crm/form/loader_8.js')