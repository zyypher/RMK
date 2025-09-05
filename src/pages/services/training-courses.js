// pages/services/training-courses.js
import { useEffect, useMemo, useState } from "react";
import Header from "../../components/headers/Header";
import Footer from "../../components/footers/Footer";
import PageHeader from "../../components/modules/Home/PageHeader";
import Newsletter from "../../components/modules/newsletter/Newsletter";
import CourseCardSimple from "../../components/partials/CourseCardSimple";
import CourseQuickView from "../../components/partials/CourseQuickView";
import { CATALOG } from "../../api/servicesCatalog";

const TrainingCoursesPage = () => {
  const categories = CATALOG.training.categories || [];
  const [selectedCat, setSelectedCat] = useState("food-safety");
  const [activeCourse, setActiveCourse] = useState(null);

  // Current category
  const currentCat = useMemo(
    () => categories.find((c) => c.id === selectedCat),
    [categories, selectedCat]
  );

  // Groups/Tracks
  const hasGroups = !!currentCat?.groups?.length;
  const groupList = currentCat?.groups || [];
  const [selectedGroup, setSelectedGroup] = useState(
    currentCat?.defaultGroup || groupList[0]?.id || null
  );

  // When category changes, (re)seed selectedGroup/track
  useEffect(() => {
    if (hasGroups) {
      setSelectedGroup(currentCat?.defaultGroup || groupList[0]?.id || null);
    } else {
      setSelectedGroup(null);
    }
    setSelectedTrack("all");
  }, [selectedCat]); // eslint-disable-line

  // Derive current group and tracks
  const currentGroup = useMemo(
    () => groupList.find((g) => g.id === selectedGroup),
    [groupList, selectedGroup]
  );
  const hasTracks = !!currentGroup?.tracks?.length;
  const trackList = currentGroup?.tracks || [];
  const [selectedTrack, setSelectedTrack] = useState("all");

  // When switching group, reset track
  useEffect(() => {
    setSelectedTrack("all");
  }, [selectedGroup]);

  // Items to display
  const items = useMemo(() => {
    if (!currentCat) return [];

    // Category without groups: items on the category itself
    if (!hasGroups) return currentCat.items || [];

    // Group with tracks
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
            {/* Left: category filter */}
            <aside className="col-lg-3">
              <div className="p-3 rounded-3 border">
                <h6 className="mb-3">Categories</h6>
                <ul className="list-unstyled m-0">
                  {categories.map((c) => (
                    <li key={c.id} className="mb-2">
                      <button
                        className={`btn w-100 text-start ${
                          selectedCat === c.id ? "btn-dark" : "btn-outline-dark"
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

            {/* Right: groups/tracks + grid */}
            <div className="col-lg-9">
              {/* Group chips */}
              {hasGroups && (
                <div className="mb-3">
                  <div className="chip-row">
                    {groupList
                      .filter((g) => g && g.id && g.name)
                      .map((g) => (
                        <button
                          key={g.id}
                          type="button"
                          className={`chip ${
                            selectedGroup === g.id ? "is-active" : ""
                          }`}
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
                      className={`chip chip--sm ${
                        selectedTrack === "all" ? "is-alt-active" : "is-alt"
                      }`}
                      onClick={() => setSelectedTrack("all")}
                      aria-pressed={selectedTrack === "all"}
                    >
                      All
                    </button>

                    {trackList
                      .filter((t) => t && t.id && t.name)
                      .map((t) => (
                        <button
                          key={t.id}
                          type="button"
                          className={`chip chip--sm ${
                            selectedTrack === t.id ? "is-alt-active" : "is-alt"
                          }`}
                          onClick={() => setSelectedTrack(t.id)}
                          aria-pressed={selectedTrack === t.id}
                        >
                          {t.name}
                        </button>
                      ))}
                  </div>
                </div>
              )}

              {/* Grid */}
              <div className="row g-4">
                {items.map((it) => (
                  <div key={it.id} className="col-md-6 col-lg-4">
                    <CourseCardSimple data={it} onOpen={setActiveCourse} />
                  </div>
                ))}
                {items.length === 0 && (
                  <div className="col-12 text-muted">No courses in this filter.</div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Quick View Modal */}
        <CourseQuickView
          open={!!activeCourse}
          data={activeCourse}
          onClose={() => setActiveCourse(null)}
        />
      </section>

      <div className="newsletter" data-aos="fade-up" data-aos-duration="800">
        <div className="container">
          <Newsletter title="Reach Out for Expert Guidance Today" />
        </div>
      </div>

      <Footer />

      {/* chip styles */}
      <style jsx>{`
        .chip-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .chip {
          -webkit-tap-highlight-color: transparent;
          appearance: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(15, 31, 43, 0.12);
          background: #ffffff;
          color: #0f1f2b;
          padding: 9px 14px;
          border-radius: 999px;
          font-size: 0.95rem;
          font-weight: 600;
          line-height: 1;
          letter-spacing: 0.1px;
          box-shadow: 0 2px 10px rgba(12, 31, 43, 0.06);
          transition: background 0.18s ease, color 0.18s ease,
            border-color 0.18s ease, box-shadow 0.18s ease, transform 0.18s ease;
          white-space: nowrap;
        }
        .chip:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 22px rgba(12, 31, 43, 0.1);
          border-color: rgba(12, 31, 43, 0.22);
        }
        .chip:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px rgba(12, 31, 43, 0.18);
        }
        .chip.is-active {
          background: #0c1f2b;
          color: #ffffff;
          border-color: #0c1f2b;
          box-shadow: 0 8px 22px rgba(12, 31, 43, 0.18);
        }
        .chip.is-alt {
          background: #ffffff;
          color: #0f1f2b;
        }
        .chip.is-alt-active {
          background: #eef4f8;
          color: #0d2a3a;
          border-color: rgba(12, 31, 43, 0.22);
          box-shadow: inset 0 2px 8px rgba(12, 31, 43, 0.08);
        }
        .chip--sm {
          padding: 7px 12px;
          font-size: 0.9rem;
        }
        @media (max-width: 575px) {
          .chip {
            font-size: 0.92rem;
            padding: 8px 12px;
          }
          .chip--sm {
            font-size: 0.88rem;
            padding: 6px 10px;
          }
        }
      `}</style>
    </>
  );
};

export default TrainingCoursesPage;
