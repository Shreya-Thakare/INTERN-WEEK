export interface Employee { id: number; name: string; email: string; department: string; position: string; salary: number; }
export type RiskLevel = 'Low' | 'Medium' | 'High';
export const formatEmployee = (employee: Employee): string => `${employee.name} (${employee.department})`;
