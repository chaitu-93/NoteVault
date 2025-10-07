export const renderNotes = (notes) => {
    let newNote = notes.map(({ id, note, title, isPinned, isArchived }) => {
        return (
            `<div class="single-note d-flex direction-column gap-sm">
                <div class="d-flex align-center justify-between title-container">
                    <span class="single-note-title">${title}</span>
                    <button class="button del-btn v-hidden" data-type="del" data-id =${id}>
                        <span class="material-icons-outlined" data-type="del" data-id =${id}>delete</span>
                    </button>
                </div>
                <p>${note}</p>
                <div class="d-flex options gap-sm">
                    <button class="button btn pinned-btn v-hidden"  data-type="pinned" data-id =${id}>
                        <span class=${isPinned?"material-icons":"material-icons-outlined" }  data-type="pinned" data-id =${id}> push_pin</span>
                    </button>
                    <button class="button btn pinned-btn v-hidden" data-type="archive" data-id =${id}>
                        <span class="material-icons-outlined" data-type="archive" data-id =${id}>archive</span>
                    </button>
                </div>
            </div>`
        );
    });

      newNote = newNote.join("")
    return newNote
};

