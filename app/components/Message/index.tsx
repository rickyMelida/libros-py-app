import styles from "./index.module.css";
import Image from "next/image";
import avatarIcon from "~/public/img/avatar.svg";
import sendIcon from "~/public/img/send.png";

const index = () => {
  return (
    <div className="container">
      <hr />
      <div className="row">
        {/*<!--------------------  Contacts with writting  ------------------------------->*/}
        <div className={`col-md-2 ${styles["middle"]} bg-light`}>
          {/*<!--------------------  Info User  ---------------------->*/}
          <div className="row my-3">
            <div className="col-md-2 icon-to">
              <div className={styles["avatar-sm"]}>
                <Image
                  src={avatarIcon}
                  alt="Avatar"
                  title="Ricardo Melida"
                  width="30"
                />
              </div>
            </div>
            <div className="col-md-10 to">
              <strong className="d-block pt-3 mx-3">Ricardo Melida</strong>
            </div>
          </div>
          <hr />

          {/*<!--------------------  Field Search  ------------------->*/}
          <div className="row">
            <div className="col-md-12">
              <form>
                <div className="form-group form-search">
                  <input
                    type="search"
                    className="form-control"
                    id="search-chat"
                    placeholder="&#xF002; Buscar"
                    style={{ fontFamily: "Arial, FontAwesome" }}
                  />
                </div>
              </form>
            </div>
          </div>

          {/*<!--------------------  Contacts Chats  ------------------>*/}
          <div className={`row my-4 overflow-auto ${styles["contacts-chats"]}`}>
            <div className="col-md-12">
              {/*<!--------------------  Chat 1  ------------------>*/}
              <div className="row current-chat chats">
                <div className="col-md-12">
                  <div className="row">
                    <div className={`col-md-2 ${styles["icon-from"]}`}>
                      <div className={styles["avatar-sm"]}>
                        <Image
                          src={avatarIcon}
                          title="Nelly Ruiz Diaz"
                          alt="Avatar"
                          width="30"
                        />
                      </div>
                    </div>
                    <div className={`col-md-10 ml-2 ${styles["from"]}`}>
                      <strong className="d-block">Anahi Encina</strong>
                      <span>Lorem ipsum dolor</span>
                    </div>
                  </div>
                </div>
              </div>
              {/*<!--------------------  End Chat 1 --------------->*/}

              {/* {<!--------------------  Chat 2  ------------------>} */}
              <div className="row pt-4 chats">
                <div className="col-md-12">
                  <div className="row">
                    <div className={`col-md-2 ${styles["icon-from"]}`}>
                      <div className={styles["avatar-sm"]}>
                        <Image
                          src={avatarIcon}
                          title="Nelly Ruiz Diaz"
                          alt="Avatar"
                          width="30"
                        />
                      </div>
                    </div>
                    <div className={`col-md-10 ml-2 ${styles["from"]}`}>
                      <strong className="d-block">Nelly Ruiz Diaz</strong>
                      <span>Lorem ipsum dolor</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--------------------  End Chat 2 ---------------> */}

              {/* <!--------------------  Chat 3  ------------------> */}
              <div className="row pt-4 chats">
                <div className="col-md-12">
                  <div className="row">
                    <div className={`col-md-2 ${styles["icon-from"]}`}>
                      <div className={styles["avatar-sm"]}>
                        <Image
                          src={avatarIcon}
                          alt="Avatar"
                          title="Jose Franco"
                          width="30"
                        />
                      </div>
                    </div>
                    <div className={`col-md-10 ${styles["from"]}`}>
                      <strong className="d-block">Jose Franco</strong>
                      <span>Lorem ipsum dolor</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--------------------  End Chat 3 ---------------> */}

              {/* <!--------------------  Chat 4  ------------------> */}
              <div className="row pt-4 chats">
                <div className="col-md-12">
                  <div className="row">
                    <div className={`col-md-2 ${styles["icon-from"]}`}>
                      <div className={styles["avatar-sm"]}>
                        <Image
                          src={avatarIcon}
                          alt="Avatar"
                          title="Samuel Frutos"
                          width="30"
                        />
                      </div>
                    </div>
                    <div className={`col-md-10 ml-2 ${styles["from"]}`}>
                      <strong className="d-block">Samuel Frutos</strong>
                      <span>Lorem ipsum dolor</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--------------------  End Chat 4 ---------------> */}

              {/* <!--------------------  Chat 5  ------------------> */}
              <div className="row pt-4 chats">
                <div className="col-md-12">
                  <div className="row">
                    <div className={`col-md-2 ${styles["icon-from"]}`}>
                      <div className={styles["avatar-sm"]}>
                        <Image
                          src={avatarIcon}
                          alt="Avatar"
                          title="Eduardo Esquivel"
                          width="30"
                        />
                      </div>
                    </div>
                    <div className={`col-md-10 ml-2 ${styles["from"]}`}>
                      <strong className="d-block">Eduardo Esquivel</strong>
                      <span>Lorem ipsum dolor</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--------------------  End Chat 5 ----------------> */}

              {/* <!--------------------  Chat 6  ------------------> */}
              <div className="row pt-4 chats">
                <div className="col-md-12">
                  <div className="row">
                    <div className={`col-md-2 ${styles["icon-from"]}`}>
                      <div className={styles["avatar-sm"]}>
                        <Image
                          src={avatarIcon}
                          alt="Avatar"
                          title="Luis Cabrera"
                          width="30"
                        />
                      </div>
                    </div>
                    <div className={`col-md-10 ml-2 ${styles["from"]}`}>
                      <strong className="d-block">Luis Cabrera</strong>
                      <span>Lorem ipsum dolor</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--------------------  End Chat 6 -----------------> */}
            </div>
          </div>
        </div>

        {/* <!--------------------  Chats  -------------------------------> */}
        <div className="col-md-9">
          {/* <!--------------------  Info Contact User  ---------------> */}
          <div className="row align-items-center">
            <div className="col-md-1 col-lg-1 ">
              <div className={`${styles["avatar-sm"]} ${styles["name-chat"]}`}>
                <Image src={avatarIcon} alt="Avatar" width="30" />
              </div>
            </div>
            <div className={`col-md-10 col-lg-10 ${styles["chat-name"]}`}>
              <strong className="d-block pt-3">Anahi Encina</strong>
            </div>
          </div>
          <hr />
          {/* <!--------------------  Chat  ----------------------------> */}
          <div className="row">
            <div className={`col-md-12 m-2 overflow-auto ${styles["messages"]}`} id="message">
              <div className="m-2">
                <p className={`${styles["bubble-chat"]} ${styles["chat-other"]}`}>
                  Holiis
                  <cite className="d-block">Anahi 10:15</cite>
                </p>

                <p className={`${styles["bubble-chat"]} ${styles["chat-me"]}`}>
                  Hola que tal?
                  <cite className="d-block">Tu 16:01</cite>
                </p>
                <p className={`${styles["bubble-chat"]} ${styles["chat-other"]}`}>
                  Todo bien y vos?
                  <cite className="d-block">Anahi 16:11</cite>
                </p>

                <p className={`${styles["bubble-chat"]} ${styles["chat-me"]}`}>
                  Super bien tambien
                  <cite className="d-block">Tu 16:15</cite>
                </p>
                <p className={`${styles["bubble-chat"]} ${styles["chat-me"]}`}>
                  que andas haciendo
                  <cite className="d-block">Tu 16:15</cite>
                </p>

                <p className={`${styles["bubble-chat"]} ${styles["chat-other"]}`}>
                  Nada
                  <cite className="d-block">Anahi 16:11</cite>
                </p>
                <p className={`${styles["bubble-chat"]} ${styles["chat-other"]}`}>
                  y vos?
                  <cite className="d-block">Anahi 16:11</cite>
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-12">
                  <div className="container">
                    <form className={styles["form-message"]}>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          autoComplete="off"
                        />
                      </div>
                      <button type="button" className="btn btn-primary">
                        <Image
                          src={sendIcon}
                          alt="Send"
                          width="25"
                          id="btn-enviar"
                          title="Enviar"
                        />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
