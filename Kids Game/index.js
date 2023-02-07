let input = document.getElementById('search');
let result = document.querySelector('#resultImg');
let btn = document.querySelector('button');

// By switch case :
btn.onclick = () => {
    let inVa = input.value;
    switch (inVa) {
        case 'a':
        case 'A':
            result.src = 'https://thumbs.dreamstime.com/b/red-apple-half-red-apple-16354511.jpg';
            break;

        case 'b':
        case 'B':
            result.src = 'https://cdn.britannica.com/68/195168-050-BBAE019A/football.jpg';
            break;

        case 'c':
        case 'C':
            result.src = 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_2x3.jpg';
            break;

        case 'd':
        case 'D':
            result.src = 'https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__480.jpg';
            break;

        case 'e':
        case 'E':
            result.src = 'https://cdn.thewire.in/wp-content/uploads/2022/11/16102056/Elephas_maximus_Bandipur-1600x1067.jpg';
            break;

        case 'f':
        case 'F':
            result.src = 'https://www.bunnycart.com/blog/wp-content/uploads/2021/09/Injury-in-Aquarium-Fish-Everything-You-Need-To-Know.jpg';
            break;

        case 'g':
        case 'G':
            result.src = 'https://images.indianexpress.com/2021/02/grapes-1200.jpg';
            break;

        case 'h':
        case 'H':
            result.src = 'https://thumbs.dreamstime.com/b/horse-herd-run-desert-sand-storm-against-dramatic-sky-60327349.jpg';
            break;

        case 'i':
        case 'I':
            result.src = 'https://d2cbg94ubxgsnp.cloudfront.net/Pictures/2000xAny/4/0/8/132408_shutterstock_406445776.jpg';
            break;

        case 'j':
        case 'J':
            result.src = 'https://comicvine.gamespot.com/a/uploads/scale_medium/12/124259/7538232-three-jokers-1-cvr-fnl-1583776056592.jpg';
            break;

        case 'k':
        case 'K':
            result.src = 'https://media.istockphoto.com/id/655953974/photo/colorful-kite-flying-with-waving-red-bow.jpg?s=612x612&w=0&k=20&c=zKhH6FDvdRCh7E1UfSb-IX_9f6PSW_QUjzQx-cNCPTU=';
            break;

        case 'l':
        case 'L':
            result.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg';
            break;

        case 'm':
        case 'M':
            result.src = 'https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2021/07/29/monkey-istock-1014037-1627507692.png?itok=aXidmhD0';
            break;

        case 'n':
        case 'N':
            result.src = 'https://thumbs.dreamstime.com/b/woman-touching-her-nose-beautiful-young-white-background-104053101.jpg';
            break;

        case 'o':
        case 'O':
            result.src = 'https://thumbs.dreamstime.com/b/sliced-orange-fruit-leaves-isolated-white-23331258.jpg';
            break;

        case 'p':
        case 'P':
            result.src = 'https://cdn.britannica.com/37/154237-050-A76A506D/blue-peafowl-tail-Indian-peacock-courtship-displays.jpg';
            break;

        case 'q':
        case 'Q':
            result.src = 'https://thumbs.dreamstime.com/b/majestic-queen-illustration-cute-50156327.jpg';
            break;

        case 'r':
        case 'R':
            result.src = 'https://images.unsplash.com/photo-1518796745738-41048802f99a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFiYml0fGVufDB8fDB8fA%3D%3D&w=1000&q=80';
            break;

        case 's':
        case 'S':
            result.src = 'https://images.pexels.com/photos/301599/pexels-photo-301599.jpeg?cs=srgb&dl=pexels-pixabay-301599.jpg&fm=jpg';
            break;

        case 't':
        case 'T':
            result.src = 'https://thumbs.dreamstime.com/b/tiger-portrait-horizontal-11392212.jpg';
            break;

        case 'u':
        case 'U':
            result.src = 'https://cdn.pixabay.com/photo/2021/10/09/10/45/umbrella-6693842_1280.png';
            break;

        case 'v':
        case 'V':
            result.src = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/omni1-1554733279.png';
            break;

        case 'w':
        case 'W':
            result.src = 'https://m.media-amazon.com/images/I/81+d6eSA0eL._UY445_.jpg';
            break;

        case 'x':
        case 'X':
            result.src = 'https://images.unsplash.com/photo-1609024849543-ff59df361d08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hyaXN0bWFzJTIwdHJlZXxlbnwwfHwwfHw%3D&w=1000&q=80';
            break;

        case 'y':
        case 'Y':
            result.src = 'https://cdn.britannica.com/40/188540-050-9AC748DE/Yak-Himalayas-Nepal.jpg';
            break;

        case 'z':
        case 'Z':
            result.src = 'https://www.treehugger.com/thmb/qFhPReYPPaVgTtHBOthYeMJVeZ0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1043597638-49acd69677d7442588c1d8930d298a59.jpg';
            break;

        default:
            result.src = 'https://cdn4.vectorstock.com/i/1000x1000/85/43/error-page-not-found-vector-27898543.jpg';
    }

    // To reset form
    input.value = '';
}
