import DOMPurify from 'dompurify';

function transformText(text: string): string {
    const transformedText = machine(text);
    
    return transformedText;
}

function machine(text: string): string {
    
    const firstTransformation = text.replace(/\*\*(.+?)\*\*/g, '<span class="font-bold">$1</span>');
    const secondTransformation = firstTransformation.replace(/(?:\r\n|\r|\n|\u0085|\u2028|\u2029)/g, '<br/>');
    
    return DOMPurify.sanitize(secondTransformation);
}

function formatURL(text: string): string {
    if (!text.match(/^https?:\/\//)) {
        return text; 
    }

    try {
        const urlObj = new URL(text);
        return urlObj.pathname;
    } catch {
            const match = text.match(/^https?:\/\/[^\/]+(\/.*)?$/);
        return match?.[1] || text;
    }
}

export default { transformText, formatURL };