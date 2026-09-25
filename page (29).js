import Link from 'next/link';
import { fetchEmployees, money } from '../../lib/api';
import DeleteButton from './DeleteButton';

export default async function EmployeesPage() {
  let employees = [];
  let error = '';

  try {
    employees = await fetchEmployees();
  } catch (err) {
    error = err.message;
  }

  const avg =
    employees.length > 0
      ? employees.reduce((s, e) => s + Number(e.salary), 0) / employees.length
      : 0;

  return (
    <main>
      <div className="toolbar">
        <div>
          <h1>Employees</h1>
          <p className="sub">
            {employees.length} people
            {employees.length > 0 ? ` · avg ${money(avg)}` : ''}
          </p>
        </div>
        <Link href="/employees/create" className="btn btn-primary">
          + Create employee
        </Link>
      </div>

      {error && (
        <div className="error" style={{ marginBottom: '1rem' }}>
          {error}
          <div style={{ marginTop: '0.35rem', fontSize: '0.85rem' }}>
            Start API: <code>cd node-api && npm start</code>
          </div>
        </div>
      )}

      <div className="panel">
        {!error && employees.length === 0 && (
          <p className="muted">No employees yet. Create the first one.</p>
        )}
        {employees.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Department</th>
                <th>Position</th>
                <th>Salary</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((e) => (
                <tr key={e.id}>
                  <td>
                    <Link href={`/employees/${e.id}`}>
                      <strong>{e.name}</strong>
                    </Link>
                    <div style={{ fontSize: '0.75rem', color: 'var(--dim)' }}>{e.email}</div>
                  </td>
                  <td>{e.department}</td>
                  <td>{e.position}</td>
                  <td>{money(e.salary)}</td>
                  <td>
                    <div className="row-actions">
                      <Link href={`/employees/${e.id}`} className="btn btn-ghost btn-sm">
                        View
                      </Link>
                      <Link href={`/employees/${e.id}/edit`} className="btn btn-ghost btn-sm">
                        Edit
                      </Link>
                      <DeleteButton id={e.id} name={e.name} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </main>
  );
}
