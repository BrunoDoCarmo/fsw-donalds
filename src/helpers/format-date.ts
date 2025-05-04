export function formatDate(date?: string | Date) {
    if (!date) return 'Data inválida'
    const d = new Date(date);
    return d.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    })
}

export function formatHour(hour?: string | Date) {
    if(!hour) return 'Hora inválida'
    const h = new Date(hour)
    return h.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit'
    })
} 