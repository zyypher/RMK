// pages/services/training-courses.js
import { useEffect, useMemo, useState } from "react";
import Header from "../../components/headers/Header";
import Footer from "../../components/footers/Footer";
import PageHeader from "../../components/modules/Home/PageHeader";
import Newsletter from "../../components/modules/newsletter/Newsletter";
import CourseCardSimple from "../../components/partials/CourseCardSimple";
import { CATALOG } from "../../api/servicesCatalog";

const TrainingCoursesPage = () => {
    const categories = CATALOG.training.categories;
    const [selectedCat, setSelectedCat] = useState("food-safety");

    // For categories with groups (e.g., Food Safety)
    const currentCat = useMemo(
        () => categories.find((c) => c.id === selectedCat),
        [categories, selectedCat]
    );

    const hasGroups = !!currentCat?.groups?.length;
    const groupList = currentCat?.groups || [];

    const [selectedGroup, setSelectedGroup] = useState(
        currentCat?.defaultGroup || groupList[0]?.id || null
    );

    // For groups with tracks (e.g., Advanced -> ISO/HACCP/…)
    const currentGroup = useMemo(
        () => groupList.find((g) => g.id === selectedGroup),
        [groupList, selectedGroup]
    );
    const hasTracks = !!currentGroup?.tracks?.length;
    const trackList = currentGroup?.tracks || [];
    const [selectedTrack, setSelectedTrack] = useState("all");

    // Reset level/track when switching category
    useEffect(() => {
        setSelectedGroup(currentCat?.defaultGroup || groupList[0]?.id || null);
        setSelectedTrack("all");
    }, [selectedCat]); // eslint-disable-line

    // Reset track when changing group
    useEffect(() => {
        setSelectedTrack("all");
    }, [selectedGroup]);

    // Build items to show
    const items = useMemo(() => {
        if (!currentCat) return [];

        // If category has no groups, use items directly
        if (!hasGroups) return currentCat.items || [];

        // If group has tracks
        if (hasTracks) {
            if (selectedTrack === "all") {
                return trackList.flatMap((t) => t.items || []);
            }
            const track = trackList.find((t) => t.id === selectedTrack);
            return track ? track.items || [] : [];
        }

        // Plain group with items
        return currentGroup?.items || [];
    }, [currentCat, hasGroups, hasTracks, currentGroup, trackList, selectedTrack]);

    return (
        <>
            <Header />
            <PageHeader
                title="Training Courses"
                subtitle="Training Courses"
                image="/images/new/courses-banner.png"
            />

            <section className="padding-top padding-bottom">
                <div className="container">
                    <div className="row g-4">
                        {/* Left filter (main training categories) */}
                        <aside className="col-lg-3">
                            <div className="p-3 rounded-3 border">
                                <h6 className="mb-3">Categories</h6>
                                <ul className="list-unstyled m-0">
                                    {categories.map((c) => (
                                        <li key={c.id} className="mb-2">
                                            <button
                                                className={`btn w-100 text-start ${selectedCat === c.id ? "btn-dark" : "btn-outline-dark"
                                                    }`}
                                                onClick={() => setSelectedCat(c.id)}
                                            >
                                                {c.name}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </aside>

                        {/* Right: filters (levels/tracks) + grid */}
                        <div className="col-lg-9">
                            {/* Level chips (groups) */}
                            {hasGroups && (
                                <div className="mb-3">
                                    <div className="chip-row">
                                        {groupList
                                            .filter((g) => g && g.id && g.name)      // <-- guard against empties
                                            .map((g) => (
                                                <button
                                                    key={g.id}
                                                    type="button"
                                                    className={`chip ${selectedGroup === g.id ? "is-active" : ""}`}
                                                    onClick={() => setSelectedGroup(g.id)}
                                                    aria-pressed={selectedGroup === g.id}
                                                >
                                                    {g.name}
                                                </button>
                                            ))}
                                    </div>
                                </div>
                            )}

                            {/* Track chips */}
                            {hasTracks && (
                                <div className="mb-3">
                                    <div className="chip-row">
                                        <button
                                            type="button"
                                            className={`chip chip--sm ${selectedTrack === "all" ? "is-alt-active" : "is-alt"}`}
                                            onClick={() => setSelectedTrack("all")}
                                            aria-pressed={selectedTrack === "all"}
                                        >
                                            All
                                        </button>

                                        {trackList
                                            .filter((t) => t && t.id && t.name)      // <-- guard against empties
                                            .map((t) => (
                                                <button
                                                    key={t.id}
                                                    type="button"
                                                    className={`chip chip--sm ${selectedTrack === t.id ? "is-alt-active" : "is-alt"}`}
                                                    onClick={() => setSelectedTrack(t.id)}
                                                    aria-pressed={selectedTrack === t.id}
                                                >
                                                    {t.name}
                                                </button>
                                            ))}
                                    </div>
                                </div>
                            )}



                            {/* Courses grid */}
                            <div className="row g-4">
                                {items.map((it) => (
                                    <div key={it.id} className="col-md-6 col-lg-4">
                                        <CourseCardSimple data={it} />
                                    </div>
                                ))}
                                {items.length === 0 && (
                                    <div className="col-12 text-muted">No courses in this filter.</div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="newsletter" data-aos="fade-up" data-aos-duration="800">
                <div className="container">
                    <Newsletter title="Reach Out for Expert Guidance Today" />
                </div>
            </div>

            <Footer />

            {/* tiny style helpers for the small pills */}
            <style jsx>{`
  .chip-row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  /* Base “modern chip” */
  .chip {
    -webkit-tap-highlight-color: transparent;
    appearance: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(15,31,43,0.12);   /* light divider */
    background: #ffffff;                     /* explicit (no CSS vars) */
    color: #0f1f2b;                          /* ink */
    padding: 9px 14px;
    border-radius: 999px;
    font-size: 0.95rem;
    font-weight: 600;
    line-height: 1;
    letter-spacing: .1px;
    box-shadow: 0 2px 10px rgba(12,31,43,.06);
    transition: background .18s ease, color .18s ease,
                border-color .18s ease, box-shadow .18s ease,
                transform .18s ease;
    white-space: nowrap;
  }

  .chip:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 22px rgba(12,31,43,.10);
    border-color: rgba(12,31,43,.22);
  }

  .chip:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(12,31,43,.18);
  }

  /* Active (primary) */
  .chip.is-active {
    background: #0c1f2b;       /* your dark navy */
    color: #ffffff;
    border-color: #0c1f2b;
    box-shadow: 0 8px 22px rgba(12,31,43,.18);
  }

  /* Alt style used for tracks */
  .chip.is-alt { background: #ffffff; color: #0f1f2b; }
  .chip.is-alt-active {
    background: #eef4f8;       /* soft brand tint */
    color: #0d2a3a;
    border-color: rgba(12,31,43,.22);
    box-shadow: inset 0 2px 8px rgba(12,31,43,.08);
  }

  .chip--sm { padding: 7px 12px; font-size: 0.9rem; }

  @media (max-width: 575px) {
    .chip { font-size: 0.92rem; padding: 8px 12px; }
    .chip--sm { font-size: 0.88rem; padding: 6px 10px; }
  }
`}</style>
        </>
    );
};

export default TrainingCoursesPage;
