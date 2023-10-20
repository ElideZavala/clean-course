type Dialog2 = {
    id?: string;
};

function closeDialog2(dialog: Dialog2) {
    if (!dialog.id) {
        throw new Error("Dialog is missing ID");
    }

    setTimeout(() => {
        removeFromDOM(
            dialog,
            document.getElementById(dialog.id!)! // <-- Non-null assertion
        );
    });
}

function removeFromDOM(dialog: Dialog2, element: Element) {
    element.parentNode!.removeChild(element);
    delete dialog.id;
}

// ==================== Refactorizado ======================
type VisibleDialog = { id: string };
type DestroyedDialog = {};
type Dialog3 = VisibleDialog | DestroyedDialog;

function closeDialog3(dialog: Dialog3) {
    if (!("id" in dialog)) {
        throw new Error("Dialog is missing ID");
    }

    setTimeout(() => {
        removeFromDOM3(dialog, document.getElementById(dialog.id)!);
    });
}

function removeFromDOM3(dialog: VisibleDialog, element: Element) {
    element.parentNode!.removeChild(element);
    delete dialog.id;
}
