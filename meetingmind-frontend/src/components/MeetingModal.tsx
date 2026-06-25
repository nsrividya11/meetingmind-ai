"use client";

import jsPDF from "jspdf";

import toast from "react-hot-toast";

export default function MeetingModal({

    meeting,

    onClose,

    onApprove

}: any) {

    if (!meeting) return null;

    function downloadPDF() {

    const doc = new jsPDF();

    let y = 20;

    doc.setFontSize(20);
    doc.text("MeetingMind AI Report", 20, y);

    y += 15;

    doc.setFontSize(14);
    doc.text(`Meeting ID: ${meeting.id}`, 20, y);

    y += 15;

    doc.setFontSize(16);
    doc.text("Meeting Analysis", 20, y);

    y += 10;

    const analysis = doc.splitTextToSize(meeting.analysis, 170);
    doc.setFontSize(11);
    doc.text(analysis, 20, y);

    y += analysis.length * 7 + 10;

    doc.setFontSize(16);
    doc.text("Historical Context", 20, y);

    y += 10;

    const context = doc.splitTextToSize(
        meeting.related_context,
        170
    );

    doc.setFontSize(11);
    doc.text(context, 20, y);

    y += context.length * 7 + 10;

    doc.setFontSize(16);
    doc.text("Follow-up Email", 20, y);

    y += 10;

    const email = doc.splitTextToSize(
        meeting.followup_email,
        170
    );

    doc.setFontSize(11);
    doc.text(email, 20, y);

    doc.save(`Meeting_${meeting.id}.pdf`);

}

    return (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

            <div className="bg-white rounded-2xl shadow-2xl w-[900px] max-h-[90vh] overflow-y-auto p-8">

                <div className="flex justify-between items-center">

                    <h2 className="text-3xl font-bold text-gray-900">

                        Meeting #{meeting.id}

                    </h2>

                    <button

                        onClick={onClose}

                        className="text-2xl"

                    >

                        ✕

                    </button>

                </div>

                <hr className="my-6" />

                <h3 className="text-xl font-bold text-blue-700">

                    Meeting Analysis

                </h3>

                <div className="mt-3 whitespace-pre-wrap text-gray-700">

                    {meeting.analysis}

                </div>

                <hr className="my-6" />

                <h3 className="text-xl font-bold text-blue-700">

                    Historical Context

                </h3>

                <div className="mt-3 whitespace-pre-wrap text-gray-700">

                    {meeting.related_context}

                </div>

                <hr className="my-6" />

                <h3 className="text-xl font-bold text-blue-700">

                    Follow-up Email

                </h3>

                <div className="bg-gray-100 rounded-xl p-5 mt-3 whitespace-pre-wrap text-gray-800">

                    {meeting.followup_email}

                </div>

                <div className="flex justify-end gap-4 mt-8">

                    <button

    onClick={downloadPDF}

    className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 rounded-lg"

>

    Download PDF

</button>

                    <button

                        onClick={onClose}

                        className="bg-gray-400 hover:bg-gray-500 text-white px-5 py-3 rounded-lg"

                    >

                        Close

                    </button>

                    {

                        meeting.approval_status !== "approved" && (

                            <button

                                onClick={() => {

                                    onApprove(meeting.id);

                                    onClose();

                                }}

                                className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg"

                            >

                                Approve Email

                            </button>

                        )

                    }

                </div>

            </div>

        </div>

    );

}