"use client";

import toast from "react-hot-toast";

export default function AnalysisPanel({ result }: any) {

    if (!result) return null;

    return (

        <div className="space-y-6 mt-8">

            <div className="bg-white rounded-xl shadow p-6">

                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Meeting Summary
                </h2>

                <div className="whitespace-pre-wrap text-gray-700 leading-7">
                    {result.analysis}
                </div>

            </div>

            <div className="bg-white rounded-xl shadow p-6">

                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Historical Context
                </h2>

                <div className="whitespace-pre-wrap text-gray-700 leading-7">
                    {result.related_context}
                </div>

            </div>

            <div className="bg-white rounded-xl shadow p-6">

                <div className="flex justify-between items-center mb-4">

                    <h2 className="text-2xl font-bold text-gray-900">
                        Follow-up Email
                    </h2>

                    <button

                        onClick={() => {

                            navigator.clipboard.writeText(

                                result.followup_email

                            );

                            toast.success("Email copied to clipboard.");

                        }}

                        className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded"

                    >

                        Copy Email

                    </button>

                </div>

                <div className="bg-gray-100 rounded-lg p-5 whitespace-pre-wrap text-gray-800 leading-7">

                    {result.followup_email}

                </div>

            </div>

            <div className="bg-white rounded-xl shadow p-6">

                <h2 className="text-2xl font-bold text-gray-900 mb-4">

                    Extracted Tasks

                </h2>

                <table className="w-full border">

                    <thead>

                        <tr className="bg-gray-700">

                            <th className="border p-3 text-left">
                                Assignee
                            </th>

                            <th className="border p-3 text-left">
                                Task
                            </th>

                            <th className="border p-3 text-left">
                                Due Date
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {result.tasks.map(

                            (task: any, index: number) => (

                                <tr key={index}>

                                    <td className="border p-3 text-gray-700">

                                        {task.assignee}

                                    </td>

                                    <td className="border p-3 text-gray-700">

                                        {task.task}

                                    </td>

                                    <td className="border p-3 text-gray-700">

                                        {task.due_date}

                                    </td>

                                </tr>

                            )

                        )}

                    </tbody>

                </table>

            </div>

        </div>

    );

}