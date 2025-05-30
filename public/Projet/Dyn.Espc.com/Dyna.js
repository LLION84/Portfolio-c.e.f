
let form = document.querySelector("form");
    form.addEventListener("submit", (e) => {

        e.preventDefault();


        let firstName = document.querySelector("#first-name").value;

        let lastName = document.querySelector("#last-name").value;

        let message = document.querySelector("#message").value;


        if (firstName == "" || lastName == "" || message == "") {

            let messageErreur = document.querySelector("#error-message");

            messageErreur.style.display = "block";

        } else {

           
            let commentList = document.querySelector('#comment-list');

            

            if (!commentList) {

                // Créer la liste des commentaires si elle n'existe pas

                commentList = document.createElement('div');

                commentList.id = 'comment-list';

                commentList.appendChild(newComment);

            }

          


            // Créer le nouvel élément de commentaire -1

            let newComment = document.createElement('div');

            newComment.className = 'flex space-x-4 text-sm text-gray-500';

            commentList.insertBefore(newComment, commentList.secondChild);


            // 2

            let newComment2 = document.createElement('div');

            newComment2.className ='flex-1 py-10 border-t border-gray-200'

            commentList.insertBefore(newComment2, commentList.secondChild);

            newComment.appendChild(newComment2);

            // 3

            let newComment3 = document.createElement('div');

            newComment3.className ='font-medium text-gray-900'

            newComment3.innerHTML = `<h3>${firstName} ${lastName}</h3>`;

            commentList.insertBefore(newComment3, commentList.secondChild);

            newComment2.appendChild(newComment3);

            // 4

            let newComment4 = document.createElement('div');

            newComment4.className ='prose prose-sm mt-4 max-w-none text-gray-500'

            newComment4.innerHTML = `<p>${message}</p>`;

            commentList.insertBefore(newComment4, commentList.secondChild);

            newComment2.appendChild(newComment4);

            


            form.reset();

            document.querySelector("#error-message").style.display = "none";

        }

    });


