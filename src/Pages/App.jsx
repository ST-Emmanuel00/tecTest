import React, { useState } from 'react'
import { apps, people } from '../Data/Data'
import { fizzFizz, isPalindromo, yungestPeople } from '../Funtions/Funtions'
import { ModalButton } from '../Components/ModalButton'
import { Modal } from '../Components/Modal'
import { Inputs } from '../components/inputs'

export const App = () => {

  const [appName, setAppName] = useState("")
  const [category, setCategory] = useState("")
  const [appsList, setAppList] = useState(apps)

  const [modal, setModal] = useState(true)
  const [modal1, setModalUno] = useState(false)
  const [modal2, setModalDos] = useState(false)



  const openModal = () => {

    setModal(true)

  }

  const closedModal = () => {

    setModal(false)

  }

  const addApp = () => {

    const app = {

      appName,
      category

    }

    appsList.push(app)

    setAppName("")
    setCategory("")


  }

  const removeApp = (appToDelete) => {


    const apps = [...appsList]

    const newAppList = apps.splice(appToDelete, 1)
      |
      setAppList(apps)


  }

  const [sentence, setSentence] = useState("")
  const [palindromoResponse, setPalindromoResponse] = useState("")

  const [number, setNumber] = useState("")
  const [response, setResponse] = useState("")







  // console.log(yungestPeople(people))

  return (
    <>

      <main>
        <div className='container'>
          <div className='title'>

            <h2>Aplicaciones</h2>
            <div>

              <ModalButton onClick={() => setModalDos(true)}>Palindromo</ModalButton>

              <ModalButton onClick={() => setModalUno(true)}>Numero entero</ModalButton>
              <ModalButton onClick={openModal}>Agregar app</ModalButton>
              <ModalButton onClick={() => {
                yungestPeople(people).map((person) => {

                  alert(`Nombre: ${person.name} Edad: ${person.age}`)
                })
              }}>Lista de menores</ModalButton>


            </div>


          </div>

          <div className='info'>
            <div className='info-list'>
              <table className='table'>
                {
                  appsList.map((app, index) => (
                    <>

                      <div class="card mb-3">
                        <div class="card-body">
                          <div>
                            <h5 class="card-title">{`${index + 1} ${app.appName}`}</h5>
                            <p class="card-text">{app.category}</p>
                          </div>

                          <div>
                            <button className='btn btn-purple' type='button' onClick={() => removeApp(index)}>Eliminar</button>

                          </div>

                        </div>

                      </div>


                    </>

                  ))
                }
              </table>
            </div>

            <div>

              {modal ?

                <Modal value={"Agregar app"} onClick={addApp} closedModal={() => setModal(false)}>

                  <Inputs label={"Nombre aplicacion"} placeholder={"Ejemplo: Facebook"}
                    value={appName} onChange={e => setAppName(e.target.value)}
                  />

                  <Inputs label={"Categoria"} placeholder={"Ejemplo: Redes sociales"}
                    value={category} onChange={e => setCategory(e.target.value)}
                  />


                </Modal>





                : null}

              {modal1 ?
                <div>


                  <Modal value={"Validar numero"}
                    closedModal={() => setModalUno(false)}
                    onClick={() => {

                      setResponse(fizzFizz(number))



                    }} >

                    <Inputs label={"Numero entero"} type='number'
                      value={number} onChange={e => setNumber(e.target.value)} />
                    <Inputs label={"Respuesta"} placeholder={"Aqui va la respuesta"}
                      value={response} onChange={e => setResponse(e.target.value)}
                    />


                  </Modal>



                </div>

                : null}

              {modal2 ?
                <div>


                  <Modal value={"Validar palindromo"} closedModal={() => setModalDos(false)}
                    onClick={() => {

                      setPalindromoResponse(isPalindromo(sentence) ? "Es palaindromo" : "No es palindromo")


                    }}  >

                    <Inputs label={"Escribe una frase"} placeholder={"Anita lava la tina"}
                      value={sentence} onChange={e => setSentence(e.target.value)} />
                    <Inputs label={"Respuesta"} placeholder={"Aqui va la respuesta"}
                      value={palindromoResponse} onChange={e => setPalindromoResponse(e.target.value)}
                    />


                  </Modal>


                </div>

                : null}

            </div>

          </div>


        </div>








      </main>


    </>
  )
}

