const Page = () => {
  const percentageMaintenanceCategory = [
    { category: 'A', jumlah: 4, percentage: 11 },
    { category: 'B', jumlah: 14, percentage: 40 },
    { category: 'C', jumlah: 17, percentage: 49 },
  ];

  const categoryA = [
    { taskType: 'Preventive Maintenance (PM)', jumlah: '0', percentage: '0' },
    { taskType: 'Condition Monitoring (CM)', jumlah: '2', percentage: '50' },
    { taskType: 'Failure Finding (FF)', jumlah: '2', percentage: '50' },
    { taskType: 'On-Time Change (OTC)', jumlah: '0', percentage: '0' },
  ];
  
  const categoryB = [
    { taskType: 'Preventive Maintenance (PM)', jumlah: '7', percentage: '50' },
    { taskType: 'Condition Monitoring (CM)', jumlah: '4', percentage: '29' },
    { taskType: 'Failure Finding (FF)', jumlah: '3', percentage: '21' },
    { taskType: 'On-Time Change (OTC)', jumlah: '0', percentage: '0' },
  ];
  
  const categoryC = [
    { taskType: 'Preventive Maintenance (PM)', jumlah: '13', percentage: '76' },
    { taskType: 'Condition Monitoring (CM)', jumlah: '0', percentage: '0' },
    { taskType: 'Failure Finding (FF)', jumlah: '0', percentage: '0' },
    { taskType: 'On-Time Change (OTC)', jumlah: '4', percentage: '24' },
  ];

  const percentageTaskType = [
    { taskType: 'Preventive Maintenance (PM)', jumlah: '20', percentage: '43' },
    { taskType: 'Condition Monitoring (CM)', jumlah: '6', percentage: '13' },
    { taskType: 'Failure Finding (FF)', jumlah: '12', percentage: '26' },
    { taskType: 'On-Time Change (OTC)', jumlah: '8', percentage: '17' },
  ]

  return (
    <>
      <div>
        <h1
          className="my-8 border rounded-xl w-full p-4 text-center font-bold text-xl"
          style={{
            backgroundColor: "#d2f7f4",
            color: "#219C90",
            borderColor: "#219C90",
          }}
        >
          Summary Propeller System
        </h1>

        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="bg-blue-800 text-white text-center py-2 font-bold">
            Percentage of Maintenance Category
          </div>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 text-center">Maintenance Category</th>
                <th colSpan={2} className="py-2 px-4 text-center">Failure Mode</th>
              </tr>
              <tr className="bg-gray-100">
                <th className="py-2 px-4"></th>
                <th className="py-2 px-4 text-center">Jumlah</th>
                <th className="py-2 px-4 text-center">%</th>
              </tr>
            </thead>
            <tbody>
              {percentageMaintenanceCategory.map((row, index) => (
                <tr key={index} className="border-t">
                  <td className="py-2 px-4 text-center">{row.category}</td>
                  <td className="py-2 px-4 text-center">{row.jumlah}</td>
                  <td className="py-2 px-4 text-center">{row.percentage}%</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-blue-100">
                <td className="py-2 px-4 text-center font-bold">Jumlah Tasklist</td>
                <td className="py-2 px-4 text-center font-bold">35</td>
                <td className="py-2 px-4 text-center font-bold">100%</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-10">
          <div className="bg-blue-800 text-white text-center py-2 font-bold">
            Maintenance Category A
          </div>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 text-left">Task Type</th>
                <th className="py-2 px-4 text-center">Jumlah</th>
                <th className="py-2 px-4 text-center">%</th>
              </tr>
            </thead>
            <tbody>
              {categoryA.map((row, index) => (
                <tr key={index} className="border-t">
                  <td className="py-2 px-4">{row.taskType}</td>
                  <td className="py-2 px-4 text-center">{row.jumlah}</td>
                  <td className="py-2 px-4 text-center">{row.percentage}%</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-blue-100">
                <td className="py-2 px-4 font-bold">Jumlah Tasklist</td>
                <td className="py-2 px-4 text-center font-bold">4</td>
                <td className="py-2 px-4 text-center font-bold">100%</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-10">
          <div className="bg-blue-800 text-white text-center py-2 font-bold">
            Maintenance Category B
          </div>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 text-left">Task Type</th>
                <th className="py-2 px-4 text-center">Jumlah</th>
                <th className="py-2 px-4 text-center">%</th>
              </tr>
            </thead>
            <tbody>
              {categoryB.map((row, index) => (
                <tr key={index} className="border-t">
                  <td className="py-2 px-4">{row.taskType}</td>
                  <td className="py-2 px-4 text-center">{row.jumlah}</td>
                  <td className="py-2 px-4 text-center">{row.percentage}%</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-blue-100">
                <td className="py-2 px-4 font-bold">Jumlah Tasklist</td>
                <td className="py-2 px-4 text-center font-bold">14</td>
                <td className="py-2 px-4 text-center font-bold">100%</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-10">
          <div className="bg-blue-800 text-white text-center py-2 font-bold">
            Maintenance Category C
          </div>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 text-left">Task Type</th>
                <th className="py-2 px-4 text-center">Jumlah</th>
                <th className="py-2 px-4 text-center">%</th>
              </tr>
            </thead>
            <tbody>
              {categoryC.map((row, index) => (
                <tr key={index} className="border-t">
                  <td className="py-2 px-4">{row.taskType}</td>
                  <td className="py-2 px-4 text-center">{row.jumlah}</td>
                  <td className="py-2 px-4 text-center">{row.percentage}%</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-blue-100">
                <td className="py-2 px-4 font-bold">Jumlah Tasklist</td>
                <td className="py-2 px-4 text-center font-bold">17</td>
                <td className="py-2 px-4 text-center font-bold">100%</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-10">
          <div className="bg-blue-800 text-white text-center py-2 font-bold">
            Percentage of task type
          </div>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 text-left">Task Type</th>
                <th className="py-2 px-4 text-center">Jumlah</th>
                <th className="py-2 px-4 text-center">%</th>
              </tr>
            </thead>
            <tbody>
              {percentageTaskType.map((row, index) => (
                <tr key={index} className="border-t">
                  <td className="py-2 px-4">{row.taskType}</td>
                  <td className="py-2 px-4 text-center">{row.jumlah}</td>
                  <td className="py-2 px-4 text-center">{row.percentage}%</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-blue-100">
                <td className="py-2 px-4 font-bold">Jumlah Tasklist</td>
                <td className="py-2 px-4 text-center font-bold">46</td>
                <td className="py-2 px-4 text-center font-bold">100%</td>
              </tr>
            </tfoot>
          </table>
        </div>

      </div>
    </>
  )
}

export default Page