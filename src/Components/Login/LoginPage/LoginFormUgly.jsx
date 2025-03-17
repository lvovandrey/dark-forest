
export const LoginFormUgly = (props) => {

    return <div>
        <form>
            <div>
                <input placeholder={"login"} />
            </div>
            <div>
                <input placeholder={"password"} />
            </div>
            <div>
                <label>
                    <input type="checkbox" />
                    Remember
                </label>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    </div>

}