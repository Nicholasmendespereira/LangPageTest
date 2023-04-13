

export const formatShift = (status) => {
if(!status) return;
if(status === 'morning') return {label: 'Manhã'};
if(status === 'afternoon') return {label: 'Tarde'};
if(status === 'night') return {label: 'Noite'};
}
export const formatProcess = (status) => {
if(!status) return;
if(status === 'brush') return {label: 'Escova'};
if(status === 'cut') return {label: 'Corte'};
if(status === 'progressive') return {label: 'Progressiva'};
}