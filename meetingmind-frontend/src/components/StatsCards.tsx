export default function StatsCards({

    meetings,

    tasks

}: any) {

    const pendingEmails = meetings.filter(
    (m: any) => m.approval_status !== "approved"
).length;

    return (

        <div className="grid md:grid-cols-3 gap-6 mb-8">

            <div className="bg-white rounded-xl shadow-lg p-6">

                <p className="text-gray-500">
                    Meetings Processed
                </p>

                <h1 className="text-4xl font-bold text-blue-700 mt-2">

                    {meetings.length}

                </h1>

            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">

                <p className="text-gray-500">
                    Open Tasks
                </p>

                <h1 className="text-4xl font-bold text-yellow-600 mt-2">

                    {

                        tasks.filter(

                            (t: any) =>

                                t.status === "Pending"

                        ).length

                    }

                </h1>

            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">

                <p className="text-gray-500">
    Emails to Review
</p>

<h1 className="text-4xl font-bold text-red-600 mt-2">
    {pendingEmails}
</h1>

            </div>

        </div>

    );

}