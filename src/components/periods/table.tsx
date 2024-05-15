import { Table } from "react-bootstrap";

export function PeriodsTable({ periods }) {
  return (
    <Table hover>
      <thead>
        <tr>
          <th>Mes</th>
          <th>Depositos</th>
          <th>Creado en</th>
          <th>Finalizado</th>
        </tr>
      </thead>
      <tbody>
        {periods.map((period) => (
          <tr key={period?.month}>
            <td>{period?.month}</td>
            {!period.value && (
              <td colSpan={100} className="text-center">
                No se ha creado un registro para este mes
              </td>
            )}
            {Boolean(period.value) && (
              <>
                <td>{period.value?.amount}</td>
                <td>{period.value?.createdAt.toString()}</td>
                <td></td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
