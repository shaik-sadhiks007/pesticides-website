import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div className="bg-[#DACEC2] flex justify-center">
            <div className="max-w-4xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">Terms of Use for VM ECO Grow</h1>
                <p className="text-gray-600 mb-6">Last Updated: 10/04/2025</p>

                <div className="space-y-6 text-justify">
                    <section>
                        <p className="mb-4">
                            Welcome to <a href="https://www.vmecogrow.com" className="text-blue-600 hover:underline">www.vmecogrow.com</a>. These <Link to="/terms-and-conditions" className="text-blue-600 hover:underline">Terms of Use</Link> govern your access to and use of the Site. By accessing or using the Site, you agree to be bound by these Terms. If you disagree with any part of these Terms, please do not use our Site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">1. Intellectual Property</h2>
                        <p className="mb-4">
                            All content on this Site, including but not limited to text, graphics, logos, images, and software, is the property of VM ECO Grow or its content suppliers and is protected by UK and international copyright laws. The compilation of all content on this Site is the exclusive property of VM ECO Grow.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
                        <p className="mb-4">
                            Permission is granted to temporarily download one copy of the materials (information or software) on VM ECO Grow's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Modify or copy the materials</li>
                            <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial)</li>
                            <li>Attempt to decompile or reverse engineer any software contained on VM ECO Grow's website</li>
                            <li>Remove any copyright or other proprietary notations from the materials</li>
                            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
                        <p className="mb-4">
                            The materials on VM ECO Grow's website are provided on an 'as is' basis. VM ECO Grow makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">4. Limitations</h2>
                        <p className="mb-4">
                            In no event shall VM ECO Grow or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on VM ECO Grow's website, even if VM ECO Grow or a VM ECO Grow authorized representative has been notified orally or in writing of the possibility of such damage.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">5. Accuracy of Materials</h2>
                        <p className="mb-4">
                            The materials appearing on VM ECO Grow's website could include technical, typographical, or photographic errors. VM ECO Grow does not warrant that any of the materials on its website are accurate, complete or current. VM ECO Grow may make changes to the materials contained on its website at any time without notice. However VM ECO Grow does not make any commitment to update the materials.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">6. Links</h2>
                        <p className="mb-4">
                            VM ECO Grow has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by VM ECO Grow of the site. Use of any such linked website is at the user's own risk.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">7. Modifications</h2>
                        <p className="mb-4">
                            VM ECO Grow may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
                        <p className="mb-4">
                            These terms and conditions are governed by and construed in accordance with the laws of the United Kingdom and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
                        <p className="mb-4">
                            If you have any questions about these Terms, please contact us at <a href="mailto:connect@vmecogrow.com" className="text-blue-600 hover:underline">connect@vmecogrow.com</a>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions; 