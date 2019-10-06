function HideShowCodebox(elementID)
{
    var mHeight = document.getElementById(elementID);
    if(mHeight.style.maxHeight == '50px')
    {
        mHeight.style.maxHeight = '1000px';
    }
    else
    {
        mHeight.style.maxHeight = '50px';
    }
}