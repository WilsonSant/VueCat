namespace DataRequest

open Fetch
open Fable.SimpleJson

module Request =

    type catReturn =
        { id: string
          height: int
          url: string
          width: int }

    let findList (responseList) =
        let obj = responseList |> Json.parseAs<catReturn list> |> List.head
        obj.url



    let getCatPhoto url =
        fetch url []
        |> Promise.bind (fun response -> response.text ())
        |> Promise.map (fun res -> res |> findList)
