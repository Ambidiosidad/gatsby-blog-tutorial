import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const UsingSSR = ({ serverData }) => {
    return (
        <Layout>
            <h1>
                <b>Post 4 del blog</b>
            </h1>
            <p>
        Esta es la entrada numero 4 del blog" "}
                <code>dog.ceo/api/breed/shiba/images/random</code>:
            </p>
            <img
                style={{ width: "320px", borderRadius: "var(--border-radius)" }}
                alt="A random dog"
                src={serverData.message}
            />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac posuere lectus, non porttitor nisi. Duis semper nibh quis risus tempor hendrerit. Nullam commodo augue eu risus euismod euismod. Vestibulum sit amet felis ornare, imperdiet ligula vitae, pulvinar magna. Fusce vel tristique neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce porta enim posuere risus iaculis, aliquam finibus mauris auctor. Mauris gravida est ipsum, eu viverra eros aliquet ut. Curabitur rutrum purus iaculis, placerat mi id, tincidunt libero.

                Nullam imperdiet neque quam, a scelerisque sem sollicitudin sed. Sed at massa id nisi rhoncus porttitor quis non nisi. Nulla ultricies sollicitudin nisl. Integer faucibus eros bibendum, bibendum ante sit amet, tincidunt nisl. Pellentesque luctus magna a nisi ultricies, a volutpat urna euismod. Praesent sit amet risus quam. Praesent vitae massa justo. Cras ut orci sit amet purus rutrum ultrices. Vivamus aliquam diam sit amet luctus condimentum. Sed ac nisi consectetur, aliquam dui ac, ullamcorper elit. Etiam id ullamcorper justo, in pharetra nunc. Nullam auctor tincidunt ex quis congue. Nunc sit amet iaculis quam, a rutrum nunc.

                Maecenas sed lacinia nulla, ac efficitur est. Etiam sagittis non ex a mollis. Sed placerat venenatis sapien, nec pretium ipsum semper quis. Mauris in pretium mauris, sed malesuada tellus. Cras tortor diam, ornare id diam eget, finibus ornare elit. Donec aliquam ipsum eget sapien molestie mollis. Cras faucibus dui diam, ac maximus enim euismod a. Cras ac metus id massa pharetra placerat at id ligula. Etiam at convallis nulla. Etiam sit amet eros sit amet nulla hendrerit feugiat. Maecenas auctor dignissim mi, quis consectetur ante. Fusce felis eros, venenatis rutrum leo a, malesuada tempus ipsum.

                Nunc elit libero, molestie non consequat vitae, lacinia in neque. Integer mollis urna sem, sed dignissim augue cursus ac. Etiam pharetra orci placerat ultrices aliquet. Fusce a nulla vestibulum, laoreet velit quis, dictum risus. Suspendisse sit amet imperdiet urna, in tristique magna. Duis tortor quam, molestie id maximus ac, vehicula sit amet dui. Phasellus id nibh quis libero scelerisque condimentum.

                Cras hendrerit quam quis molestie suscipit. Vivamus ut metus neque. Duis sit amet venenatis orci. In efficitur arcu in ullamcorper pulvinar. Duis ultricies arcu eu augue rutrum, vitae scelerisque sapien dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula dui a arcu sollicitudin suscipit. Donec mattis nunc leo. Pellentesque ultrices justo eget maximus lobortis. Praesent ornare faucibus mattis.
                .
            </p>
            <Link to="/">Pagina de inicio</Link>
        </Layout>
    )
}

export const Head = () => <Seo title="Post 1 del blog" />

export default UsingSSR

export async function getServerData() {
    try {
        const res = await fetch(`https://dog.ceo/api/breed/shiba/images/random`)
        if (!res.ok) {
            throw new Error(`Response failed`)
        }
        return {
            props: await res.json(),
        }
    } catch (error) {
        return {
            status: 500,
            headers: {},
            props: {},
        }
    }
}