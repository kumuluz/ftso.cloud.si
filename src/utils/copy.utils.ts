
function clipboardFallback(content: string): void {
    const textArea = document.createElement("textarea");
    textArea.value = content;
    
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    
    document.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand("copy");
    } catch {
        console.error("Error copying content!");
    } finally {
        document.body.removeChild(textArea);
    }
}

export async function copyToClipboard(content: string): Promise<void> {
    if (!navigator.clipboard) {
        clipboardFallback(content);
        return;
    }
    await navigator.clipboard.writeText(content);
}
