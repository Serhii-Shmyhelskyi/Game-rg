
let a = ['.block-1', '.block-2', '.block-3', '.block-4', '.block-5', '.block-6', '.block-7', '.block-8', '.block-9'];

for (let i = 0; i < a.length; i++) {
    document.querySelector(a[i]).onclick = () => {
        document.querySelector(a[i]).style.background = 'black';
    }
}

for (let i = 0; i < a.length; i++) {
    document.querySelector(a[i]).oncontextmenu = () => {
        document.querySelector(a[i]).style.background = 'green';
        return false;
    }
}