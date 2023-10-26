

function Form() {


    return (
        <>
            <h1>FORMULAIRE</h1>
            <hr></hr>
            <form>
                <div>
                    <label>
                        Titre du projet :
                    </label>
                    <input type="text" name="" id="" />
                </div>
                <div>
                    <label>
                        Contenu du projet :
                    </label>
                    <input type="text" name="" id="" />
                </div>
                <div>
                    <label>
                        Ou en êtes-vous dans ce projet ?
                    </label>
                </div>
                <div>
                    <select name="statut" id="statut-select">
                        <option value="">Merci de dire l'avancée du projet</option>
                        <option value="non-terminé">Non Terminé</option>
                        <option value="en-cours">En cours</option>
                        <option value="en-attente">En attente</option>
                        <option value="terminé">Terminé</option>
                    </select>
                </div>
                <button>Confirmer</button>
            </form>
        </>


    )
}

export default Form