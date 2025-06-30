


import React, { useActionState, useState } from 'react';
import './style.css'

const accessAllowedEmails = [
    "thanh.huynh@idm.vn",
    "thong.hoang@idm.vn",
    "thaivan.nguyen@idm.vn",
    'tuancuong.vu@idm.vn',
    "ducthinh.pham@wowweekend.com",
    "kimngan.vo@wowweekend.com",
    "vananh.nguyen@wowweekend.com",
    "admin@gmail.com",
]
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export default function Root({ children }: { children: React.ReactNode }) {
    const [isError, setIsError] = useState(false);
    const actionAccess = localStorage.getItem('wwkDocsAccess')
    const [state, formAction, isPending] = useActionState(async (prev, formData) => {
        await delay(3000);
        const emailValue = formData.get('email');
        if (!emailValue) {
            setIsError(true)
            return false;
        }
        if (!accessAllowedEmails.includes(emailValue)) {
            setIsError(true)
            return false;
        }
        localStorage.setItem('wwkDocsAccess', 'true')
        setIsError(true)
        return true;

    }, false)


    if (!state && (!actionAccess || actionAccess !== 'true')) {
        return <div className="form-container">
            <div className="form-card">
                {/* <div className="form-header">
                    <h2 className="form-title">Email Subscription</h2>
                    <p className="form-description">Enter your email to get started</p>
                </div> */}

                <form action={formAction} className="form">
                    <div className="input-group">
                        <label htmlFor="email" className="input-label">
                            Email Address
                        </label>
                        <div className="input-wrapper">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                className={`input ${isPending ? "input-disabled" : ""}`}
                                disabled={isPending}
                                required
                            />
                            <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isPending}
                        className={`submit-button ${isPending ? "submit-button-loading" : ""}`}
                    >
                        {isPending ? (
                            <>
                                <div className="spinner"></div>
                                Submitting...
                            </>
                        ) : (
                            "Submit"
                        )}
                    </button>

                    {state === false && !isPending && isError && (
                        <div className="error-message">
                            <svg className="error-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="15" y1="9" x2="9" y2="15" />
                                <line x1="9" y1="9" x2="15" y2="15" />
                            </svg>
                            Email not allowed. Please use a different email address.
                        </div>
                    )}
                </form>
            </div>
        </div>
    }

    return <>{children}</>;
}