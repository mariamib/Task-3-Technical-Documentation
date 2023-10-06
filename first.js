const copy_text = (element)=>
{
    const parent = element.parentElement;
    const text = parent.innerText;
    const cleanedText = text.replace("Copy", '');
    navigator.clipboard.writeText(cleanedText);
    element.style.backgroundColor = '#000';
    element.style.color = '#D1D1DD';
    element.innerText="Copied";
}