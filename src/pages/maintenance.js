export default function MaintenancePage() {
    return (
        <div className="rmk-page">
            {/* Header */}
            <header className="rmk-header">
                <div className="rmk-container rmk-nav">
                    <div className="rmk-brand">
                        <div className="rmk-mark">R</div>
                        <div>
                            <div className="rmk-brandName">RMK Experts</div>
                            <div className="rmk-brandSub">Training Services</div>
                        </div>
                    </div>

                    <nav className="rmk-links">
                        <span>Home</span>
                        <span>About</span>
                        <span>Services</span>
                        <span>Contact Us</span>
                    </nav>
                </div>
            </header>

            {/* Main */}
            <main className="rmk-main">
                <div className="rmk-container rmk-hero">
                    <section>
                        <div className="rmk-badge">✦ We’re improving your experience</div>

                        <h1 className="rmk-title">
                            Site Under <span className="rmk-accent">Maintenance</span>
                        </h1>

                        <p className="rmk-desc">
                            We’re performing a quick upgrade to keep everything fast and secure.
                            Please check back shortly.
                        </p>

                        <div className="rmk-actions">
                            <div className="rmk-status">
                                <span className="rmk-dot" />
                                Maintenance in progress
                            </div>

                            <div className="rmk-btnRow">
                                <a
                                    className="rmk-btnPrimary"
                                    href="mailto:admin@rmktheexperts.com"
                                >
                                    Contact Support
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            {/* Styles */}
            <style jsx>{`
        .rmk-page {
          min-height: 100vh;
          background: #fbfbfc;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, sans-serif;
          color: #0f172a;
        }

        .rmk-container {
          width: min(1100px, calc(100% - 48px));
          margin: auto;
        }

        .rmk-header {
          padding: 24px 0;
        }

        .rmk-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .rmk-brand {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .rmk-mark {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: #e9eefc;
          color: #2563eb;
          display: grid;
          place-items: center;
          font-weight: 800;
          font-size: 16px;
        }

        .rmk-brandName {
          font-weight: 700;
          line-height: 1.1;
        }

        .rmk-brandSub {
          font-size: 12px;
          color: #64748b;
        }

        .rmk-links {
          display: flex;
          gap: 28px;
          font-weight: 600;
          color: #0f172a;
        }

        .rmk-main {
          padding: 80px 0;
        }

        .rmk-hero {
          max-width: 640px;
        }

        .rmk-badge {
          font-weight: 600;
          color: #334155;
          margin-bottom: 12px;
        }

        .rmk-title {
          font-size: clamp(42px, 5vw, 60px);
          font-weight: 800;
          line-height: 1.05;
          margin: 0;
        }

        .rmk-accent {
          color: #2563eb;
        }

        .rmk-desc {
          margin-top: 16px;
          font-size: 15px;
          line-height: 1.6;
          color: #475569;
        }

        .rmk-actions {
          margin-top: 28px;
        }

        .rmk-status {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          padding: 10px 14px;
          border-radius: 14px;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
          font-weight: 600;
          color: #334155;
        }

        .rmk-dot {
          width: 10px;
          height: 10px;
          background: #f97316;
          border-radius: 50%;
          box-shadow: 0 0 0 4px rgba(249, 115, 22, 0.18);
        }

        .rmk-btnRow {
          margin-top: 18px;
        }

        .rmk-btnPrimary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 20px;
          border-radius: 14px;
          background: #0f172a;
          color: #ffffff;
          text-decoration: none;
          font-weight: 700;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
          box-shadow: 0 16px 30px rgba(15, 23, 42, 0.18);
        }

        .rmk-btnPrimary:hover {
          transform: translateY(-1px);
          box-shadow: 0 20px 44px rgba(15, 23, 42, 0.22);
        }

        @media (max-width: 900px) {
          .rmk-links {
            display: none;
          }
        }
      `}</style>
        </div>
    );
}
