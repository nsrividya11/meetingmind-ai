export default function TaskTable({ tasks }: any) {

  if (!tasks) return null;

  return (

    <div className="bg-white shadow rounded-xl p-6">

      <h2 className="text-2xl font-bold mb-5">
        Extracted Tasks
      </h2>

      <table className="w-full border">

        <thead>

          <tr className="bg-gray-100">

            <th className="border p-3">
              Assignee
            </th>

            <th className="border p-3">
              Task
            </th>

            <th className="border p-3">
              Due Date
            </th>

          </tr>

        </thead>

        <tbody>

          {tasks.map((task: any, index: number) => (

            <tr key={index}>

              <td className="border p-3">
                {task.assignee}
              </td>

              <td className="border p-3">
                {task.task}
              </td>

              <td className="border p-3">
                {task.due_date}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}