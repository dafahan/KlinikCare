import { getSchedule } from "../lib/data";

const ScheduleTable = async () => {
          const schedule = await getSchedule();
          return (
                    <table className="w-full text-left text-gray-500">
                              <thead className="text-sm text-gray-700 uppercase bg-gray-50">
                                        <tr>
                                        <th className="py-3 px-6">Availability</th>
                                        <th className="py-3 px-6">Day</th>
                                        <th className="py-3 px-6">Time</th>
                                        </tr>
                              </thead>
                              <tbody>
                                        {schedule.map((schedule:string, index:any) => (
                                                  <tr key={schedule.id} className="bg-white border-b">
                                                  <td className="py-3 px-6">{schedule.availability}</td>
                                                  <td className="py-3 px-6">{schedule.day}</td>
                                                  <td className="py-3 px-6">{schedule.time}</td>
                                                  <td></td>
                                                  </tr>
                                        ))}
                              </tbody>
                    </table>
          );
};

export default ScheduleTable;