export const handleError = (
  $target: HTMLDivElement,
  callback: (id: string) => void
) => {
  while ($target.firstChild) {
    $target.removeChild($target.firstChild);
  }
  const $img = document.createElement('img');
  $img.alt = 'error';
  $img.src = `${process.env.PUBLIC_URL}/img/error_image.jpg`;
  $img.addEventListener('click', () => callback('0'));
  $target.append($img);
};
