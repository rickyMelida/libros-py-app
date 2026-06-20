export interface SweetAlertModel{
	type: 'success' | 'error' | 'warning' | 'info' | 'question',
	message: string,
	title: string,
	event?: void
}