function deleteItem(id) {
    fetch(path + id, {
        method: "DELETE"
    });

    window.location.reload();
}