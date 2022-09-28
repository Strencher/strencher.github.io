import $ from './$.js';

export async function startDownload(src, filename) {
  try {
    const res = await fetch(src);
    const data = await res.text();
    $(`<a href="data:text/javascript;charset=utf-8,${encodeURIComponent(data)}" download="${filename}">`).click();
  } catch (error) {
    $('#text').textContent = 'Sorry, an error has occurred.';
    console.error(error);
  }
};
